export type AgeGroup = '5-6' | '7-8' | '9-10' | '11-12';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export type SubjectId = 'math' | 'azerbaijani' | 'logic' | 'speech';

export type ViewId = 'home' | 'setup' | 'game' | 'results' | 'route' | 'teachers';

export type IllustratedItemKey =
  | 'apple'
  | 'star'
  | 'leaf'
  | 'butterfly'
  | 'flower'
  | 'sun'
  | 'book'
  | 'cat'
  | 'fish'
  | 'tree'
  | 'house'
  | 'car'
  | 'ball'
  | 'bird'
  | 'pencil'
  | 'umbrella'
  | 'moon'
  | 'clock'
  | 'cloud'
  | 'strawberry'
  | 'rabbit'
  | 'boat'
  | 'key'
  | 'lock'
  | 'bee'
  | 'honey'
  | 'rain'
  | 'carrot'
  | 'bag'
  | 'pear';

export type ShapeKind = 'circle' | 'triangle' | 'square' | 'star' | 'diamond' | 'heart';

export interface PatternToken {
  kind: 'shape' | 'item' | 'text';
  shape?: ShapeKind;
  color?: 'purple' | 'blue' | 'yellow' | 'green' | 'coral';
  item?: IllustratedItemKey;
  label?: string;
}

export type QuestionVisualSpec =
  | {
      type: 'count-items';
      item: IllustratedItemKey;
      count: number;
      caption?: string;
    }
  | {
      type: 'compare-groups';
      left: { item?: IllustratedItemKey; count?: number; numberLabel?: string; title: string };
      right: { item?: IllustratedItemKey; count?: number; numberLabel?: string; title: string };
      mode: 'symbols' | 'which-larger';
    }
  | {
      type: 'math-operation';
      leftCount?: number;
      rightCount?: number;
      item?: IllustratedItemKey;
      operator: '+' | '-' | '×' | '÷';
      expressionText: string;
    }
  | {
      type: 'number-pick';
      targetNumber?: number;
      visualCount?: number;
      item?: IllustratedItemKey;
      fraction?: { numerator: number; denominator: number };
      promptBadge: string;
    }
  | {
      type: 'picture-card';
      item: IllustratedItemKey;
      highlightLetter?: string;
      subtitle?: string;
    }
  | {
      type: 'syllables';
      item: IllustratedItemKey;
      parts: string[];
      missingIndex?: number;
      mode: 'split' | 'join';
    }
  | {
      type: 'sentence-scene';
      item: IllustratedItemKey;
      secondaryItem?: IllustratedItemKey;
      sentenceParts: [string, string]; // before blank, after blank
    }
  | {
      type: 'odd-one-out';
      items: Array<{
        id: string;
        item?: IllustratedItemKey;
        shape?: ShapeKind;
        color?: 'purple' | 'blue' | 'yellow' | 'green' | 'coral';
        label: string;
      }>;
    }
  | {
      type: 'sequence';
      tokens: PatternToken[];
    }
  | {
      type: 'match-pair';
      sourceItem: IllustratedItemKey;
      sourceLabel: string;
      relationHint: string;
    };

export interface Question {
  id: string;
  subjectId: SubjectId;
  taskType: string;
  prompt: string;
  hint?: string;
  visual: QuestionVisualSpec;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface GameConfig {
  ageGroup: AgeGroup;
  difficulty: DifficultyLevel;
  subjectId: SubjectId | 'mixed';
  taskFocus?: string;
  stageIndex?: number;
}

export interface GameResult {
  id: string;
  date: string;
  config: GameConfig;
  questions: Question[];
  selectedAnswers: (number | null)[];
  correctCount: number;
  wrongCount: number;
  totalQuestions: number;
  percentage: number;
  starsEarned: number;
  stageAdvanced: boolean;
  newUnlockedStageIndex: number;
}

export interface SubjectStats {
  games: number;
  stars: number;
  bestPercentage: number;
}

export interface StudentProgress {
  selectedAge: AgeGroup | null;
  selectedDifficulty: DifficultyLevel | null;
  totalStars: number;
  completedGames: number;
  completedTasks: number;
  unlockedStageIndex: number; // 0..4
  completedStages: number[]; // indices 0..4
  subjectStats: Record<SubjectId, SubjectStats>;
  history: Array<{
    id: string;
    date: string;
    subjectId: SubjectId | 'mixed';
    taskFocus?: string;
    ageGroup: AgeGroup;
    difficulty: DifficultyLevel;
    correctCount: number;
    totalQuestions: number;
    percentage: number;
    starsEarned: number;
    stageIndex: number;
  }>;
}
