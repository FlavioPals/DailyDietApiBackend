

import {Request, Response} from 'express'
import { knex } from '../../../Database/setupKnex'

class GetAllMealsUseCase{
    async handle(request:Request, response:Response):Promise<Response>{
        try{
            const meals = await knex('meals').select('*')
            return response.json(meals)
        }
        catch(error){
            throw error
        }
    }
}

export{GetAllMealsUseCase}