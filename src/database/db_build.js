const fs = require('fs')
const dbConnection = require('./db_connect')

const sql = fs.readFileSync(`${__dirname}/build.sql`).toString()

const runDbBuild = () => {
  dbConnection.query(sql)
  .then(res => console.log(res))
  .catch(err => console.log(err))
}
runDbBuild();

module.exports = runDbBuild