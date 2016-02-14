var http = require("http");

http.createSever(function(req,res){
  console.log("hello");
res.end("hello");
})
http.listen(5000);
