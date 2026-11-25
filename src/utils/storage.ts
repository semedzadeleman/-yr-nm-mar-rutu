import type {
  AgeGroup,
  DifficultyLevel,
  GameConfig,
  GameResult,
  Question,
  StudentProgress,
  SubjectId,
} from '../types';

const STORAGE_KEY = 'oyrenme_marsrutu_progress_v1';

export const AGE_LABELS: Record<AgeGroup, string> = {
  '5-6': '5–6 yaş',
  '7-8': '7–8 yaş',
  '9-10': '9–10 yaş',
  '11-12': '11–12 yaş',
};

export const DIFFICULTY_LABELS: Record<DifficultyLevel, string> = {
  beginner: 'Başlanğıc',
  intermediate: 'Orta',
  advanced: 'İrəli',
};

export const SUBJECT_LABELS: Record<SubjectId | 'mixed', string> = {
  math: 'Riyaziyyat',
  azerbaijani: 'Azərbaycan dili',
  logic: 'Məntiq',
  speech: 'Nitq inkişafı',
  mixed: 'Qarışıq Marşrut',
};

export function createInitialProgress(): StudentProgress {
  return {
    selectedAge: null,
    selectedDifficulty: null,
    totalStars: 0,
    completedGames: 0,
    completedTasks: 0,
    unlockedStageIndex: 0,
    completedStages: [],
    subjectStats: {
      math: { games: 0, stars: 0, bestPercentage: 0 },
      azerbaijani: { games: 0, stars: 0, bestPercentage: 0 },
      logic: { games: 0, stars: 0, bestPercentage: 0 },
      speech: { games: 0, stars: 0, bestPercentage: 0 },
    },
    history: [],
  };
}

export function loadProgress(): StudentProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createInitialProgress();
    const parsed = JSON.parse(raw) as Partial<StudentProgress>;
    const base = createInitialProgress();
    return {
      ...base,
      ...parsed,
      subjectStats: {
        ...base.subjectStats,
        ...(parsed.subjectStats ?? {}),
      },
      completedStages: Array.isArray(parsed.completedStages) ? parsed.completedStages : [],
      history: Array.isArray(parsed.history) ? parsed.history : [],
    };
  } catch {
    return createInitialProgress();
  }
}

export function saveProgress(progress: StudentProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Ignore storage quota errors gracefully
  }
}

export function resetProgressStorage(): StudentProgress {
  const initial = createInitialProgress();
  saveProgress(initial);
  return initial;
}

export function recordGameResult(
  current: StudentProgress,
  config: GameConfig,
  questions: Question[],
  selectedAnswers: (number | null)[]
): { updatedProgress: StudentProgress; result: GameResult } {
  let correctCount = 0;
  questions.forEach((q, idx) => {
    if (selectedAnswers[idx] === q.correctIndex) {
      correctCount += 1;
    }
  });

  const totalQuestions = questions.length;
  const wrongCount = totalQuestions - correctCount;
  const percentage = Math.round((correctCount / totalQuestions) * 100);
  // Every correct answer awards 1 star (0..5)
  const starsEarned = correctCount;

  const activeStage = config.stageIndex ?? current.unlockedStageIndex;
  let stageAdvanced = false;
  let newUnlockedStageIndex = current.unlockedStageIndex;
  const completedStages = [...current.completedStages];

  // Passing threshold: at least 60% (3/5) completes the active stage
  if (percentage >= 60) {
    if (!completedStages.includes(activeStage)) {
      completedStages.push(activeStage);
    }
    if (activeStage >= current.unlockedStageIndex && current.unlockedStageIndex < 4) {
      newUnlockedStageIndex = current.unlockedStageIndex + 1;
      stageAdvanced = true;
    }
  }

  const nextSubjectStats = { ...current.subjectStats };
  if (config.subjectId !== 'mixed') {
    const prev = nextSubjectStats[config.subjectId];
    nextSubjectStats[config.subjectId] = {
      games: prev.games + 1,
      stars: prev.stars + starsEarned,
      bestPercentage: Math.max(prev.bestPercentage, percentage),
    };
  } else {
    // Distribute credit evenly to subjects appearing in mixed mode
    const seen = new Set<SubjectId>();
    questions.forEach((q) => seen.add(q.subjectId));
    seen.forEach((sid) => {
      const prev = nextSubjectStats[sid];
      nextSubjectStats[sid] = {
        games: prev.games + 1,
        stars: prev.stars + Math.max(1, Math.round(starsEarned / seen.size)),
        bestPercentage: Math.max(prev.bestPercentage, percentage),
      };
    });
  }

  const resultId = `res_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
  const nowIso = new Date().toISOString();

  const result: GameResult = {
    id: resultId,
    date: nowIso,
    config,
    questions,
    selectedAnswers,
    correctCount,
    wrongCount,
    totalQuestions,
    percentage,
    starsEarned,
    stageAdvanced,
    newUnlockedStageIndex,
  };

  const updatedProgress: StudentProgress = {
    ...current,
    selectedAge: config.ageGroup,
    selectedDifficulty: config.difficulty,
    totalStars: current.totalStars + starsEarned,
    completedGames: current.completedGames + 1,
    completedTasks: current.completedTasks + totalQuestions,
    unlockedStageIndex: newUnlockedStageIndex,
    completedStages: completedStages.sort((a, b) => a - b),
    subjectStats: nextSubjectStats,
    history: [
      {
        id: resultId,
        date: nowIso,
        subjectId: config.subjectId,
        taskFocus: config.taskFocus,
        ageGroup: config.ageGroup,
        difficulty: config.difficulty,
        correctCount,
        totalQuestions,
        percentage,
        starsEarned,
        stageIndex: activeStage,
      },
      ...current.history,
    ].slice(0, 20),
  };

  saveProgress(updatedProgress);
  return { updatedProgress, result };
}

export function getMotivationMessage(percentage: number, completedTasks: number): string {
  if (percentage === 100) {
    return `Möhtəşəm! Bütün suallara düzgün cavab verdin! Artıq ${completedTasks} tapşırıq tamamlamısan!`;
  }
  if (percentage >= 80) {
    return `Əla! Sən bu gün uğurla irəlilədin və cəmi ${completedTasks} tapşırıq tamamladın!`;
  }
  if (percentage >= 60) {
    return `Afərin! Növbəti mərhələyə hazırsan! İndiyədək ${completedTasks} tapşırıq yerinə yetirmisən.`;
  }
  return `Yaxşı cəhddir! Öz sürətinlə davam et — bir az da məşqlə daha çox ulduz qazanacaqsan!`;
}
