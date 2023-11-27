import { WorkoutUseCase } from "../../domain/usecases/workout.usecases"
import { WorkoutRepository } from "../../infra/repositories/workout.repository"
import { WorkoutController } from "../controllers/workout.controller"

export const workoutFactory = () => {
  const workoutRepository = new WorkoutRepository()
  const workoutUseCase = new WorkoutUseCase(workoutRepository)
  return new WorkoutController(workoutUseCase)
}