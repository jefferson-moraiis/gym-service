import { type IUserRepository } from "@/domain/interfaces/user.interface";
import { type UserDTO } from "@/domain/dto";
import { auth, firestore } from "firebase-admin";

export class UserUseCase {
	private readonly userRepository: IUserRepository;

	constructor (userRepository: IUserRepository) {
		this.userRepository = userRepository;
	}

	async createUser (userData: Partial<UserDTO>) {
		const userRecord = await auth().createUser({
			email: userData.email,
			password: userData.password,
			displayName: userData.name
		});
		await this.userRepository.createUser({
			id: userRecord.uid,
			name: userData.name,
			email: userData.email,
			phone: userData.phone,
			lastName: userData.lastName,
			age: userData.age,
			role: userData.role
		}).catch(async (error: Error | any) => {
			await auth().deleteUser(userRecord.uid);
			throw error;
		});
		return await this.getUserById(userRecord.uid);
	}

	async getUserById (id: string) {
		return await this.userRepository.findUserById(id);
	}

	async getAllUsers () {
		return await this.userRepository.findAllUsers();
	}

	async updateUser (id: string, userData: Partial<UserDTO>) {
		await auth().updateUser(id, { ...userData });
		return await this.userRepository.updateUser(id, userData);
	}

	async deleteUser (id: string) {
    await auth().deleteUser(id);
		await this.userRepository.deleteUser(id);
	}
}
