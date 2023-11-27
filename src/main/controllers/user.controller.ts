import { UserDTO } from "../../domain/dto";
import { UserUseCase } from "../../domain/usecases/user.usecases";
import { Request, Response } from "express";

export class UserController {

  constructor(private user: UserUseCase){}

  async createUser(req:Request, res:Response){
    try {
      const user = await this.user.createUser(req.body);
      res.status(201).json(user);
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }

  }

  async getUsers(req:Request, res:Response){
    try {
      const users = await this.user.findAllUsers();
      res.status(200).json(users);
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getUserById(req:Request, res:Response){
    try {
      const users = await this.user.findUserById(req.params.id);
      res.status(200).json(users);
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateUser(req:Request, res:Response){
    try {
      const user = await this.user.updateUser(req.params.id, req.body);
      res.status(200).json(user);
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteUser(req:Request, res:Response){
    try {
      const user = await this.user.deleteUser(req.params.id);
      res.status(200).json(user);
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  }


}