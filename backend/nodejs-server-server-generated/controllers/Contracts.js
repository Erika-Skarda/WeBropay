'use strict';

var utils = require('../utils/writer.js');
var Contracts = require('../service/ContractsService');

module.exports.addContract = function addContract (req, res, next, body) {
  Contracts.addContract(body)

    .then(function (response) {
      utils.writeJson(res.openapi.schema.responses, response);
    })
    .catch(function (err) {
      
      utils.writeJson(res, err.message);
    });
};

module.exports.getAllContracts = function getAllContracts (req, res, next) {
  
  Contracts.getAllContracts(req)
    // console.log(req.openapi.schema.tags)
   
    .then(function (response) {
      utils.writeJson(res, response);
    })
    
    .catch(function (err) {
      utils.writeJson(res, err.message);
    });
  };
  
  module.exports.updateContract = function updateContract (req, res, next) {
  Contracts.updateContract(req)
  // console.log(req)
  // console.log(req.openapi.pathParams.id)
  
  .then(function (response) {
    utils.writeJson(res, response);  

    })
    .catch(function (err) {
      console.log(err)
      utils.writeJson(res, err.message);
    });
};
