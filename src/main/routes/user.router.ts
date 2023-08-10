
import { Router } from 'express'
import { createUserFactory } from '../factories/user.factory'

export default (router: Router): void => {
  router.post("/user",(req,res)=> createUserFactory().createUser(req,res))
}