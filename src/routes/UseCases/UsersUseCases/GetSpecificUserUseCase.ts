import { knex } from "../../../Database/setupKnex"
import { getSpecificUserBodySchema } from "../../../Schemas/UserSchemas/GetSpecificUserBodySchema"
import { Request, Response } from "express"

class GetSpecificUserUseCase {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = getSpecificUserBodySchema.parse(request.params)
        try {
            const user = await knex('users').where({ id }).first()
            const mealsOfUser = await knex('meals').where({ user_id: id })
            const userWithMeals = { ...user, meals: mealsOfUser }
            return response.json(userWithMeals)
        }
        catch (error) {
            throw error
        }
    }
}

export { GetSpecificUserUseCase }

