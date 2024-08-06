import { Request, Response } from "express"
import { createMealBodySchema } from "../../../Schemas/MealsSchemas/CreateMealBodySchema"
import { knex } from "../../../Database/setupKnex"
import { randomUUID } from "crypto"

class CreateMealUseCase{

    async handle(request:Request, response:Response){

        const {name, description, isDiet} = createMealBodySchema.parse(request.body)
        const {id} = request.params
        try{
            await knex('meals').insert({
                id: randomUUID(),
                name,
                description,
                isDiet,
                user_id:id
            })
            response.json({message:'Meal created'})
        }
        catch(error){
            throw error
        }
    }
}
export {CreateMealUseCase}