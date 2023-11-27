import { UserDTO } from "../dto"

export interface IUserRepository {
  createUser: (userData: Partial<UserDTO>) => Promise<UserDTO> 
  updateUser: (id: string, userData: Partial<UserDTO>) => Promise<UserDTO | null>
  deleteUser: (id: string) => Promise<boolean> 
  findAllUsers: () =>  Promise<UserDTO[]> 
  findUserById: (id: string) => Promise<UserDTO | null>
}