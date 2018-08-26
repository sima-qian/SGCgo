const data = {
  validBoard: {
    id: 1,
    name: "sgcGO122"
  },
  invalidBoard: {
    id: 10,
    name: "zzzzzzzzzzzzzzz"
  },
  validTopic: {
    board_id: 1,
    user_id: 1,
    topic: "test",
    sgc: 1
  },
  invalidTopic1: {
    board_id: 10,
    user_id: 1,
    topic: "test",
    sgc: 1
  },
  invalidTopic2: {
    board_id: 1,
    user_id: 10,
    topic: "test",
    sgc: 1
  },
  invalidTopic3: {
    board_id: 1,
    user_id: 1,
    topic: "",
    sgc: 1
  },
  invalidTopic4: {
    board_id: 1,
    user_id: 1,
    topic: "test",
    sgc: 4
  }
};

module.exports = data;
