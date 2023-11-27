import { ExerciseDTO } from '../dto';

export interface IExerciseRepository {
  createExercise: (exercises: Partial<ExerciseDTO>) => Promise<ExerciseDTO>;
  getExercises: () => Promise<ExerciseDTO[]>;
  getExerciseById: (id: string) => Promise<ExerciseDTO | null>;
  updateExercise: (id: string, exercise: Partial<ExerciseDTO>) => Promise<ExerciseDTO | void>;
  deleteExercise: (id: string) => Promise<boolean>;
}