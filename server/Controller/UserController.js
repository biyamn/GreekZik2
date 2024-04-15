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

const login = (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM users WHERE email = ?`;

  // email이 있는지 확인
  conn.query(sql, email, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    const loginUser = results[0];
    // salt값 꺼내서 비밀번호 암호화, 디비 비밀번호와 비교
    const hashPassword = crypto
      .pbkdf2Sync(password, loginUser.salt, 100000, 10, 'sha512')
      .toString('base64');

    if (loginUser && loginUser.password === hashPassword) {
      // 토큰 발행
      const token = jwt.sign(
        {
          email: loginUser.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: '1h',
          issuer: 'biyam',
        }
      );

      // 토큰 쿠키에 담아서 보내기
      res.cookie('token', token, {
        httpOnly: true,
      });
      console.log('token:', token);
      return res.status(StatusCodes.OK).json(results);
    } else {
      return res.status(StatusCodes.UNAUTHORIZED).end();
    }
  });
};

module.exports = {
  join,
  login,
};
