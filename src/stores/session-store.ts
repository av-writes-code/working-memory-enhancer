import { create } from 'zustand';
import type { AdaptiveState, ModuleId, TrialResult } from '@/types';

interface SessionState {
  isActive: boolean;
  moduleId: ModuleId | null;
  adaptive: AdaptiveState;
  startTime: Date | null;
  trials: TrialResult[];

  startSession: (moduleId: ModuleId, startLevel?: number) => void;
  endSession: () => void;
  recordTrial: (result: TrialResult) => void;
  reset: () => void;
}

const initialAdaptive: AdaptiveState = {
  currentLevel: 1,
  consecutiveCorrect: 0,
  history: [],
  targetAccuracy: 0.75,
};

export const useSessionStore = create<SessionState>((set) => ({
  isActive: false,
  moduleId: null,
  adaptive: { ...initialAdaptive },
  startTime: null,
  trials: [],

  startSession: (moduleId, startLevel = 1) =>
    set({
      isActive: true,
      moduleId,
      adaptive: { ...initialAdaptive, currentLevel: startLevel },
      startTime: new Date(),
      trials: [],
    }),

  endSession: () =>
    set({
      isActive: false,
    }),

  recordTrial: (result) =>
    set((state) => ({
      trials: [...state.trials, result],
      adaptive: {
        ...state.adaptive,
        history: [...state.adaptive.history, result],
      },
    })),

  reset: () =>
    set({
      isActive: false,
      moduleId: null,
      adaptive: { ...initialAdaptive },
      startTime: null,
      trials: [],
    }),
}));
