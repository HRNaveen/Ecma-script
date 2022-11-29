"use strict";
exports.__esModule = true;
exports.greetMessage = exports.greet = exports.obj = exports.ln = exports.fn = exports.lName = exports.fName = void 0;
// export let a="bing";
// export let lname="chandler";
var fName = "bing";
exports.fName = fName;
var lName = "chandler";
exports.lName = lName;
var fn = "chandler";
exports.fn = fn;
var ln = "Bing";
exports.ln = ln;
var obj = {
    name: "joey"
};
exports.obj = obj;
console.log("module loaded");
//Default exports
var fullName = "chandler";
exports["default"] = fullName;
//exporting functions and classes
function greet(message) {
    console.log(message);
}
exports.greet = greet;
var greetMessage = /** @class */ (function () {
    function greetMessage() {
        console.log("constructor");
    }
    greetMessage.prototype.greets = function () {
        console.log("greet function");
    };
    return greetMessage;
}());
exports.greetMessage = greetMessage;
;
