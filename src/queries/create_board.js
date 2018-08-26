const dbConnection = require("../database/db_connect");

module.exports = userId =>
  dbConnection.one("INSERT INTO boards (user_id) VALUES (1) RETURNING id");
