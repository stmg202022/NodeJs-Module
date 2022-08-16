// ==============Module wrapper function=============

// (function(exports, require, module, __filename, __dirname){

    // console.log("about all: ", exports, require, module, __filename, __dirname);

    let harry = {
        name: "harry",
        age: 23,
        dev: true
    }

    // ============directory name=============
    console.log("dir name: ", __dirname);

    //================filename============
    console.log("file name: ", __filename);

    module.exports = harry;

// });


