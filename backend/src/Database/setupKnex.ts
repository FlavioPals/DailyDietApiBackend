import {knex as setupKnex, Knex} from "knex";

export const config:Knex.Config = {
    client: 'sqlite3',
    connection: {
        filename: './src/Database/db.sqlite'
    },
    useNullAsDefault: true,
    migrations: {
        extension: 'ts',
        directory: './src/Database/migrations'
    }

}

export const knex = setupKnex(config)