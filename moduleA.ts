// import {a} from "./moduleB"
// console.log(a);
// import {lname} from"./moduleB"
// console.log(lname);
//import{fName,lName} from "./moduleB"
//console.log(fName+" "+lName);

import{fName as f,lName as l} from "./moduleB"
console.log(f+" "+l);
import {fn,ln,obj } from "./moduleB"
console.log(obj);
obj.name="ross";
console.log(fn);
console.log(ln);
console.log(obj);

//default import
import {default as d} from "./moduleB"
console.log(d);

//importing function and classes

// import {greet} from "./moduleB"
// greet("HelloWorld");

import {greet,greetMessage} from "./moduleB"
greet("Hello World");
let gm=new greetMessage();
gm.greets();





