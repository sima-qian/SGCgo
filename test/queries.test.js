const tape = require("tape");
const runDbTestBuild = require("../src/database/test_build");
const getTopics = require("../src/queries/get_topics");
const addTopic = require("../src/queries/add_topic");

tape("tape is running", t => {
  t.equal(2 + 2, 4, "2 plus 2 is 4");
  t.end();
});

tape("Database is generating", t => {
  runDbTestBuild()
    .then(res => {
      t.ok(res, "Is true");
      t.end();
    })
    .catch(error => {
      t.error(error, "This should not be here, ERROR ERROR");
      t.end();
    });
});

tape("Can get topics relating to a board by board id", t => {
  runDbTestBuild().then(
    getTopics
      .byId(1)
      .then(res => {
        t.ok(res, "should get a result");
        t.equal(res.rowCount, 6, "board 1 should have 6 topics");
        t.end();
      })
      .catch(error => {
        t.error(error, "Oh no");
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
        t.equal(res.rowCount, 6, "board 1 should have 6 topics");
        t.end();
      })
      .catch(error => {
        t.error(error, "Oh no");
        t.end();
      })
  );
});

tape("getTopics function can handle errors", t => {
  runDbTestBuild().then(
    getTopics
      .byName("zzzzzzzzzzzzzzzzzzzz")
      .then(res => {
        t.equal(1, 0, "promise should not be resolved");
        t.end();
      })
      .catch(error => {
        t.ok(error, "should get error");
        t.end();
      })
  );
});

tape("can add a topic to a board", t => {
  const topic = {
    board_id: 1,
    topic: "black pudding",
    sgc: 1
  };
  runDbTestBuild().then(
    addTopic(topic).then(res => {
      t.equal(res.rowCount, 1, "should insert 1 row");
      t.end();
    })
  );
});
