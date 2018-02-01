var request = require('supertest');
var expressServer = require('..');
// var assert = require('assert');

describe('GET /api/users', function() {
  it('responds with data', function(done) {
    request(expressServer)
      .get('/api/users')
      .expect(200, done);
  });
});
