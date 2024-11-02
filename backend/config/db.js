const mysql = require('mysql2')

const db = mysql.createConnection({
    user:process.env.USER,
    password: process.env.PASSWORD,
    host:process.env.HOST,
    database:process.env.DATABASE
})

module.exports = db