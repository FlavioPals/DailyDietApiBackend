import express from 'express'
import { knex } from './Database/setupKnex'
import { env } from './env'
import { userRoutes } from './routes/userRoutes'

const app = express()
app.use(express.json())
app.use('/users', userRoutes)


app.listen(env.PORT, () =>{
    console.log('Server is running on http://localhost:3333')
})


app.get('/', async(req, res)=> {
    const test = await knex('meals').select('*')
    res.json(test)
})