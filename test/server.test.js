const request = require("supertest");
const initialiseTestDatabase = require("../src/database/test_build");
const clearTestDatabase = require("../src/database/test_clear");
const db = require("../src/database/db_connect");
const app = require("../src/app");
const data = require("./test-data");

test("six of one, half a dozen of another", () => {
  expect(12 / 2).toBe(6);
});

beforeEach(() => initialiseTestDatabase());

afterEach(() => clearTestDatabase());

afterAll(() => db.$pool.end());

describe("Test root path", () => {
  test("Home route responds to GET request with 200", done => {
    request(app)
      .get("/")
      .then(res => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test pre-existing board path", () => {
  test("/board/1 route with pre-existing topics responds to GET request with 200", done => {
    request(app)
      .get("/board/1/")
      .then(res => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
  test("/board/4 route with no pre-existing topics responds to GET request with 200", done => {
    request(app)
      .get("/board/4/")
      .then(res => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test create new board path", () => {
  test("/create route returns 302", done => {
    request(app)
      .get("/create/")
      .then(res => {
        expect(res.statusCode).toBe(302);
        done();
      });
  });
});

describe("Test add topic path", () => {
  test("/add route with POST method and valid data returns 302", done => {
    request(app)
      .post("/add-topic/")
      .send(data.validTopic)
      .then(res => {
        expect(res.statusCode).toBe(302);
        done(0);
      });
  });
  test("/add route with invalid board id in data returns 404", done => {
    request(app)
      .post("/add-topic/")
      .send(data.invalidTopic1)
      .then(res => {
        expect(res.statusCode).toBe(404);
        done(0);
      });
  });
  test("/add route with invalid user id in data returns 404", done => {
    request(app)
      .post("/add-topic/")
      .send(data.invalidTopic2)
      .then(res => {
        expect(res.statusCode).toBe(404);
        done(0);
      });
  });
  test("/add route with no new topic text returns 404", done => {
    request(app)
      .post("/add-topic/")
      .send(data.invalidTopic3)
      .then(res => {
        expect(res.statusCode).toBe(404);
        done(0);
      });
  });
  test("/add route with invalid sgc number in data returns 404", done => {
    request(app)
      .post("/add-topic/")
      .send(data.invalidTopic4)
      .then(res => {
        expect(res.statusCode).toBe(404);
        done(0);
      });
  });
});

describe("Test non-existent routes", () => {
  test("/notavalidroute returns 404", done => {
    request(app)
      .get("/notavalidroute/")
      .then(res => {
        expect(res.statusCode).toBe(404);
        done();
      });
  });
  test("/board/123456789 returns 404", done => {
    request(app)
      .get("/board/123456789/")
      .then(res => {
        expect(res.statusCode).toBe(404);
        done();
      });
  });
  test("/board/notavalidroute returns 404", done => {
    request(app)
      .get("/board/notavalidroute/")
      .then(res => {
        expect(res.statusCode).toBe(404);
        done();
      });
  });
  test("/create/notavalidroute returns 404", done => {
    request(app)
      .get("/create/notavalidroute/")
      .then(res => {
        expect(res.statusCode).toBe(404);
        done();
      });
  });
});

describe("Test server error", () => {
  test("/make_error returns 500", done => {
    request(app)
      .get("/make_error/")
      .then(res => {
        expect(res.statusCode).toBe(500);
        done();
      });
  });
});
