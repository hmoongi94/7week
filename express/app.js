const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// 이 부분이 중요: POST 요청 데이터를 파싱하기 위해 express.json() 미들웨어를 사용합니다.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/post-endpoint', (req, res) => {
  console.log('POST 요청 바디 값:', req.body);
  res.send('POST 요청이 완료되었습니다.');
});

app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});