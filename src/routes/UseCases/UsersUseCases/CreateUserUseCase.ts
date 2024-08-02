import { randomUUID } from "crypto"
import { z } from "zod"
import { knex } from "../../../Database/setupKnex"
import { createUserBodySchema } from "../../../Schemas/UserSchemas/CreateUserBodySchema"
import { Request, Response } from "express"



class CreateUserUseCase{
    async handle(request: Request, response: Response):Promise<Response> {
        const {
            name,
            email,
            password
        } = createUserBodySchema.parse(request.body)
    
        try {
            const newUser = await knex('users').insert({
                id: randomUUID(),
                name,
                email,
                password
            })
            return response.json(newUser)
        } catch (error) {
            throw error
        }
    }
}
export {CreateUserUseCase}