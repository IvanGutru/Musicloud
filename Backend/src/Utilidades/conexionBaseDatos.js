const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '12345',
    database: 'musicloud',
    port: '5432'
});

module.exports = pool;