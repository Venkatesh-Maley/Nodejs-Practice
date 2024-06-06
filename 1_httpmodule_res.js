//HTTP Module by using response
var http = require('http');

http.createServer((req,res)=>{
    //Functional Arguments
    res.write('Hello World');
    res.end();
    console.log('Server Running...')

}).listen(8080)
