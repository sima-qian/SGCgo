"use strict";

const pgp = require("pg-promise")();

const herokuDB = {
  host: process.env.HEROKU_HOST,
  user: process.env.HEROKU_USER,
  password: process.env.HEROKU_PW,
  database: process.env.HEROKU_DB,
  max: process.env.DB_MAX_CONNECTIONS || 2,
  ssl: true
};

const testDB = {
  host: "localhost",
  port: 5432,
  database: "sgcgo_private_test",
  user: "simaqian",
  password: "password123"
};

const localDB = {
  host: "localhost",
  port: 5432,
  database: "sgcgo_private",
  user: "simaqian",
  password: "password123"
};

const connection = process.env.NODE_ENV === "test" ? testDB : localDB;

const db = pgp(connection);
module.exports = db;
