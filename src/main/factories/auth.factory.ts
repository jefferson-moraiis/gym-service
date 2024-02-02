import { AuthController } from '../controllers'
import { AuthenticationUseCase } from '../../data/usecases/authentication.usecase'
import { AuthRepository } from '../../infra/repositories'
import { BcryptAdapter, JwtAdapter } from "../../infra/cryptography";

export const authFactory = () => {
  const userRepository = new AuthRepository()
  const bcryptAdapter = new BcryptAdapter()
  const jwtAdapter = new JwtAdapter() 
  const authUseCase = new AuthenticationUseCase(userRepository, bcryptAdapter, jwtAdapter)
  return new AuthController(authUseCase)
}