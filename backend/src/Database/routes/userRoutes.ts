import { randomUUID } from "crypto";
import { FastifyInstance } from "fastify";
import { knex } from "../setupKnex";
import { z } from 'zod'


export async function usersRoutes(app: FastifyInstance) {
    app.post('/', async (req, res) => {

       const createUserBodySchema = z.object({
        name: z.string(),
       })   
       const {name} = createUserBodySchema.parse(req.body)
       
       const user = await knex('users').insert({
        id: randomUUID(),
        name
       })
      });
}
