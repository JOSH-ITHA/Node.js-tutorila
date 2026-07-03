const http=require('http');
const fs=require('fs');
const querystring=require('querystring');

http.createServer((req,res)=>{
    fs.readFile('from.html','utf8',(err,data)=>{
        if(err){
            console.log(err);
            res.writeHead(404,{'content-type':'text/plain'});
            return res.end("404 Not found");
        }
        else if(req.url=='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        }
        if(req.url=='/'){
        res.write(data);
        }else if(req.url=='/submit'){
            let userData=[];
            req.on('data',(chunk)=>{
                userData.push(chunk);
            });
            req.on("end",()=>{
                let parseData=Buffer.concat(userData).toString();
                let readableData=querystring.parse(parseData);
                //console.log(readableData);
                let dataFinal=`Name: ${readableData.username},  Email: ${readableData.email} `;
                //console.log(dataFinal);
                fs.writeFileSync('tata.txt',dataFinal);
            })
            console.log(userData);
            res.write("<h1>Form Submitted Successfully</h1>");
        }else{
            res.write("<h1>404 Not Found</h1>");
           
        }
        res.end();
        
});
    
}).listen(3000);