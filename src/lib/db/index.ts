import Dexie, { type EntityTable } from 'dexie';
import type { UserProfile, AssessmentResult, TrainingSession, DailySummary } from '@/types';

class MemoryForgeDB extends Dexie {
  userProfiles!: EntityTable<UserProfile, 'id'>;
  assessmentResults!: EntityTable<AssessmentResult, 'id'>;
  trainingSessions!: EntityTable<TrainingSession, 'id'>;
  dailySummaries!: EntityTable<DailySummary, 'date'>;

  constructor() {
    super('MemoryForgeDB');

    this.version(1).stores({
      userProfiles: 'id, createdAt',
      assessmentResults: 'id, date',
      trainingSessions: 'id, date, moduleId',
      dailySummaries: 'date',
    });
  }
}

export const db = new MemoryForgeDB();
