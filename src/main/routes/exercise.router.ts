
import { Router } from 'express'
import { exerciseFactory } from '../factories/exercise.factory'


export default (router: Router): void => {
  router.post("/exercise",(req,res)=> exerciseFactory().createExercise(req,res))
  router.get("/exercise",(req,res)=> exerciseFactory().getExercises(req,res))
  router.get("/exercise/:id",(req,res)=> exerciseFactory().getExerciseById(req,res))
  router.put("/exercise/:id",(req,res)=> exerciseFactory().updateExercise(req,res))
  router.delete("/exercise/:id",(req,res)=> exerciseFactory().deleteExercise(req,res))
}