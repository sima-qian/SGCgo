const dbConnection = require('../database/db_connect');

exports.byId = id =>
  new Promise((resolve, reject) => {
    dbConnection.query(
      `SELECT * FROM topics WHERE board_id=$1`,
      [id],
      (err, res) => {
        if (err) return reject(err);
        resolve(res.rows);
      }
    );
  });

exports.byName = name =>
  new Promise((resolve, reject) => {
    dbConnection.query(
      `SELECT * FROM topics WHERE board_id=(SELECT id FROM boards WHERE board_name=$1)`,
      [name],
      (err, res) => {
        if (err) return reject('no board found');
        resolve(res.rows);
      }
    );
  });
