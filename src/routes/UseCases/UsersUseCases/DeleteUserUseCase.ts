import { Request, Response } from "express"
import { knex } from "../../../Database/setupKnex"


class deleteUserUseCase {

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            await knex('users').from('users').where('id', id).del()
            return response.json({ message: 'User deleted' })
        }
        catch (error) {
            throw error
        }
    }
}
export { deleteUserUseCase } 