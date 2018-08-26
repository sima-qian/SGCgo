const db = require("../database/db_connect");

exports.byId = id => db.result(`DELETE FROM topics WHERE id=$1`, id);
