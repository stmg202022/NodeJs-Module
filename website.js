const http = require("http");
const fs = require("fs");

const port = process.env.port || 4000;


const server = http.createServer((req, res) =>{

    //hit to the server to see req
    // console.log(req); 
    // console.log(req.url);

    if(req.url === "/"){

        res.statusCode = 200;
        const data = fs.readFileSync("index.html");
        res.end(data.toString());

    }else if(req.url === "/about"){

        res.statusCode = 200;
        const data = fs.readFileSync("./filelist/about.html");
        res.end(data.toString());

    }else if(req.url === "/login"){

        res.statusCode = 200;
        const data = fs.readFileSync("./filelist/login.html");
        res.end(data.toString());

    }else{

        res.statusCode = 404;
        const data = fs.readFileSync("./filelist/404.html");
        res.end(data.toString());
    }

});

server.listen(port, ()=> {
    console.log(`Server is listening on port ${port}`);
}); 