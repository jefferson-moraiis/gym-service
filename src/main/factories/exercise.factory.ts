import { ExerciseUseCase } from "../../domain/usecases/exercise.usecases";
import { ExerciseRepository } from "../../infra/repositories/exercises.repositoty";
import { ExerciseController } from "../controllers/exercise.controller";

export const exerciseFactory = () => {
  const exerciseRepository = new ExerciseRepository();
  const exerciseUseCase = new ExerciseUseCase(exerciseRepository);
  return new ExerciseController(exerciseUseCase);
}
