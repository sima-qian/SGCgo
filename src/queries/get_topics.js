const dbConnection = require("../database/db_connect");

exports.byId = id =>
  dbConnection.query(`SELECT * FROM topics WHERE board_id=$1`, [id]);

exports.byName = name =>
  dbConnection.query(
    `SELECT * FROM topics WHERE board_id=(SELECT id FROM boards WHERE board_name=$1)`,
    [name]
  );
