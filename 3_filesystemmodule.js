//File System Module
var http = require('http');
var fs = require('fs'); //fs is a file system

http.createServer((req,res)=>{

    //For Reading a File
    fs.readFile('Node.txt',(err,data)=>{
        res.write(data);
        res.end();
    })
    
    //For Adding content to the Existing File
    //fs.appendFile('Node.txt','Thank you!!',(err,data)=>{
    //    res.write(data);
    //    res.end();
    //})

    //For Overriding Whole Content of a File
    //fs.writeFile('sample.txt','overrided',(err,data)=>{
    //    res.write(data);
    //    res.end();
    //})

    //For informing error
    //fs.unlink('test.txt',(err)=>{
    //    if (err) throw err;
    //    console.log('File Deleted');
    //})

    console.log('Server Running...')
}).listen(8080)