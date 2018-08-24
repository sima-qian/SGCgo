const test = require("tape");
const runDbTestBuild = require("../src/database/test_build");
const getTopics = require("../src/queries/get_topics");
const addTopic = require("../src/queries/add_topic");
const createBoard = require("../src/queries/create_board");
const checkBoard = require("../src/queries/check_board");

test("Can generate database", t => {
  runDbTestBuild()
    .then(res => {
      t.ok(res, "database generated");
      t.end();
    })
    .catch(error => {
      t.error(error, "error generating database");
      t.end();
    });
});

test("Can get board topics by board id", t => {
  const validBoardId = 1;
  runDbTestBuild().then(
    getTopics
      .byId(validBoardId)
      .then(res => {
        t.ok(res, "should get a result");
        t.equal(res.length, 6, "board 1 should have six topics");
        t.end();
      })
      .catch(error => {
        t.error(error, "oh no");
        t.end();
      })
  );
});

test("Can get board topics by board name", t => {
  const validBoardName = "sgcGO122";
  runDbTestBuild().then(
    getTopics
      .byName(validBoardName)
      .then(res => {
        t.ok(res, "should get a result");
        t.equal(res.length, 6, "board 1 should have six topics");
        t.end();
      })
      .catch(error => {
        t.error(error, "oh no");
        t.end();
      })
  );
});

test("Can add topics to boards", t => {
  const validTopic = {
    board_id: 1,
    topic: "black pudding",
    sgc: 1
  };
  runDbTestBuild().then(
    addTopic(validTopic)
      .then(res => {
        t.equal(res, null, "should return null");
        t.end();
      })
      .catch(err => {
        t.error(err, "oh no");
        t.end();
      })
  );
});

test("Can't add topic to non-existant board", t => {
  const invalidTopic = {
    board_id: 10,
    topic: "black pudding",
    sgc: 1
  };
  runDbTestBuild().then(
    addTopic(invalidTopic)
      .then(res => {
        t.ok(res, "promise should not be resolved");
        t.end();
      })
      .catch(err => {
        t.ok(err, "should return error");
        t.end();
      })
  );
});

test("Can create a new board", t => {
  runDbTestBuild().then(
    createBoard()
      .then(res => {
        t.equal(res.id, 5, "new board should have id of 5 ");
        t.end();
      })
      .catch(err => {
        t.error(err, "oh no");
        t.end();
      })
  );
});

test("Can check a board exists", t => {
  const validBoardId = 1;
  runDbTestBuild().then(
    checkBoard(validBoardId)
      .then(res => {
        t.equal(res.id, 1, "board should have id of 1");
        t.end();
      })
      .catch(err => {
        t.error(err, "oh no");
        t.end();
      })
  );
});

test("Checking a non-existent board returns an error", t => {
  const validBoardId = 10;
  runDbTestBuild().then(
    checkBoard(validBoardId)
      .then(res => {
        t.notOk(res, "should not return a result");
        t.end();
      })
      .catch(err => {
        t.ok(err, "should get an error");
        t.end();
      })
  );
});
