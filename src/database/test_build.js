const fs = require("fs");
const dbConnection = require("./db_connect");

const sql = fs.readFileSync(`${__dirname}/test_build.sql`).toString();

const runDbTestBuild = () =>
  new Promise((resolve, reject) => {
    dbConnection.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });

module.exports = runDbTestBuild;
