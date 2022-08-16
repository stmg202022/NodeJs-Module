const path = require("path");


//===========basename=========
const filename = path.basename(__filename);
console.log(filename);

//=========dirname===========
const dirname = path.dirname(__dirname);
console.log(dirname);

// ==============file extension name =======
const extname = path.extname(__filename);
console.log(extname);

