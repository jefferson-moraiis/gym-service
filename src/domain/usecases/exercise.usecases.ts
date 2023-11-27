import { ExerciseDTO } from '../dto';
import { IExerciseRepository } from '../interfaces/exercises.interface';

export class ExerciseUseCase {
  private exerciseRepository: IExerciseRepository;

  constructor(exerciseRepository: IExerciseRepository) {
    this.exerciseRepository = exerciseRepository;
  }
  async createExercise(exerciseData: Partial<ExerciseDTO>): Promise<ExerciseDTO> {
    return this.exerciseRepository.createExercise(exerciseData);
  }
  
  async getExercises(): Promise<ExerciseDTO[]> {
    return this.exerciseRepository.getExercises();
  }

  async getExercisesById(id:string): Promise<ExerciseDTO | null> {
    return this.exerciseRepository.getExerciseById(id);
  }

  async updateExercise(exerciseId:string,exerciseData: Partial<ExerciseDTO>): Promise<ExerciseDTO | void> {
    return this.exerciseRepository.updateExercise(exerciseId, exerciseData);
  }

  async deleteExercise(id:string): Promise<boolean> {
    return this.exerciseRepository.deleteExercise(id);
  }
}
