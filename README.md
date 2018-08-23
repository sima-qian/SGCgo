# sgcGO
> Founders and Coders Week 8 project 

![Travis badge](https://api.travis-ci.org/dupreesi/sgcGO.svg?branch=master)
[![codecov](https://codecov.io/gh/dupreesi/sgcGO/branch/master/graph/badge.svg)](https://codecov.io/gh/dupreesi/sgcGO)

Stop Go Continue - now digitally available so we can do it in the park :>)


## Local Installation

1. `$ git clone https://github.com/dupreesi/sgcGO.git`
2. `$ npm i`
3. Go into PGCLI or PSQL and  enter the following: 


1. `CREATE DATABASE [db_name];` `
2. `CREATE USER [user_name] WITH SUPERUSER PASSWORD ['password'];`
3. `ALTER DATABASE [db_name] OWNER TO [user_name];`
`

4. Create a `config.env` file in your project root containing a DATABASE_URL variable with a postgres:// URL to a local database (DB_URL=postgres://user:password@localhost:port/database_name)
5. Build the database: `$ psql -f "src/databaseb/db_build.sql" YOUR_DATABASE`
6. Run that thing:`$ npm run dev`

## USER STORIES

- I can create a new board and invite others by sharing a link 
- I can see existing boards by searching for specific names or ids
- I can post topics to the currently active board 


