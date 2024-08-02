import { randomUUID } from "crypto";
import { Router } from "express";

import {knex} from '../Database/setupKnex'
import { z } from "zod";


const userRoutes = Router();



userRoutes.get('/',async (req, res) => {
  const users =  await knex('users').select('*')

  res.json(users)
})

userRoutes.post('/',async (req, res)=> {
    const createUserBodySchema = z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
    })

    console.log(req.body)
  
    const {name, email, password} =  createUserBodySchema.parse(req.body)
    
    const newUser = await knex('users').insert({
    id:randomUUID(),
    name,
    email,
    password,
  })
   res.status(201).json(newUser)
})

userRoutes.get('/:id',async (req, res) => {
  const getTransactionParamsSchema = z.object({
    id: z.string().uuid(),
  })
  const {id} =  getTransactionParamsSchema.parse(req.params)
  const user =  await knex('users').where({id}).first()
  res.json(user)
})



export { userRoutes }