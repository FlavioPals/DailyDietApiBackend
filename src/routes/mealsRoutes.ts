import {Router} from 'express'
import { knex } from '../Database/setupKnex'
import { z } from 'zod'
import { randomUUID } from 'crypto'
import { CreateMealUseCase } from './UseCases/MealsUseCases/CreateMealUseCase'


const mealsRoutes = Router()
const createMealController = new CreateMealUseCase()

mealsRoutes.post('/', createMealController.handle)

mealsRoutes.get('/', async(req, res)=> {
    const test = await knex('meals').select('*')
    res.json(test)
})


export {mealsRoutes}
