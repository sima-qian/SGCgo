const { Pool } = require('pg');
const url = require('url');
const env = require('env2');
env('./config.env'); // env starts in root so doesn't need two periods
let DB_URL = process.env.DB_URL

if (process.env.NODE_ENV === 'test') {
  console.log("running test environment");
  DB_URL = process.env.TEST_DB_URL
}

console.log('DB_URL: ', DB_URL)

if (!DB_URL) throw new Error('Environment variable DB_URL must be set')

const params = url.parse(DB_URL)
const [username, password] = params.auth.split(':')

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  max: process.env.DB_MAX_CONNECTIONS || 2,
  user: username,
  password,
  ssl: params.hostname !== 'localhost'
}
console.log(options)

module.exports = new Pool(options)