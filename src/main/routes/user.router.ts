
import { Router } from 'express'
import { createUserFactory } from '../factories/user.factory'

export default (router: Router): void => {
  router.post("/user",(req,res)=> createUserFactory().createUser(req,res))
  router.get("/user/:id",(req,res)=> createUserFactory().getUserById(req,res))
  router.get("/user",(req,res)=> createUserFactory().getAllUsers(req,res))
  router.put("/user/:id",(req,res)=> createUserFactory().updateUser(req,res))
  router.delete("/user/:id",(req,res)=> createUserFactory().deleteUser(req,res))
  // router.post("/user/authenticate",(req,res)=> createUserFactory().authenticateUser(req,res))
}