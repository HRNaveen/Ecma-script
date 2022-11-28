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

//sets
let mySet=Object.create(null);
mySet.id=1;
if(mySet.id){
    console.log("id exists");
    
}


//map
let myMap=Object.create(null);
myMap.name="Chandler";
let val=myMap.name;
console.log(val);
myMap[100]="Hello";
console.log(myMap["100"]);
let ob1={};
let ob2={};
myMap[ob1]="Hello";
console.log(myMap[ob1]);
console.log(myMap[ob2]);
console.log(ob1.toString());
console.log(ob2.toString());


//sets
let mySet1=new Set();
mySet1.add("Hello");
mySet1.add(1);
console.log(mySet1.size);
let ob3={};
let ob4={};
mySet1.add(ob3);
mySet1.add(ob4);
console.log(mySet1.size);

let newSet=new Set([1,2,3,4,5,5,5,5]);
console.log(newSet);

let chainSet=new Set().add("Hello").add(5).add("world");
console.log(chainSet);


console.log(newSet.has(1));
console.log(newSet.delete(5));
console.log(newSet.size);

let mySet2=new Set();
let key={};
mySet2.add(key);
console.log(mySet2.size);
key=null;
console.log(mySet2.size);
key=[...mySet2][0];

let myMap1=new Map();
myMap1.set("fname","chandler");
myMap1.set("age",32);
console.log(myMap1.get("fname"));
let obj1={};
let obj2={};
myMap1.set(obj1,10);
myMap1.set(obj2,20);
console.log(myMap1.get(obj1));
console.log(myMap1.size);
console.log(myMap1.has("fname"));
myMap1.delete("fname");
console.log(myMap1.has("fname"));
myMap1.clear();
console.log(myMap1);


//for each loop


let myMap2=new Map([
    ["fname","chandler"],
    ["lname","Bing"]
]);

for(let key of myMap2.keys()){
    console.log(key);
}
for(let value of myMap2.values()){
    console.log(value);   
}


for(let entry of myMap2.entries()){
    console.log(`${entry[0]} --> ${entry[1]}`);
    
}
for(let [key,value]of myMap2.entries()){
    console.log(`${key} ->${value}`);
    
}



var numbers=[2,3,4,5];
numbers.forEach(arrayFunction);
function arrayFunction(element,index,array){
    console.log("arr["+index+"]="+element);
    
};

let myMap3=new Map();
    myMap3.set("fname","chandler"),
    myMap3.set("lname","Bing")


myMap3.forEach(myFunction)
function myFunction(value,key,callingMap){
    console.log(key+" "+value);
    console.log(myMap3===callingMap);
    
}

let mySets=new Set([1,2,3]);
mySets.forEach(setFunction);
function setFunction(value,key,callingSet){
    console.log(key+" "+value);
    console.log(mySets===callingSet);
    
    
}


//WeakMap
let myMap4=new WeakMap();
let obje={};
myMap4.set(obje,"HelloWorld");
console.log(myMap4.get(obje));
//obje=null;



//symbol

let s=Symbol();
console.log(typeof s);

let s1=Symbol("First Symbol");
console.log(s1.toString);

let s2=Symbol("test");
let s3=Symbol("test");
console.log(s2===s3);                     //false

let s4=Symbol.for("RegSymbol");
let s5=Symbol.for("RegSymbol");
console.log(s4===s5);                      //true

console.log(Symbol.keyFor(s4));

let fullName=Symbol();
let Person5={
    [fullName]:"chandler"
};
console.log(Object.getOwnPropertyNames(Person5));
console.log(Object.getOwnPropertySymbols(Person5));


//Symbol iterator

let str="Hello";
let arr=[1,2,3];
let num=5;
let objects={name:"chandler"};
console.log("For String -"+typeof str[Symbol.iterator]);
console.log("For Array -"+typeof arr[Symbol.iterator]);
console.log("For Number -"+typeof num[Symbol.iterator]);
console.log("For Object -"+typeof objects[Symbol.iterator]);


//iterables and iterators

let iterable=[1,2,3];
function createIterator(array){
    let count=0;
    return{
        next:function(){
            return count<array.length ? {value : array[count++],Done : false } :
            {value : undefined , Done : true};

        }
    }
}
let myIterator=createIterator(iterable);
console.log(myIterator);
console.log(myIterator);
console.log(myIterator);
console.log(myIterator);


//iterating objects

let persons={
    fname:"chandler",
    lname:"bing"
};
// for(let p of persons){
//     console.log(p);
    
// }


persons[Symbol.iterator]=function(){
    let properties=Object.keys(persons);
    let count=0;
    let isDone=false;
    let next=()=>{
        if(count>properties.length){
            isDone=true;
        }
    
    return {done:isDone,value:this[properties[count++]]};
}
return{next};
}
for(let p of persons){
    console.log(p);
    
}


//generators

function *creategenerator(){
    yield 1;
    console.log("After first yeild");
    yield 2;

}
let mygen=creategenerator();
console.log(mygen);

let Person6={
    fname:"chandler",
    lname:"bing"
};
Person6[Symbol.iterator]=function*(){
    let properties=Object.keys(Person6);
    for(let t of properties){
        yield this[t];
    }
};
for(let p of Person6){
    console.log(p);
    
}
































console.log("-------------------------------");



































