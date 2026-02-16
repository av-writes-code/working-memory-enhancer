import { describe, it, expect, beforeEach } from 'vitest';
import { useUserStore } from '@/stores/user-store';

describe('User Store', () => {
  beforeEach(() => {
    useUserStore.setState({ profile: null });
  });

  it('initializes with null profile', () => {
    expect(useUserStore.getState().profile).toBeNull();
  });

  it('sets a user profile', () => {
    const profile = {
      id: 'test-123',
      createdAt: new Date(),
      settings: {
        dailyGoalMinutes: 10,
        theme: 'system' as const,
      },
    };
    useUserStore.getState().setProfile(profile);
    const state = useUserStore.getState();
    expect(state.profile).not.toBeNull();
    expect(state.profile!.id).toBe('test-123');
    expect(state.profile!.settings.dailyGoalMinutes).toBe(10);
  });

  it('updates settings on existing profile', () => {
    useUserStore.getState().setProfile({
      id: 'test-123',
      createdAt: new Date(),
      settings: { dailyGoalMinutes: 10, theme: 'system' },
    });
    useUserStore.getState().updateSettings({ dailyGoalMinutes: 15, theme: 'dark' });
    const state = useUserStore.getState();
    expect(state.profile!.settings.dailyGoalMinutes).toBe(15);
    expect(state.profile!.settings.theme).toBe('dark');
  });

  it('does not update settings when profile is null', () => {
    useUserStore.getState().updateSettings({ dailyGoalMinutes: 15 });
    expect(useUserStore.getState().profile).toBeNull();
  });
});
