//====================common js module==============

// function simple(){
//     console.log("Simple is complex.");
// }

// module.exports = simple;



//==================ES6 module=======================

// We should have to make .mjs extentions to the file to create ES6 module
// We should:
//          "type": "module",
//                          on package.json......

// Can import and export 2 or mare than two functiion in thid ES6 module

//Can create default function on it

export function simple(){
    console.log("Simple is Complex.");
    return 45;
}

export function simple2(){
    console.log("Simple2 is More complex.");
}

export default function defaultSimple(){
    console.log("Default Simple.");
    return 200;
}

