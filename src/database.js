import pg from 'pg';
import { DB_DATABSE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from './config.js';

const { Pool } = pg;

export const pool = new Pool({
    user: DB_USER,
    host: DB_HOST,
    password: DB_PASSWORD,
    database: DB_DATABSE,
    port: DB_PORT
});