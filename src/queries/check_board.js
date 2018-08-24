const dbConnection = require("../database/db_connect");

module.exports = id =>
  dbConnection.one(`SELECT id FROM boards WHERE id=$1`, id);
