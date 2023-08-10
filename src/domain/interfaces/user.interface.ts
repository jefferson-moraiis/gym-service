import { UserDTO } from "../dto"

export interface IUserRepository {
  createUser: (userData: Partial<UserDTO>) => Promise<UserDTO> 
  // updateUser: (id: number, userData: Partial<User>) => Promise<User | null>
  // deleteUser: (id: number) => Promise<boolean> 
  // findUserById: (id: number) => Promise<User | null> 
  // findAllUsers: () =>  Promise<User[]> 
}