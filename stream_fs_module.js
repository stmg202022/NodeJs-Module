const fs = require("fs");

const readStream = fs.createReadStream("./filelist/readStreamFile.txt", {encoding: "utf8" });
const writeStream = fs.createWriteStream("./filelist/writeStreamFile.txt");

// readStream.on("data", (chunk) =>{

//     console.log("=====NEW CHUNK=======");
//     // console.log(chunk.toString());

//     console.log(chunk);

//     writeStream.write("\n NEW CHUNK \n");
//     writeStream.write(chunk);
// })

//====================pipe================

readStream.pipe(writeStream);

