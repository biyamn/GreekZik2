const express = require('express');
const router = express.Router();
const conn = require('../db');

router.use(express.json()); // post 요청을 위해 필요

const { join, login } = require('../controller/UserController.js');

// 회원가입
router.post('/join', join);

// 로그인
router.post('/login', login);

module.exports = router;
