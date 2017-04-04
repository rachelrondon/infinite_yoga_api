const pgp = require('pg-promise')();

const db = pgp(process.env.DATABASE_URL || {
  host: 'localhost',
  port: 5432,
  database: 'api_yoga'
});

module.exports = db;
