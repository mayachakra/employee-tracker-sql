const { Pool } = require('pg');

const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'rootpass',
    database:'employee_tracker',
    port: 5432
});

module.exports = pool;