import { Request, Response } from "express";
import { knex } from "../../../Database/setupKnex";

export class DeleteMealUseCase{
    async handle(request:Request, response:Response){
        const {id} = request.params
        try{
            await knex('meals').where('id', id).del()
            return response.json({message:'User deleted'})
        }
        catch(error){
            throw error
        }
    }
}