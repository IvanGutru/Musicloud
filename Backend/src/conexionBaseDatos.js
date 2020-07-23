const { Pool } = require('pg');

const pool = new Pool({
    host: '127.0.0.1',
    user: 'postgres',
    password: '12345',
    database: 'musicloud',
    port: '5432'
});

module.exports = pool;