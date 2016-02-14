var http = require("http");
var port = process.env.PORT || 3000;
var app = http.createServer(function(req,res){
  console.log("hello");
res.end("hello");
})
app.listen(port);
