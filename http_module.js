const http = require("http");
const fs = require("fs");
const port = process.env.port || 3000;



const server = http.createServer((req, res) =>{

    //hit to the server to see req
    // console.log(req); 
    console.log(req.url);

    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    res.end("<h1>This is code with Harry</h1><p>hey this is way to rock the world!</p>");
});


server.listen(port, ()=> {
    console.log(`Server is listening on port ${port}`);
});