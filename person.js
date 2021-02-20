const path=require('path');
const fs=require('fs');
const os=require('os');
//console.log(path.basename(__filename));
//console.log(path.dirname(__filename));
//file extension
//console.log(path.extname(__filename));
//console.log(path.parse(__filename));

//The file system module
//create a folder
//oin(__dirname, '/test'), {}, function(err){
//    if(err) throw err;
//    console.log('Folder created...');
//});

//creating a file and writing to it
//fs.writeFile(path.join(__dirname, '/test','hello.txt'), 'Hello World', function(err){
//    if(err) throw err;
//    console.log('File created and written to...');
//});

//fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', function(err,data){
//    if (err) throw err;
//    console.log(data);
//})
//Os Module
//Platform
//console.log(os.platform());
//console.log(os.arch());
//console.log(os.cpus());
//console.log(os.freemem());
//console.log(os.totalmem());

//URL module
const url= require('url');
const myUrl= new URL('http://mywebsite.com/hello.html?id=100&status=active');
//serialized url
console.log(myUrl.href);
console.log(myUrl.toString());
console.log(myUrl.host, myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.search);