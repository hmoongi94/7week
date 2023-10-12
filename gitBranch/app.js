const http = require("http");

const server = http.createServer((req,res) => {
  res.writeHead(200,"utf-8",{"Content-Type" : "text/plain"})
  // plain -> 텍스트만 던짐
  // html -> html로 만듬
  res.write("향마루");
  res.end();
});

server.listen(3500,(err)=>{
  if(!err) {
    console.error("서버 에러남")
  } else{
    console.log("3500포트에 돌아감 http://localhost:3500");
    // 꿀팁) 로그에 주소적으면 콘솔에서 클릭해서 서버들어갈 수 있음.
  }
})

console.log("test")