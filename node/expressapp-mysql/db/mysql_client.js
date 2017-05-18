/**
 * Created by 207-003 on 2017-05-18.
 */

//mysql driver load
const mysql = require("mysql");


//connect
const client = mysql.createConnection({

    host : "192.168.99.100",
    port : 32768,
    user : "root",
    password : "admin",
    database : "article"

});

module.exports = client;