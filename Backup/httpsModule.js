const http=require('http');
// const server =http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/plain'});

//     res.write('Hello world!ABC');
//     res.end();
    

//});
// const server =http.createServer((req,res)=>{
//     if(req.url=='/'){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write('<h1>Welcome to the Home Page</h1>');
//         res.end();
//     }else if(req.url=='/about'){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write('<h1>About Us</h1><p>This is the about page.</p>');
//         res.end();
//     }else{
//         res.writeHead(404,{'Content-Type':'text/html'});
//         res.write('<h1>404 Not Found</h1><p>The page you are looking</p>');
//         res.end();
//     }

// });
const server =http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(JSON.stringify({name:"Joshitha",age:18}));
        res.end();
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write('<h1>404 Not Found</h1><p>The page you are looking</p>');
        res.end();
    }

});



server.listen(3000,()=>{
    console.log('server is listening on port http://localhost:3000/');
});