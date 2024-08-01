import express from 'express'
import { knex } from './Database/setupKnex'
import { randomUUID } from 'crypto'
import { env } from './env'

const app = express()

app.use(express.json())

app.listen(env.PORT, () =>{
    console.log('Server is running on http://localhost:3333')
})

app.get('/',async (req, res)=> {
    const test = await knex('users').select('*')
    res.json(test)

})

app.post('/', async(req, res)=> {
    const test = await knex('users').insert({
        id:randomUUID(),
        name:'testaaa',
        email:'test@email.com',
        password:'1234',

    }).returning('*')
    res.json(test)
})
