const http = require("http");

const server = http.createServer(function(request,response){
  // console.log(request)
  // console.log(response)
  // console.log(typeof(response))

  console.log(request.url)
  if(request.url === "/"){
    let doc = `<html><head></head><body><h1>hello world </h1><a href ="http://localhost:1234/sub">go serve server</a></body></html>`

    response.writeHead(200, "utf-8", {"Content-Type":"text/html"})
    response.end(doc)
  }
  if(request.url === "/sub"){
    let doc2 = `<html><head></head><body><h1>bye world</h1><a href = "http://localhost:1234/">go main server</a></body></html>`
    response.writeHead(200, "utf-8", {"Content-Type":"text/html"})
    response.end(doc2)
  }
});

server.listen(1234)
