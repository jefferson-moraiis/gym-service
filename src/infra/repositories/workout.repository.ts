import { WorkoutDTO } from "../../domain/dto";
import { IWorkoutRepository } from "../../domain/interfaces/workout.interface"
import  FirestoreDatabase from '../database/firestore'

export class WorkoutRepository implements IWorkoutRepository {
  private workoutModel: FirestoreDatabase<WorkoutDTO>;

  constructor() {
    this.workoutModel = new FirestoreDatabase('WORKOUT_OUT');
  }

  async createWorkout(workout: Partial<WorkoutDTO>): Promise <any> {
    return this.workoutModel.create(workout);
  }

  async getWorkouts(): Promise<WorkoutDTO[]> {
    const workouts = await this.workoutModel.findAll();
    return workouts;
  }

  async getWorkoutById(id: string): Promise<WorkoutDTO | null> {
   return await this.workoutModel.findById(id);
  }

  async getWorkoutByUser(userUid: string): Promise<WorkoutDTO[]> {
    const workouts = await this.workoutModel.findWhere("userUid", userUid);
    return workouts;
  }

  async updateWorkout(id: string, workout: Partial<WorkoutDTO>): Promise<WorkoutDTO | void> {
    const updatedworkout = await this.workoutModel.update(id, workout);
    return updatedworkout;
  }

  async deleteWorkout(id: string): Promise<boolean> {
    await this.workoutModel.delete(id);
    return true;
  }

}