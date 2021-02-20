const http=require('http');
const { hasUncaughtExceptionCaptureCallback } = require('process');
 //create a server

http.createServer((req, res) =>{
//Write a response
    res.write('Hello world');
    res.end();
}).listen(5000, () => console.log('Server is running'));