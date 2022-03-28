const mysql = require('mysql2/promise');

const connection = mysql.createPool({
host: 'localhost',
user: 'root',
password: '225566',
database: 'projeto' });

module.exports = connection;