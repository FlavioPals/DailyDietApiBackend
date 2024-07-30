import fastify from "fastify";
import { knex } from "../Database/setupKnex";
import { randomUUID } from "crypto";
import { env } from "../env";

const app = fastify();

app.listen({
  port: env.PORT,
}).then(() => {
  console.log('HTTP server running on http://localhost:3333')
})

app.get('/', async (req, res) => {
  const test = await knex('users').insert({
    id: randomUUID(),
    name: 'Flavio'
  })
  const showtest  = await knex('users')
  .where('name', 'Flavio')
  .select('*')
  return (console.log(showtest) , test)
});