const fs = require("fs");
const db = require("./db_connect");

const sql = fs.readFileSync(`${__dirname}/test_clear.sql`).toString();

const clearTestDatabase = () => db.query(sql);

module.exports = clearTestDatabase;
