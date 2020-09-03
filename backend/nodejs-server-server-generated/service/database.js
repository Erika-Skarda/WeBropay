
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexão com a Base de Dados:
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL
// });

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
// pool.on('connect', () => {
//   console.log('Base de Dados conectado com sucesso!');
// });

// module.exports = {
//   query: (text, params) => pool.query(text, params),
// };
