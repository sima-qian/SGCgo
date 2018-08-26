const dbConnection = require("../database/db_connect");

exports.byId = id => dbConnection.one(`SELECT id FROM boards WHERE id=$1`, id);

exports.byName = name =>
  dbConnection.one(`SELECT id FROM boards WHERE board_name=$1`, name);
