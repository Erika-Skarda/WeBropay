const request = require('supertest');

const app = require("../../index")

let contracts;

beforeEach(() => {
  contracts = [
      {
        "id": 2,
        "description": "contrato",
        "status": true
      }
  ];
  jest.setTimeout(50000);    
});

describe('createProduct', () => {        
 
   it('should create contract whith valid input', async () => {
      const response = await request(app)
          .post('/contract')
          .send(contract[0]);

      expect(response.status).toBe(200);
   });



});
