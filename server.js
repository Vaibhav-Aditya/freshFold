const http=require('http');
const fs=require('fs');
const PORT=3000;
http.createServer((req,res)=>{
    const {method,url}=req;
    if(url === '/' || url.toLowerCase() === '/home'){
        if(method === 'GET'){
            const data = fs.readFileSync("./assests/home/index.html","utf-8");
            res.write(data);
        }
    }
    else if(url === '/logo.png'){
        if(method === 'GET'){
            const data = fs.readFileSync('./logo.png');
            res.write(data);
        }
    }
    else if(url === '/laundry.png'){
        if(method === 'GET'){
            const data = fs.readFileSync('./laundry.png');
            res.write(data);
        }
    }
    else if(url.toLowerCase() === '/about'){
        if(method === 'GET'){
            const data = fs.readFileSync("./assests/about/index.html","utf-8");
            res.write(data);
        }
    }
    else if(url.toLowerCase() === '/contact'){
        if(method === 'GET'){
            const data = fs.readFileSync("./assests/contact/index.html","utf-8");
            res.write(data);
        }
    }
    else{
        res.writeHead(404);
        const data = fs.readFileSync("./assests/error/index.html","utf-8");
        res.write(data);
    }
    return res.end();
})
.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})