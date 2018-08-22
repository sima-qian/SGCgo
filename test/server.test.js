const tape = require('tape');
const request = require('supertest');
const app = require('../src/app');

tape('check that landing page route is working', t => {
  request(app)
    .get('/')
    .expect(200)
    .end((err, res) => {
      t.error(err, 'home route returns 200 status code');
      t.end();
    });
});
