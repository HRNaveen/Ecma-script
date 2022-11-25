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
displayColours(message,"Red");
displayColours(message,"Red","Blue");
displayColours(message,"Red","Blue","green")








