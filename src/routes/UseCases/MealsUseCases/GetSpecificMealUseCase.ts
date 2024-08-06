import { knex } from "../../../Database/setupKnex";
import { getSpecificMealBodySchema } from "../../../Schemas/MealsSchemas/GetSpecificMealBodySchema";
import { Request, Response } from "express";

export class GetSpecificMealUseCase {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = getSpecificMealBodySchema.parse(request.params)
        try {
            const user = await knex('meals').where({ id }).first()
            console.log(user)
            return response.json(user)
        }
        catch (error) {
            throw error
        }
    }
}
