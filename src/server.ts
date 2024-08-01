import express from 'express'
import { knex } from './Database/setupKnex'

const app = express()

app.use(express.json())

app.listen(3333, () =>{
    console.log('Server is running on http://localhost:3333')
})

app.get('/',async (req, res)=> {
    const test = await knex('sqlite_schema').select('*')
    res.json(test)

})