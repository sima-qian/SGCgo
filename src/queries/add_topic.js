const dbConnection = require("../database/db_connect");

module.exports = topic =>
  new Promise((resolve, reject) => {
    dbConnection.query(
      `INSERT INTO topics (board_id, text_content, sgc) VALUES ($1, $2, $3)`,
      [topic.board_id, topic.topic, topic.sgc],
      (err, res) => {
        if (err) reject(err);
        resolve(res);
      }
    );
  });
