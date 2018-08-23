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

tape('check that board route is working', t => {
  request(app)
    .get('/board/1')
    .expect(200)
    .end((err, res) => {
      t.error(err, 'board/1 returns 200 status code');
      t.end();
    });
});

tape('check that nonexistent route gets 404', t => {
  request(app)
    .get('/kdsghflsdkfjs/')
    .expect(404)
    .end((err, res) => {
      t.error(err, '404 status code returned');
      t.end();
    });
});

tape('check that server errors are handled appropriately', t => {
  request(app)
    .get('/make_error/')
    .expect(500)
    .end((err, res) => {
      t.error(err, '500 status code returned');
      t.end();
    });
});
