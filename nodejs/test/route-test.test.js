const assert = require('assert');
const request = require('supertest');
const app = require('../server'); // Assuming your server.js exports the Express app



describe('Express App Routes', () => {
  describe('GET /', () => {
    it('should return "hello world"', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          assert.strictEqual(res.text, 'hello world');
          done();
        });
    });
  });

  describe('GET /health', () => {
    it('should return "i am healthy"', (done) => {
      request(app)
        .get('/health')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          assert.strictEqual(res.text, 'i am healthy');
          done();
        });
    });
  });
});
