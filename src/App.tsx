import { useEffect, useState } from 'react';
import { GameView } from './components/GameView';
import { HomeView } from './components/HomeView';
import { Navbar } from './components/Navbar';
import { ResultsView } from './components/ResultsView';
import { RouteView } from './components/RouteView';
import { SetupView } from './components/SetupView';
import { TeachersView } from './components/TeachersView';
import { generateGameQuestions } from './data/curriculum';
import type { GameConfig, GameResult, Question, StudentProgress, SubjectId, ViewId } from './types';
import {
  loadProgress,
  recordGameResult,
  resetProgressStorage,
  saveProgress,
} from './utils/storage';

export function App() {
  const [progress, setProgress] = useState<StudentProgress>(() => loadProgress());
  const [activeView, setActiveView] = useState<ViewId>('home');

  const [setupPrefillSubject, setSetupPrefillSubject] = useState<SubjectId | 'mixed'>('mixed');
  const [setupPrefillTask, setSetupPrefillTask] = useState<string | undefined>(undefined);

  const [activeGameConfig, setActiveGameConfig] = useState<GameConfig | null>(null);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [latestResult, setLatestResult] = useState<GameResult | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  const handleNavigate = (view: ViewId, anchorId?: string) => {
    setActiveView(view);
    if (anchorId) {
      setTimeout(() => {
        document.getElementById(anchorId)?.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    }
  };

  const handleStartLearning = () => {
    setSetupPrefillSubject('mixed');
    setSetupPrefillTask(undefined);
    setActiveView('setup');
  };

  const handleQuickStartSubject = (subjectId: SubjectId, taskFocus?: string) => {
    if (progress.selectedAge && progress.selectedDifficulty) {
      const config: GameConfig = {
        ageGroup: progress.selectedAge,
        difficulty: progress.selectedDifficulty,
        subjectId,
        taskFocus,
        stageIndex: progress.unlockedStageIndex,
      };
      launchGame(config);
    } else {
      setSetupPrefillSubject(subjectId);
      setSetupPrefillTask(taskFocus);
      setActiveView('setup');
    }
  };

  const launchGame = (config: GameConfig) => {
    const updatedProgress: StudentProgress = {
      ...progress,
      selectedAge: config.ageGroup,
      selectedDifficulty: config.difficulty,
    };
    setProgress(updatedProgress);
    saveProgress(updatedProgress);

    const questions = generateGameQuestions(config);
    setActiveGameConfig(config);
    setActiveQuestions(questions);
    setActiveView('game');
  };

  const handlePlayStage = (stageIndex: number, recommendedSubject: SubjectId | 'mixed') => {
    const config: GameConfig = {
      ageGroup: progress.selectedAge ?? '7-8',
      difficulty: progress.selectedDifficulty ?? 'beginner',
      subjectId: recommendedSubject,
      stageIndex,
    };
    launchGame(config);
  };

  const handleSubmitAnswers = (selectedAnswers: (number | null)[]) => {
    if (!activeGameConfig) return;
    const { updatedProgress, result } = recordGameResult(
      progress,
      activeGameConfig,
      activeQuestions,
      selectedAnswers
    );
    setProgress(updatedProgress);
    setLatestResult(result);
    setActiveView('results');
  };

  const handlePlayAgain = () => {
    if (!activeGameConfig) {
      setActiveView('setup');
      return;
    }
    launchGame({
      ...activeGameConfig,
      stageIndex: progress.unlockedStageIndex,
    });
  };

  const handleResetProgress = () => {
    const fresh = resetProgressStorage();
    setProgress(fresh);
    setLatestResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9FF] text-[#1E1B3A]">
      <Navbar
        activeView={activeView}
        onNavigate={handleNavigate}
        onStartLearning={handleStartLearning}
      />

      <div className="flex-1">
        {activeView === 'home' && (
          <HomeView
            progress={progress}
            onStartLearning={handleStartLearning}
            onQuickStartSubject={handleQuickStartSubject}
            onNavigate={handleNavigate}
          />
        )}

        {activeView === 'setup' && (
          <SetupView
            initialAge={progress.selectedAge}
            initialDifficulty={progress.selectedDifficulty}
            initialSubject={setupPrefillSubject}
            initialTaskFocus={setupPrefillTask}
            onBack={() => setActiveView('home')}
            onStartGame={launchGame}
          />
        )}

        {activeView === 'game' && activeGameConfig && (
          <GameView
            key={activeQuestions.map((q) => q.id).join('-')}
            config={activeGameConfig}
            questions={activeQuestions}
            onBack={() => setActiveView('setup')}
            onSubmitAnswers={handleSubmitAnswers}
          />
        )}

        {activeView === 'results' && latestResult && (
          <ResultsView
            result={latestResult}
            progress={progress}
            onPlayAgain={handlePlayAgain}
            onGoHome={() => setActiveView('home')}
            onNavigate={handleNavigate}
          />
        )}

        {activeView === 'route' && (
          <RouteView
            progress={progress}
            onBack={() => setActiveView('home')}
            onPlayStage={handlePlayStage}
            onGoSetup={handleStartLearning}
          />
        )}

        {activeView === 'teachers' && (
          <TeachersView
            progress={progress}
            onBack={() => setActiveView('home')}
            onLaunchCustomGame={launchGame}
            onResetProgress={handleResetProgress}
          />
        )}
      </div>

      {/* Quiet Footer */}
      <footer className="border-t border-[#E8E2F6] bg-white py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-[#1E1B3A]">ÖyrənməMarşrutu</span>
            <span aria-hidden="true">·</span>
            <span>Hər uşaq öz sürəti ilə öyrənir!</span>
          </div>

          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => handleNavigate('home')}
              className="hover:text-[#1E1B3A] cursor-pointer"
            >
              Ana səhifə
            </button>
            <button
              type="button"
              onClick={() => handleNavigate('setup')}
              className="hover:text-[#1E1B3A] cursor-pointer"
            >
              Yaş və Səviyyə
            </button>
            <button
              type="button"
              onClick={() => handleNavigate('route')}
              className="hover:text-[#1E1B3A] cursor-pointer"
            >
              Marşrutum
            </button>
            <button
              type="button"
              onClick={() => handleNavigate('teachers')}
              className="hover:text-[#1E1B3A] cursor-pointer"
            >
              Müəllimlər
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
