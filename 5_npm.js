//Installing Upper case Module using NPM

var http = require('http');
var uc = require('upper-case');

http.createServer((req,res)=>{
    res.write(uc.upperCase('Hello World!'));
    res.end();
}).listen(8080)

// Installing Upper Case Module using NPM (CHATGPT)
//const http = require('http');
//const uc = require('upper-case');

//http.createServer((req, res) => {
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.write(uc('Hello World!')); // Using uc directly, as it's already a function
//    res.end();
//}).listen(8080);
