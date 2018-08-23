const dbConnection = require("../database/db_connect");

module.exports = () =>
  dbConnection.query("INSERT INTO boards (user_id) VALUES (1) RETURNING id");
