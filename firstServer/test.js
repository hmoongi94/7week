const http = require('http');

http.createServer(function(request, response){
  let writeHeadObject = {
    'content - Type': 'text/html'
  }

  response.writeHead(200, writeHeadObject);
  response.end("hello");


}).listen(8080)

// 서버 가동 후 끄는 법 -> ctrl + c