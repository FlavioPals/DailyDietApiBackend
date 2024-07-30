import fastify from "fastify";
import { knex } from "../Database/setupKnex";
import { randomUUID } from "crypto";
import { env } from "../env";
import { usersRoutes } from "../Database/routes/userRoutes";

const app = fastify();
app.register(usersRoutes, {
  prefix: '/users'
})

app.listen({
  port: env.PORT,
}).then(() => {
  console.log('HTTP server running on http://localhost:3333')
})

