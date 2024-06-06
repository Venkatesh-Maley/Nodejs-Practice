//HTTP Module by using request URL
var http = require('http');

http.createServer((req,res)=>{
    res.write(req.url);
    res.end();
    console.log('Server Running...')
}).listen(8080)
 