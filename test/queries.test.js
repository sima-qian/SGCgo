const tape = require("tape");
const runDbTestBuild = require("../src/database/test_build");
const getTopics = require("../src/queries/get_topics");
const addTopic = require("../src/queries/add_topic");
const createBoard = require("../src/queries/create_board");

tape("Can generate database", t => {
  runDbTestBuild()
    .then(res => {
      t.ok(res, "database generated");
      t.end();
    })
    .catch(error => {
      t.error(error, "error when generating database");
      t.end();
    });
});

tape("Can get topics relating to a board by board id", t => {
  runDbTestBuild().then(
    getTopics
      .byId(1)
      .then(res => {
        t.ok(res, "should get a result");
        t.equal(res.length, 6, "board 1 should have 6 topics");
        t.end();
      })
      .catch(error => {
        t.error(error, "oh no");
        t.end();
      })
  );
});

tape("Can get topics relating to a board by board name", t => {
  runDbTestBuild().then(
    getTopics
      .byName("sgcGO122")
      .then(res => {
        t.ok(res, "should get a result");
        t.equal(res.length, 6, "board 1 should have 6 topics");
        t.end();
      })
      .catch(error => {
        t.error(error, "oh no");
        t.end();
      })
  );
});

tape("Can add topic to board", t => {
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

tape("Can't add topic to non-existant board", t => {
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

tape("Can create a new board", t => {
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
