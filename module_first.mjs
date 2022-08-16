
//=========================importing syntax for common js module====================

// const simple2 = require("./module_second");

// simple2();



//========================importing syntax for ES6 module=========================

import {simple, simple2} from "./module_second.mjs"; // we should add .mjs extention to 
// import {simple2}  from "./module_second.mjs";        //for exact importing
// import simple4 from "./module_second.mjs";           // default
import * as simp from "./module_second.mjs";            // Importing all function


simple(); 
simple2();
// simple4();
console.log(simp.simple());

// console.log(simp.defaultSimple()); //not work for default funcfion