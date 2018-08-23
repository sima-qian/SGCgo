const tape = require("tape");
const request = require("supertest");
const app = require("../src/app");

tape("Home route", t => {
  request(app)
    .get("/")
    .expect(200)
    .end(err => {
      t.error(err, "home route returns 200");
      t.end();
    });
});

tape("Board route", t => {
  request(app)
    .get("/board/1")
    .expect(200)
    .end(err => {
      t.error(err, "/board/1 returns 200");
      t.end();
    });
});

tape("Non-existant route", t => {
  request(app)
    .get("/kdsghflsdkfjs/")
    .expect(404)
    .end(err => {
      t.error(err, "should get 404");
      t.end();
    });
});

tape("Server errors", t => {
  request(app)
    .get("/make_error/")
    .expect(500)
    .end(err => {
      t.error(err, "should get 500");
      t.end();
    });
});
