const dbConnection = require("../database/db_connect");

module.exports = () => 
    new Promise ((resolve,reject) => {
        dbConnection.query('INSERT INTO boards (user_id) VALUES (1) RETURNING id', (err,res ) => {
            if (err) return reject(err);
            resolve(res);
        })
    } )
