import { IUserRepository } from '../interfaces/user.interface'
import { UserDTO } from '../dto'

export class UserUseCase {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }
  async createUser(userData: Partial<UserDTO>): Promise<UserDTO> {
    return this.userRepository.createUser(userData);
  }

   // async getUserById(id: number): Promise<User | null> {
  //   return this.userRepository.findUserById(id);
  // }

  // async getAllUsers(): Promise<User[]> {
  //   return this.userRepository.findAllUsers();
  // }

  // async getUserById(id: number): Promise<User | null> {
  //   return this.userRepository.findUserById(id);
  // }


  // async updateUser(id: number, userData: Partial<User>): Promise<User | null> {
  //   return this.userRepository.updateUser(id, userData);
  // }

  // async deleteUser(id: number): Promise<boolean> {
  //   return this.userRepository.deleteUser(id);
  // }
}
