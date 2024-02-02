import { IExerciseRepository } from '../../domain/interfaces/exercises.interface';
import  { FirestoreModel } from '../database/firestore'
import  FirebaseAuthService from '../database/firebase-auth'
import { ExerciseDTO } from '../../domain/dto';


export class ExerciseRepository implements IExerciseRepository {

  private exerciseModel: FirestoreModel<ExerciseDTO>;
  private firebaseAuthService: FirebaseAuthService;
  
  constructor() {
    this.exerciseModel = new FirestoreModel('EXERCISES');
    this.firebaseAuthService = new FirebaseAuthService();
  }

  async createExercise(exercise: Partial<ExerciseDTO>): Promise <any> {
    return this.exerciseModel.create(exercise);
  }

  async getExercises(): Promise<ExerciseDTO[]> {
    const exercicies = await this.exerciseModel.findAll();
    return exercicies;
  }

  async getExerciseById(id: string): Promise<ExerciseDTO | null> {
    return this.exerciseModel.findById(id);
  }

  async updateExercise(id: string, exercise: Partial<ExerciseDTO>): Promise<ExerciseDTO | void> {
    const updatedExercise = await this.exerciseModel.update(id, exercise);
    return updatedExercise ;
  }

  async deleteExercise(id: string): Promise<boolean> {
    await this.exerciseModel.delete(id);
    return true;
  }
}

