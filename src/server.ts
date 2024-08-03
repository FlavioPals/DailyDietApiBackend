import express from 'express'
import { knex } from './Database/setupKnex'
import { env } from './env'
import { userRoutes } from './routes/userRoutes'
import { mealsRoutes } from './routes/mealsRoutes'

const app = express()
app.use(express.json())
app.use('/users', userRoutes)
app.use('/meals', mealsRoutes)


app.listen(env.PORT, () =>{
    console.log('Server is running on http://localhost:3333')
})


