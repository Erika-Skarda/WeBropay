const serverless = require("serverless-http")
const app = require('./index')
const pg = require('pg')

// module.exports.handler = serverless(app);

const awsServerlessExpress = require('aws-serverless-express');
const server = awsServerlessExpress.createServer(app)


module.exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);