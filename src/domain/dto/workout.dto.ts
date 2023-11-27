export interface WorkoutDTO {
  id: string;
  name: string;
  muscleGroup?: string;
  description?: string;
  exercises: ExerciseList[];
}

interface ExerciseList {
    exerciseId: string;
    serie: number | string;
    repetitions: number;
    charge: string;
}