import { knex } from "../../../Database/setupKnex";
import { Request, Response } from "express";

export class GetUserMetricsUseCase{
    
    async handle(request:Request, response:Response):Promise<Response>{
        const {id} = request.params
        const totalMeals = await knex('meals').where({user_id:id})

        return response.json({
            total_meals: totalMeals.length,
            total_meals_out_diet: totalMeals.filter(meal => !meal.isDiet).length,
            total_meals_in_diet: totalMeals.filter(meal => meal.isDiet).length,
            percent_meals_in_diet: Math.round((totalMeals.filter(meal => meal.isDiet).length / totalMeals.length) * 100),

        })
    }
}