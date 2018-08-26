const fs = require("fs");
const dbConnection = require("./db_connect");

const sql = fs.readFileSync(`${__dirname}/test_build.sql`).toString();

const initialiseTestDatabase = () => dbConnection.query(sql);

initialiseTestDatabase();

module.exports = initialiseTestDatabase;
