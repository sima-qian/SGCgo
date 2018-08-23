const fs = require("fs");
const dbConnection = require("./db_connect");

const sql = fs.readFileSync(`${__dirname}/test_build.sql`).toString();

const runDbTestBuild = () => dbConnection.query(sql);

module.exports = runDbTestBuild;
