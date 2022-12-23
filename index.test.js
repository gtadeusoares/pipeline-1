const app = require('./index.js');
const supertest = require('supertest');

test('GET /', (done) => {
    supertest(app)
        .get('/')
        .expect(200, 'Hello, world.')
        .end(done);
});
