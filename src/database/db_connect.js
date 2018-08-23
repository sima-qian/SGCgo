const pgp = require("pg-promise")();

const herokuDB = {
  host: process.env.HEROKU_HOST,
  user: process.env.HEROKU_USER,
  password: process.env.HEROKU_PW,
  database: process.env.HEROKU_DB,
  max: process.env.DB_MAX_CONNECTIONS || 2,
  ssl: true
};

const localDB = {
  host: "localhost",
  port: 5432,
  database: "sgcgo_private_test",
  max: process.env.DB_MAX_CONNECTIONS || 2,
  user: "simaqian",
  password: "password123",
  ssl: false
};

const connection = process.env.NODE_ENV === "test" ? localDB : herokuDB;

const db = pgp(connection);
module.exports = db;
