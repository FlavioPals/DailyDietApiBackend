import { Request, Response } from "express"
import { knex } from "../../../Database/setupKnex"

 class GetAllUsersUseCase {
    async handle(request:Request, response:Response):Promise<Response> {
        try{
            const users = await knex('users').select('*')
            return response.json(users)
        }
       catch(error){
            throw error
        }
    }
}

export {GetAllUsersUseCase}