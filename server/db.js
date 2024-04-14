// mysql 모듈 소환
const mariadb = require('mysql2');

// DB 연결 통로 생성
const connection = mariadb.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'GreekZik',
  dateStrings: true,
});

module.exports = connection;
