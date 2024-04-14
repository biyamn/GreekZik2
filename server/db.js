const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'GreekZik',
  dateStrings: true, // DB에서 불러올 TIMESTAMP 값에서 소수점단위의 시간은 제거
});

module.exports = connection;
