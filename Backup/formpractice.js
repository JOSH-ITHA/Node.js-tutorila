const http=require('http');
const fs=require('fs');
http.createServer((req,res)=>{
    fs.readFile('from.html','utf8',(err,data)=>{
        if(err){
            console.log(err);
            res.writeHead(404,{'content-type':'text/plain'});
            return res.end("404 Not found");
        }
        else if(req.url=='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        }else if(req.url=='/submit'){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("<h1>Form Submitted Succesfully</h1>");
        }else{
            res.writeHead(404,{'content-type':'text/plain'});
            res.end("404 Not found");
        }
        res.end();
        
    });
    
}).listen(3000);