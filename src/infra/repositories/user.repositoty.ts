
import { UserDTO } from '../../domain/dto';
import { IUserRepository } from '../../domain/interfaces/user.interface';
import  FirestoreDatabase from '../database/firestore'


export class UserRepository implements IUserRepository {

  private userModel: FirestoreDatabase<UserDTO>;
  
  constructor() {
    this.userModel = new FirestoreDatabase('user');
  }

  async createUser(userData: Partial<UserDTO>): Promise <any> {
    return this.userModel.create(userData);
  }

  // async updateUser(id: number, userData: Partial<User>): Promise<User | null> {
  //   const user = await this.findOne(id);
  //   if (!user) return null;

  //   Object.assign(user, userData);
  //   await this.save(user);
  //   return user;
  // }

  // async deleteUser(id: number): Promise<boolean> {
  //   const deleteResult = await this.delete(id);
  //   return deleteResult.affected > 0;
  // }

  // async findUserById(id: number): Promise<User | null> {
  //   return this.findOne(id);
  // }

  // async findAllUsers(): Promise<User[]> {
  //   return this.find();
  // }
}

