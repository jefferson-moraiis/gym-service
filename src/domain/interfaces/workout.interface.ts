import { WorkoutDTO } from "../dto";

export interface IWorkoutRepository {
  createWorkout: (workout: Partial<WorkoutDTO>) => Promise<WorkoutDTO>;
  getWorkouts: () => Promise<WorkoutDTO[]>;
  getWorkoutById: (id: string) => Promise<WorkoutDTO | null>;
  getWorkoutByUser:(userUid: string) => Promise<WorkoutDTO[]>;
  updateWorkout: (id: string, workout: Partial<WorkoutDTO>) => Promise<WorkoutDTO | void>;
  deleteWorkout: (id: string) => Promise<boolean>;
}