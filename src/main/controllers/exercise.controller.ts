import { Request, Response } from "express";
import { ExerciseUseCase } from "../../domain/usecases/exercise.usecases";

export class ExerciseController {

  constructor(private exercise: ExerciseUseCase){}

  async createExercise(req:Request, res:Response){
    //TO-DO: Add validation if user is already

    try {
      // const userData: UserDTO = userSchema.parse(req.body);
      const exercise = await this.exercise.createExercise(req.body);
      // const userDTO = mapUserToDTO(user);
      res.status(201).json(exercise);
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }

  }

  async getExercises(req:Request, res:Response){
    try {
      const exercises = await this.exercise.getExercises();
      res.status(200).json(exercises);
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getExerciseById(req:Request, res:Response){
    try {
      const exercise = await this.exercise.getExercisesById(req.params.id);
      res.status(200).json(exercise);
    } catch (error:any) {
      res.status(error.status).json({ error: error.message });
    }
  }

  async updateExercise(req:Request, res:Response){
    try {
      const exercise = await this.exercise.updateExercise(req.params.id, req.body);
      res.status(200).json(exercise);
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteExercise(req:Request, res:Response){
    try {
      const exercise = await this.exercise.deleteExercise(req.params.id);
      res.status(200).json(exercise);
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  }



}