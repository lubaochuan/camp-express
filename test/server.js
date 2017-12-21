var request = require('supertest');
var expressServer = require('..');
var assert = require('assert');

describe('GET /api/test', function () {
    it('responds with data', function (done) {
        request(expressServer.server)
            .get('/api/test')
            .expect(200, expressServer.data, done);
    });
});
