
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();


var knex = require('knex')({
  client: 'pg',
  // version: '7.2',
  connection: {
    host : process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "5432"),
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE,
  }
});
module.exports = knex
