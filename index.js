//Creating a server

//import the core modules
const http=require("http");
const path=require('path');
const fs=require('fs');

const server=http.createServer((req,res) =>{
//    if(req.url === '/'){
//        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content)=>{
//            if(err) throw err;
//            res.writeHead(200, {'Content-type': 'text/html'})
//            res.end(content);
//        });
//    }
//
//    if(req.url === '/about'){
//        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content)=>{
//            if(err) throw err;
//            res.writeHead(200, {'Content-type': 'text/html'})
//            res.end(content);
//        });
//    }
//
 //   if(req.url === '/api/users'){
   //     const users=[
 //           { name: 'Bob Smith', age: 40 },
  //          { name: 'Nick Tarus', age: 57}
  //      ];
//
  //          res.writeHead(200, {'Content-type': 'application/json'})
    //        res.end(JSON.stringify(users));
//}

//Build a file path

let filepath= path.join(__dirname, 'public', 
  req.url === '/' ? 'index.html' : req.url);
//get extension of the file

let extname=path.extname(filepath);
//initial content type
let contentType='text/html';

//check ext and set content type
    switch(extname){
        case '.js':
            contentType='text/javascript';
            break;
        case '.css':
            contentType='text/css';
            break;
        case '.json':
            contentType='application/json';
            break;
        case '.png':
            contentType='image/png';
            break;
        case '.jpg':
            contentType='image/jpg';
            break;
    }
    if (contentType == "text/html" && extname == "") filepath += ".html";

    //read file
    fs.readFile(filepath, (err, content) =>{
        if(err){
            if(err.code == 'ENOENT'){
                //page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), 
                (err, content) => {
                    res.writeHead(200, { 'Content-Type': contentType });
                    res.end(content, 'utf8');
                })
            }else{
                //server error
                res.writeHead(500);
                res.end(`Server error ${err.code}`);

            }
        }else{
            //success
            res.writeHead(200, { 'Content-type': contentType });
            res.end(content, 'utf8');
        }
    });
});

const port=process.env.PORT || 8000;


server.listen(port, () => console.log(`Server running on Port ${port}`));