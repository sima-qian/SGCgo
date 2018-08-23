const fs = require('fs')
const dbConnection = require('./db_connect')

const sql = fs.readFileSync(`${__dirname}/test_build.sql`).toString()

const runDbTestBuild = () => {
  return new Promise((resolve, reject) => {
    dbConnection.query(sql, (err, result) => {
      if (err) {
        console.log(err, "ERROR");
        reject(err);
      } else {
        console.log('All your base is being create');
        resolve(result);
      }
    });
  });
}


module.exports = runDbTestBuild