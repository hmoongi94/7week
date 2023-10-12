const http = require("http");

const server = http.createServer((req,res) => {

});

server.listen(3500,(err)=>{
  if(!err) {
    console.error("서버 에러남")
  } else{
    console.log("3500포트에 돌아감 http://localhost:3500");
  }
})
