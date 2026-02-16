// Data types from HLD Section 3.4

export interface UserProfile {
  id: string;
  createdAt: Date;
  settings: {
    dailyGoalMinutes: number;
    reminderTime?: string;
    theme: 'light' | 'dark' | 'system';
  };
}

export interface AssessmentResult {
  id: string;
  date: Date;
  digitSpanForward: number;
  digitSpanBackward: number;
  mathChainMax: number;
  sentenceRecallScore: number;
  overallWMScore: number;
  dimensionScores: {
    verbal: number;
    numerical: number;
    comprehension: number;
  };
}

export type ModuleId =
  | 'number-retention'
  | 'math-chains'
  | 'reverse-digits'
  | 'sentence-comprehension'
  | 'passage-retention'
  | 'n-back'
  | 'listening'
  | 'instructions';

export interface TrainingSession {
  id: string;
  date: Date;
  moduleId: ModuleId;
  durationSeconds: number;
  trialsCompleted: number;
  trialsCorrect: number;
  accuracy: number;
  maxLevel: number;
  endLevel: number;
  strategyUsed?: string;
}

export interface DailySummary {
  date: string; // YYYY-MM-DD
  totalMinutes: number;
  sessionsCompleted: number;
  modulesUsed: ModuleId[];
  averageAccuracy: number;
}

export interface TrialResult {
  correct: boolean;
  level: number;
  responseTimeMs: number;
  timestamp: Date;
}

export interface AdaptiveState {
  currentLevel: number;
  consecutiveCorrect: number;
  history: TrialResult[];
  targetAccuracy: number;
}
