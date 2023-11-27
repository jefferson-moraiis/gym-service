import { Router } from 'express'
import { workoutFactory } from '../factories/workout.factory'


export default (router: Router): void => {
  router.post("/workout",(req,res)=> workoutFactory().createWorkout(req,res))
  router.get("/workout",(req,res)=> workoutFactory().getWorkouts(req,res))
  router.get("/workout/:id",(req,res)=> workoutFactory().getWorkoutById(req,res))
  router.get("/workout/user/:id",(req,res)=> workoutFactory().getWorkoutByUser(req,res))
  router.put("/workout/:id",(req,res)=> workoutFactory().updateWorkout(req,res))
  router.delete("/workout/:id",(req,res)=> workoutFactory().deleteWorkout(req,res))
}