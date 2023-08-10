import { UserDTO, userSchema, mapUserToDTO} from "../../domain/dto";
import { UserUseCase } from "../../domain/usecases/user.usecases";
import { Request, Response } from "express";

export class UserController {

  constructor(private user: UserUseCase){}

  async createUser(req:Request, res:Response){
    //TO-DO: Add validation if user is already

    try {
      const userData: UserDTO = userSchema.parse(req.body);
      const user = await this.user.createUser(userData);
      const userDTO = mapUserToDTO(user);
      res.status(201).json(userDTO);
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }

  }


}