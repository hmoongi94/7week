const http = require("http");

const server = http.createServer(function(request,response){
  // console.log(request)
  // console.log(response)
  // console.log(typeof(response))

  console.log(request.url)
  if(request.url === "/"){
    let doc = `<html><head><body><h1>hello world 하이월드</h1><a href ="https://localhost:1234/sub">서브로 이동하기</a></body></head></html>`

    response.writeHead(200, "utf-8", {"Content-Type":"text/html"})
    response.end(doc)
  }
  if(request.url === "/sub"){
    let doc2 = `<html><head><body><h1>bye world 바이월드</h1><a href = "https://localhost:1234/">메인서버로 이동하기</a></body></head></html>`
    response.writeHead(200, "utf-8", {"Content-Type":"text/html"})
    response.end(doc2)
  }
});

server.listen(1234)
