const db = require("../src/database/db_connect");
const initialiseTestDatabase = require("../src/database/test_build");
const clearTestDatabase = require("../src/database/test_clear");
const getTopics = require("../src/queries/get_topics");
const checkBoard = require("../src/queries/check_board");
const createBoard = require("../src/queries/create_board");
const addTopic = require("../src/queries/add_topic");
const data = require("./test-data");

beforeEach(() => initialiseTestDatabase());

afterEach(() => clearTestDatabase());

afterAll(() => db.$pool.end());

describe("Can check if board exists", () => {
  test("Can check if valid board exists by id", () => {
    expect.assertions(1);
    return checkBoard.byId(data.validBoard.id).then(result => {
      expect(result).toBeTruthy();
    });
  });
  test("Can check if valid board exists by name", () => {
    expect.assertions(1);
    return checkBoard.byName(data.validBoard.name).then(result => {
      expect(result).toBeTruthy();
    });
  });
  test("Can check if invalid board exists", () => {
    expect.assertions(1);
    return checkBoard.byId(data.invalidBoard.id).catch(err => {
      expect(err).toBeTruthy();
    });
  });
});

describe("Can get topics relating to a board", () => {
  test("Can get topics by board id", () => {
    expect.assertions(1);
    return getTopics.byId(data.validBoard.id).then(result => {
      expect(result.length).toBe(6);
    });
  });
  test("Can get zero topics by board id without an error", () => {
    expect.assertions(1);
    return getTopics.byId(data.invalidBoard.id).then(result => {
      expect(result.length).toBe(0);
    });
  });
  test("Can get topics by board name", () => {
    expect.assertions(1);
    return getTopics.byName(data.validBoard.name).then(result => {
      expect(result.length).toBe(6);
    });
  });
  test("Can get zero topics by invalid board name without an error", () => {
    expect.assertions(1);
    return getTopics
      .byName(data.invalidBoard.name)
      .then(result => expect(result.length).toBe(0));
  });
});

describe("Can make new boards", () => {
  test("Can create a new board", () => {
    expect.assertions(1);
    return createBoard(1).then(result => {
      expect(result.id).toBe(5);
    });
  });
});

describe("Test add topic functionality", () => {
  test("Can add a new valid topic", () => {
    expect.assertions(1);
    return addTopic(data.validTopic).then(result => {
      expect(result).toBeNull();
    });
  });
  test("Trying to add a topic with invalid board id returns an error", () => {
    expect.assertions(1);
    return addTopic(data.invalidTopic1).catch(err => {
      expect(err).toBeTruthy();
    });
  });
  test("Trying to add a topic with invalid user id returns an error", () => {
    expect.assertions(1);
    return addTopic(data.invalidTopic2).catch(err => {
      expect(err).toBeTruthy();
    });
  });
  test("Trying to add a topic with no topic text returns an error", () => {
    expect.assertions(1);
    return addTopic(data.invalidTopic3).catch(err => {
      expect(err).toBeTruthy();
    });
  });
  test("Trying to add a topic with invalid sgc number returns an error", () => {
    expect.assertions(1);
    return addTopic(data.invalidTopic4).catch(err => {
      expect(err).toBeTruthy();
    });
  });
});
