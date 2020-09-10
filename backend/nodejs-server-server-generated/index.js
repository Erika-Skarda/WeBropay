
const express = require('express');
const cors = require('cors')

const dotenv = require('dotenv');
'use strict';

var path = require('path');
var http = require('http');

var oas3Tools = require('oas3-tools');
var serverPort = (process.env.DB_PORT || "8080");

// swaggerRouter configuration
var options = {
    controllers: path.join(__dirname, './controllers')
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
expressAppConfig.addValidator();
var app = expressAppConfig.getApp();


app.use(cors({ origin: true}))
app.use(express.json())

// Initialize the Swagger middleware
if(process.env.NODE_ENV !== "serveless") {
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});

}
const bodyParser = require('body-parser');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', 'views');


app.use(bodyParser.urlencoded({ extended: true }));
//https://5atloqntqe.execute-api.us-east-1.amazonaws.com/dev