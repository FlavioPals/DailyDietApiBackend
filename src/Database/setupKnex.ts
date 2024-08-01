import { knex as setupKnex, Knex } from 'knex';


export const config:Knex.Config= {
    client: 'sqlite3',
    connection: {
        filename: './src/Database/database.db'
    },
    useNullAsDefault: true,
    migrations: {
        directory: './src/Database/migrations',
        extension: 'ts'
    }
}
export const knex = setupKnex(config)