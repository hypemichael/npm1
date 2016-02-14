var http = require("http");

http.createServer(function(req,res){
  console.log("hello");
res.end("hello");
}).listen(5000);
