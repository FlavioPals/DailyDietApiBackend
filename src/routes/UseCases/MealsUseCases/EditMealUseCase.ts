import { Request, Response } from "express";
import { knex } from "../../../Database/setupKnex";
 

export class EditMealUseCase{

    async handle(request:Request, response:Response):Promise<Response>{
        const {id} = request.params
        const {name, description, isDiet} = request.body
        if(!name && !description && !isDiet){
            return response.status(400).json({message:'No data to update'})
        }
        try{
            const updateMeal = await knex('meals').where('id', id).update({
                name:name,
                description:description,
                isDiet:isDiet,
                updated_at: knex.fn.now()
            })
            return response.json({message:'Meal updated', updateMeal})
        } catch(error){
            throw error
        }
    }
}