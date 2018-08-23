const dbConnection = require("../database/db_connect");

module.exports = topic =>
  dbConnection.none(
    `INSERT INTO topics (board_id, text_content, sgc) VALUES ($1, $2, $3)`,
    [topic.board_id, topic.topic, topic.sgc]
  );
