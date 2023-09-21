const assert = require('chai').assert;
const axios = require('axios');
const server = require('../server'); // Assuming your server.js exports the Express app
const serverPort = 8080; // Update with your server's port

describe('Express App Routes', ()=> {
  
    let serverInstance;

    before(() => {
      serverInstance = server;
    });
  
    after(() => {
      serverInstance.close();
    });
  

  describe('GET /', ()=>{
    it('should return "hello world"', async () => {
      const response = await axios.get(`http://localhost:${serverPort}/`);
      assert.strictEqual(response.status, 200);
      assert.strictEqual(response.data, 'hello world');
    });
  });

  describe('GET /health', ()=> {
    it('should return "i am healthy"', async () => {
      const response = await axios.get(`http://localhost:${serverPort}/health`);
      assert.strictEqual(response.status, 200);
      assert.strictEqual(response.data, 'i am healthy');
    });
  });
});
