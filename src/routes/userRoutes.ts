import { randomUUID } from "crypto";
import { Router } from "express";
import { Express } from "express";
import {knex} from '../Database/setupKnex'
import { z } from "zod";


const userRoutes = Router();



userRoutes.get('/',async (req, res) => {
  const users =  await knex('users').select('*')

  res.json(users)
})

userRoutes.post('/createUser',async (req, res)=> {
    const createUserBodySchema = z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
    })

    console.log(req.body)
  
    const {name, email, password} =  createUserBodySchema.parse(req.body)
    
  const newUser =await knex('users').insert({
    id:randomUUID(),
    name,
    email,
    password,
  })
   res.status(201).json(newUser)



})

export { userRoutes }