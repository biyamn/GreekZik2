// express 모듈 셋팅
const express = require('express');
const app = express();
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

app.listen(process.env.PORT);
console.log('app is running on port', process.env.PORT);
app.use(cors());

const userRouter = require('./routes/users');

// 라는 경로가 있을 때 userRouter를 사용하겠다는 의미
app.use('/users', userRouter);
