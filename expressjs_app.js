const express = require('express');
const fs = require("fs");
const app = express()
const port = 8000

app.get('/', (req, res) => {
    const data = fs.readFileSync("index.html");
    res.send(data.toString());
})

app.get('/about', (req, res) => {
    const data = fs.readFileSync("./filelist/about.html");
    res.send(data.toString());
})

app.get('/login', (req, res) => {
    const data = fs.readFileSync("./filelist/login.html");
    res.send(data.toString());
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})