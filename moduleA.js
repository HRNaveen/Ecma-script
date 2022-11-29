"use strict";
// import {a} from "./moduleB"
// console.log(a);
// import {lname} from"./moduleB"
// console.log(lname);
//import{fName,lName} from "./moduleB"
//console.log(fName+" "+lName);
exports.__esModule = true;
var moduleB_1 = require("./moduleB");
console.log(moduleB_1.fName + " " + moduleB_1.lName);
var moduleB_2 = require("./moduleB");
console.log(moduleB_2.obj);
moduleB_2.obj.name = "ross";
console.log(moduleB_2.fn);
console.log(moduleB_2.ln);
console.log(moduleB_2.obj);
//default import
var moduleB_3 = require("./moduleB");
console.log(moduleB_3["default"]);
//importing function and classes
// import {greet} from "./moduleB"
// greet("HelloWorld");
var moduleB_4 = require("./moduleB");
(0, moduleB_4.greet)("Hello World");
var gm = new moduleB_4.greetMessage();
gm.greets();
