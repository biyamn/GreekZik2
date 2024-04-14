const conn = require('../mariadb');
const dotenv = require('dotenv');
dotenv.config();

const join = (req, res) => {
  const { email, password, nickname } = req.body;
  const values = [email, password, nickname];
  const sql = `INSERT INTO users (email, password, nickname) VALUES (?, ?, ?)`;
  conn.query(sql, values, (err, result) => {
    if (err) {
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
