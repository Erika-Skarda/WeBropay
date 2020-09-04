const serverless = require("serverless-http")
const app = require('./index')
const pg = require('pg')

module.exports.handler = serverless(app);
