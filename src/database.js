import pg from 'pg';

const { Pool } = pg;

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'mavis1797',
    database: 'nodepg',
    port: '5432'
});