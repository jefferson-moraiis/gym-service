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

  async findAllUsers(): Promise<UserDTO[]> {
    return this.userRepository.findAllUsers();
  }

  async findUserById(id: string): Promise<UserDTO | null> {
    return this.userRepository.findUserById(id);
  };

  async updateUser(id: string, userData: Partial<UserDTO>): Promise<UserDTO | null> {
    return this.userRepository.updateUser(id, userData);
  }

  async deleteUser(id: string): Promise<boolean> {
    return this.userRepository.deleteUser(id);
  }
  
}
