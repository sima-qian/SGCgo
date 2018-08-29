"use strict";

const pgp = require("pg-promise")();
const url = require("url");
require("env2")("./config.env");

let DB_URL = process.env.DATABASE_URL;
if (process.env.NODE_ENV === "test") {
  DB_URL = process.env.TEST_DB_URL;
}

if (!DB_URL) throw new Error("Environment variable DB_URL must be set");

const params = url.parse(DB_URL);
const [username, password] = params.auth.split(":");

const herokuDB = {
  host: params.hostname,
  user: username,
  password,
  database: params.pathname.split("/")[1],
  max: process.env.DB_MAX_CONNECTIONS || 2
};

// const herokuDB = {
//   host: process.env.HEROKU_HOST,
//   user: process.env.HEROKU_USER,
//   password: process.env.HEROKU_PW,
//   database: process.env.HEROKU_DB,
//   max: process.env.DB_MAX_CONNECTIONS || 2
//   // ssl: true
// };

const testDB = {
  host: "localhost",
  port: 5432,
  database: "sgcgo_private_test",
  user: "simaqian",
  password: "password123"
};

// const localDB = {
//   host: "localhost",
//   port: 5432,
//   database: "sgcgo_private",
//   user: "simaqian",
//   password: "password123"
// };

const connection = process.env.NODE_ENV === "test" ? testDB : herokuDB;

const db = pgp(connection);
module.exports = db;
