
import { UserDTO } from '../../domain/dto';
import { IUserRepository } from '../../domain/interfaces/user.interface';
import  FirestoreDatabase from '../database/firestore'
import  FirebaseAuthService from '../database/firebase-auth'


export class UserRepository implements IUserRepository {

  private userModel: FirestoreDatabase<UserDTO>;
  private firebaseAuthService: FirebaseAuthService;
  
  constructor() {
    this.userModel = new FirestoreDatabase('USER');
    this.firebaseAuthService = new FirebaseAuthService();
  }

  async createUser(userData: Partial<UserDTO>): Promise<any> {
    const uid = await this.firebaseAuthService.createUserAuth(userData);
    userData.uid = uid;
    delete userData.password;
    return this.userModel.create(userData);
  }

  async findAllUsers():Promise<UserDTO[]> {
    const users = await this.userModel.findAll();
    return users;
  }

  async findUserById(id: string): Promise<UserDTO | null> {
    const user = await this.userModel.findById(id);
    return user;
  }

  async updateUser(id: string, userData: Partial<UserDTO>): Promise<UserDTO | null> {
    const updatedUser = await this.userModel.update(id, userData);
    return updatedUser;
  }

  async deleteUser(id: string): Promise<boolean> {
    await this.userModel.delete(id);
    return true;
  }

}

