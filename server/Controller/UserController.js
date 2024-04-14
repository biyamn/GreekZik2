const conn = require('../db');
const dotenv = require('dotenv');
dotenv.config();

const join = (req, res) => {
  const { nickname, email, password } = req.body;
  const values = [nickname, email, password];
  const sql = `INSERT INTO users (nickname, email, password) VALUES (?, ?, ?)`;
  conn.query(sql, values, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json('회원가입 실패');
      return;
    }
    res.status(200).json('회원가입 성공');
  });
};

const login = (req, res) => {};

module.exports = {
  join,
  login,
};
