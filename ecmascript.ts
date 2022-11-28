let a=10;
console.log(a);
function greetPerson(name){
    let greet;
if(name==="chandan"){
    greet="Hello chandan";
}
else{
    greet="Hii";
}
console.log(greet);

}
greetPerson("chanda");

var b=1;
var c=2;
if(b==1){
    var b=20;
    let c=20;
    console.log(b);
    console.log(c);
     
}

console.log(b);
console.log(c);

var b=10;
var b=40;
let d=30;
//let d=49;


//let in for loop
for(let i=0;i<10;i++){
    setTimeout(function(){
        console.log(i);
    },10);
}

//constant keyword
var abc=44;
const abcd=34;
const obj={
    name:"joatmon"
}
console.log(obj.name);
obj.name="chandler";
console.log(obj.name);

//swap of numbers

let x=10;
let y=30;
console.log(x);
console.log(y);
x=x+y;
y=x-y;
x=x-y;
console.log(x);
console.log(y);

//Arrow function
console.log("***************************");

var getRegValue=function(){
    return 10;
}
console.log(getRegValue());

const getArrowValue=(m,n) =>10*m+50;
console.log(getArrowValue(5,50));

var employee={
   id:1,

greet:function(){
   /* var self=this;
    setTimeout(function(){
        console.log(self.id);
        
    },1000);
}*/
setTimeout(() => {console.log(this.id)},1000);
}
};
employee.greet();

//default function parameter
//let getValue=function(value=10,bonous=5){
// let getValue=function(value=10,bonous=value*0.1){
//let percentBonous=0.1;    
//let getValue=function(value=10,bonous=value*percentBonous){
let percentBonous=()=>0.1;    
let getValue=function(value=10,bonous=value*percentBonous()){
 console.log(value+bonous);
    
}
getValue();
getValue(20);
getValue(20,30);
getValue(undefined,30);

//Rest operator
/*let displayColours =function(){
    console.log(message);
    for(let i in arguments){
        console.log(arguments[i]);
        
    }
    
}
let message="List of colors"
displayColours(message,"Red");
displayColours(message,"Red","Blue");
displayColours(message,"Red","Blue","green");*/


let displayColours =function(message,...colors){
    console.log(message);
    console.log(colors);
    console.log(arguments.length);
    
    
    for(let i in colors){
        console.log(colors[i]);
        
    }
    
}
let message="List of colors"

let colorsArray=["Orange","Yellow","Indigo"];
displayColours(message,...colorsArray)
displayColours(message,"Red");
displayColours(message,"Red","Blue");
displayColours(message,"Red","Blue","green");

let firstName="chandler";
let lastName="Bings";
let Person={
    firstName,
    lastName
};
console.log(Person.firstName);
console.log(Person.lastName);

function createPerson(firstName,lastName,age){
    let fullName=firstName+" "+lastName;
    return {
        firstName,
        lastName,
        fullName,
        //isSenior:function(){
        isSenior(){
            return age>60;
        }}
    }
let p=createPerson("Ross","Geller",66);
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullName);
console.log(p.isSenior());

let ln="last name";
let Person1={
    "first name":"chandler",
    [ln]:"Bing"
}
console.log(Person1);

//Destructuring array

//let emp=["chandler","Bing","Male"];
//let[fName, lName, gender]=emp;
//let[fName, lName]=emp;
let emp=["chandler","Bing","Male"];
//let[fName, lName, gender]=emp;
//let[,, gender]=emp;
let[fName, ...elements]=emp;

console.log(fName);
//console.log(lName);
//console.log(gender);
console.log(elements);

//destructuring of objects

let emp1={
    fname:"chandler",
    lname:"Bing",
    gender:"Male"
}
let{fname,lname,gender}=emp1;
console.log(fname);
console.log(lname);
console.log(gender);
let{fname:f,lname:l,gender:g}=emp1;
console.log(f);
console.log(l);
console.log(g);

//String Templets
let user="chandler";
let greet="Welcome "+user+" to es15";
console.log(greet);

//for of loop
let colors=["Red","Blue","Green"];
for(let index in colors)
{
    console.log(colors[index]);
}
for(let color of colors){
    console.log(color);
}
let letters="abcdefghijklmnopqrstuvwxyz";
for(let letter of letters){
    console.log(letter);
}

//class
class Person2{
    greet(){

    }
}
let p1=new Person2();
console.log(typeof Person2);//function
console.log(p1.greet===Person2.prototype.greet);


//class body and methods
class Person3{
    constructor(name){
        this.name=name;
        console.log(this.name);
        
    }
    static staticMethod(){
        console.log("Static method");
        
    }
    greetPerson(){
        console.log("Hello "+this.name);
        
    }
}
let p3=new Person3("chandler");
console.log(Person3.staticMethod());
console.log(p3.greetPerson());



class Person4{
    constructor(name){
        this.name=name;
        console.log(this.name+" Parent constructor");
        
    }
    getId(){
        return 10;
    }
}
class Employee1 extends Person4{
    constructor(name){
        super(name)
        console.log(name+" child constructor");
        
    }
    getId(){
        return 50;
    }
}
let e= new Employee1("chandler");
console.log("Id "+e.getId());


























