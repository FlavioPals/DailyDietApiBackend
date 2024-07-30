import fastify from "fastify";
import { knex } from "../Database/setupKnex";

const app = fastify();

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP server running on http://localhost:3333')
})

app.get('/', async (req, res) => {
  const test = await knex('meals').select('*')
  return test
})