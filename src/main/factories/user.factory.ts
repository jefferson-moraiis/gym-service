import { UserController } from "../controllers/user.controller";
import { UserUseCase } from "@/data/usecases";
import { UserRepository } from "../../infra/repositories";

export const createUserFactory = () => {
	const userRepository = new UserRepository();
	const userUseCase = new UserUseCase(userRepository);
	return new UserController(userUseCase);
};
