import { Request, Response } from "express";
import { WorkoutUseCase } from "../../domain/usecases/workout.usecases";

export class WorkoutController {

  constructor(private workout: WorkoutUseCase){}

  async createWorkout(req:Request, res:Response){
    try {
      const workout = await this.workout.createWorkout(req.body);
      res.status(201).json(workout);
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getWorkouts(req:Request, res:Response){
    try {
      const workouts = await this.workout.getAllWorkouts();
      res.status(200).json(workouts);
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getWorkoutById(req:Request, res:Response){
    try {
      const workout = await this.workout.getWorkoutById(req.params.id);
      res.status(200).json(workout);
    } catch (error:any) {
      res.status(error.status).json({ error: error.message });
    }
  }

  async getWorkoutByUser(req:Request, res:Response){ 
    try {
      const workout = await this.workout.getWorkoutsByUser(req.params.id);
      res.status(200).json(workout);
    } catch (error:any) {
      res.status(error.status).json({ error: error.message });
    }
  }

  async updateWorkout(req:Request, res:Response){  
    try {
      const workout = await this.workout.updateWorkout(req.params.id, req.body);
      res.status(200).json(workout);
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteWorkout(req:Request, res:Response){
    try {
      const workout = await this.workout.deleteWorkout(req.params.id);
      res.status(200).json(workout);
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  }
}