import { describe, it, expect, beforeEach } from 'vitest';
import { useSessionStore } from '@/stores/session-store';

describe('Session Store', () => {
  beforeEach(() => {
    useSessionStore.getState().reset();
  });

  it('initializes with inactive session', () => {
    const state = useSessionStore.getState();
    expect(state.isActive).toBe(false);
    expect(state.moduleId).toBeNull();
    expect(state.adaptive.currentLevel).toBe(1);
    expect(state.trials).toEqual([]);
  });

  it('starts a session with correct module and level', () => {
    useSessionStore.getState().startSession('number-retention', 3);
    const state = useSessionStore.getState();
    expect(state.isActive).toBe(true);
    expect(state.moduleId).toBe('number-retention');
    expect(state.adaptive.currentLevel).toBe(3);
    expect(state.startTime).toBeInstanceOf(Date);
  });

  it('starts a session with default level 1', () => {
    useSessionStore.getState().startSession('math-chains');
    const state = useSessionStore.getState();
    expect(state.adaptive.currentLevel).toBe(1);
  });

  it('records a trial result', () => {
    useSessionStore.getState().startSession('number-retention');
    const trial = {
      correct: true,
      level: 1,
      responseTimeMs: 1500,
      timestamp: new Date(),
    };
    useSessionStore.getState().recordTrial(trial);
    const state = useSessionStore.getState();
    expect(state.trials).toHaveLength(1);
    expect(state.trials[0].correct).toBe(true);
    expect(state.adaptive.history).toHaveLength(1);
  });

  it('ends a session', () => {
    useSessionStore.getState().startSession('number-retention');
    useSessionStore.getState().endSession();
    const state = useSessionStore.getState();
    expect(state.isActive).toBe(false);
  });

  it('resets to initial state', () => {
    useSessionStore.getState().startSession('number-retention');
    useSessionStore.getState().recordTrial({
      correct: true,
      level: 1,
      responseTimeMs: 1000,
      timestamp: new Date(),
    });
    useSessionStore.getState().reset();
    const state = useSessionStore.getState();
    expect(state.isActive).toBe(false);
    expect(state.moduleId).toBeNull();
    expect(state.trials).toEqual([]);
    expect(state.adaptive.currentLevel).toBe(1);
  });
});
