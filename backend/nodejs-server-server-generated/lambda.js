
const serverless = require("serverless-http")
const app = require('./index')
const pg = require('pg')

export const handler = serverless(app);