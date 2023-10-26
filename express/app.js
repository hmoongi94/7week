const express = require('express');
const app = express();
const port = 3000; // 사용할 포트 번호를 지정하세요.

// 정적 파일 (HTML, CSS, 이미지 등)을 제공하기 위해 'public' 디렉토리 설정
app.use(express.static('public'));

// GET 요청에 대한 응답
app.get('/', (req, res) => {
  res.sendFile(__dirname + './public/index.html'); // index.html 파일을 응답으로 보냅니다.
});

// POST 요청에 대한 응답
app.use(express.json()); // JSON 데이터를 파싱하기 위한 미들웨어 설정
app.post('/post-endpoint', (req, res) => {
  console.log('POST 요청 바디 값:', req.body);
  res.send('POST 요청이 완료되었습니다.');
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});