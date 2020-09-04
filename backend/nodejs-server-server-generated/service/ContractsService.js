'use strict';
const knex = require('./database');

exports.addContract = async function(body) {
  try {
    const result = await knex.raw(`
      SELECT  *
      FROM "contracts"
    `);
      const arrayId = result.rows.map((contract) => contract.id) 
      const ordArrayId = arrayId.sort((a, b) => b - a)
         
    await knex("contracts")
      .insert({
        id: (arrayId[0] + 1),
        description: body.description,
        status: body.status
      })
      .returning('*');
      
   
  } catch (err) {
    console.log(err)
    throw new Error("Problems")
  }
}

exports.getAllContracts = async function(req) {
 
  // try {
  //    const result = await knex.raw(`
  //      SELECT  *
  //      FROM "contracts"
  //   `);
    
  //   return result.rows.map((contract) => contract)

   try {

    const postsPerPage = 20;
    const newPage = req.query.page >=1 ? req.query.page : 1;
    let offset =  postsPerPage * (newPage - 1); 
   
    const result = await knex("contracts")
      .select("*")
      .orderBy('id', 'desc')
      .limit(postsPerPage)
      .offset(offset);
 
      return result.map((contract) => contract)

  } catch (err) {
    console.log(err)
    throw new Error("Contracts not found")
  }
}

exports.updateContract = async function(req) {
 
  try {
  
   let currentStatus = await knex.raw(`
      SELECT status
      FROM "contracts"
      WHERE id = ${req.openapi.pathParams.id}
   `);

    currentStatus = currentStatus.rows[0].status;

    await knex("contracts")
      .where({ id: req.openapi.pathParams.id })
      .update({ status: !currentStatus })
      .returning('*');

  } catch (err) {
  
  throw new Error("Problems to update the status")

  }
}


