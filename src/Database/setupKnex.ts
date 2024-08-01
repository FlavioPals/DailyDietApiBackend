import { knex as setupKnex, Knex } from 'knex';
import 'dotenv/config'
import { env } from '../env';



export const config:Knex.Config= {
    client: 'sqlite3',
    connection: {
        filename: env.DATABASE_URL
    },
    useNullAsDefault: true,
    migrations: {
        directory: './src/Database/migrations',
        extension: 'ts'
    }
}
export const knex = setupKnex(config)