const conn = require('../db');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const crypto = require('crypto'); // nodw.js 내장 모듈
const dotenv = require('dotenv');
dotenv.config();

const join = (req, res) => {
  const { nickname, email, password } = req.body;

  // 비밀번호 암호화. 10글자 만들기
  const salt = crypto.randomBytes(10).toString('base64');
  console.log('salt:', salt);
  const hashPassword = crypto
    .pbkdf2Sync(password, salt, 100000, 10, 'sha512')
    .toString('base64');

  const values = [nickname, email, hashPassword, salt];
  const sql = `INSERT INTO users (nickname, email, password, salt) VALUES (?, ?, ?, ?)`;

  conn.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).end();
      return;
    }
    res.status(200).json(results);
  });
};

const login = (req, res) => {};

module.exports = {
  join,
  login,
};
