const fs = require("fs");
const dbConnection = require("./db_connect");

const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

const initialiseDatabase = () => dbConnection.query(sql);

// runDbBuild();

module.exports = initialiseDatabase;
