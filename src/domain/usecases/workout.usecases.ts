import { WorkoutDTO } from "../dto"
import { IWorkoutRepository } from "../interfaces/workout.interface"

export class WorkoutUseCase {
  constructor(private readonly workoutRepository: IWorkoutRepository) {}

  async createWorkout(workout: WorkoutDTO): Promise<WorkoutDTO> {
    const workoutCreated = await this.workoutRepository.createWorkout(workout)
    return workoutCreated
  }

  async getWorkoutById(id: string): Promise<WorkoutDTO | null> {
    const workout = await this.workoutRepository.getWorkoutById(id)
    return workout
  }

  async getAllWorkouts(): Promise<WorkoutDTO[]> {
    const workouts = await this.workoutRepository.getWorkouts()
    return workouts
  }

  async getWorkoutsByUser(userUid:string): Promise<WorkoutDTO[]> {
    const workout = await this.workoutRepository.getWorkoutByUser(userUid)
    return workout
  }

  async updateWorkout(id: string, workout: WorkoutDTO): Promise<WorkoutDTO | void> {
    const workoutUpdated = await this.workoutRepository.updateWorkout(id, workout)
    return workoutUpdated
  }

  async deleteWorkout(id: string): Promise<void> {
    await this.workoutRepository.deleteWorkout(id)
  }

}