const db = require("../database/db_connect");

module.exports = id =>
  db.oneOrNone(`SELECT board_id FROM topics WHERE id=$1`, id);
