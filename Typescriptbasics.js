"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var hello = "World";
hello = "foo";
//hello=1233; 
//specifing return datatype and function that accepts parameter
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("chandler", "Bing"));
var user3 = {
    name: "Monster",
    age: 58,
    getMessage: function () {
        return "Hello " + this.name;
    }
};
var user4 = {
    name: "Monk",
    getMessage: function () {
        return "Hello " + this.name;
    }
};
console.log(user3.getMessage());
//use of union or pipe
var pageName = "1";
var errorMessage = null;
var popularTags = ["dragon", "coffee"];
var dragonTag = "dragon";
var users = null;
var someprop;
//void
var doSomething = function () {
    console.log("dosomething");
};
var foo = undefined;
var Employe = /** @class */ (function () {
    function Employe(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }
    // changeUnchangableName():void{
    //     this.unchangableName="foo";     //if you mark a variable readonly then it cant be change
    // }
    Employe.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Employe.maxage = 50;
    return Employe;
}());
var Employe1 = /** @class */ (function (_super) {
    __extends(Employe1, _super);
    function Employe1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employe1.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Employe1.prototype.getEditor = function () {
        return this.editor;
    };
    return Employe1;
}(Employe));
var employe = new Employe("bheem", "arjun");
console.log(employe.getFullName());
//console.log(employe.maxage);
console.log(Employe.maxage);
//inheritance in typeScript
var employe1 = new Employe1("foo", "bar");
console.log(employe1.getFullName());
employe1.setEditor("abcde");
console.log(employe1.getEditor());
//Generics and generics for interface
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var u = {
    name: "jack",
    data: {
        meta: "foo"
    },
    meta: "bar"
};
var u2 = {
    name: "john",
    data: ["foo", "bar", "baz"],
    meta: "foo"
};
var result1 = addId(u);
var result = addId(u2);
console.log("result", result);
console.log("result", result1);
// const searchStr="foo"; 
// const hasSearchedString=any<String>((el:string=>emp1.contains(searchStr),[
//     "foooo",
//     "bar",
//     "baz"
// ]);
//Enums in typeScript
// const statuses={
//     notStarted:0,
//     inProgress:1,
//     done:2,
// };
// console.log(statuses.inProgress);
var Status;
(function (Status) {
    Status[Status["NotStarted"] = 0] = "NotStarted";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Done"] = 2] = "Done";
    Status[Status["IsDone"] = 3] = "IsDone";
})(Status || (Status = {}));
console.log(Status.InProgress);
console.log(Status.IsDone);
