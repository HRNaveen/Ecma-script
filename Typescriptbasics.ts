import { getNodeMajorVersion } from "typescript";

let hello:String="World";
hello="foo";
//hello=1233; 
 

//specifing return datatype and function that accepts parameter
const getFullName=(name:String,surname:String ):String=>{
    return name+" "+surname;
};
console.log(getFullName("chandler","Bing"));


//creating objects

// const user:{name:String;age:number} ={
//     "name":"chandler",
//     "age":46,
// };
// const user1:{name:String;age:number}={
//     "name":"jack",
// };

//interface
interface UserInterface{
    name:String;
    age?:number;          //?--->used when age is not manditory
    getMessage():String;
}
const user3:UserInterface={
    name:"Monster",
    age:58,
    getMessage(){
        return "Hello "+this.name;
        }

}
const user4:UserInterface={
    name:"Monk",
    getMessage(){
        return "Hello "+this.name;
        }
}
console.log(user3.getMessage());

//use of union or pipe

let pageName:String | number="1";
let errorMessage:String | null=null;

type ID=String;
type popularTag=String;
type MaybePopularTag=popularTag | null;

const popularTags:popularTag[]=["dragon","coffee"];
const dragonTag:MaybePopularTag="dragon";
interface UsersInterface{
   // id=ID;
    name:String;
    surName:String;
}
let users:UsersInterface|null=null;
let someprop:String|null|number|undefined|String[]|object;


//void
const doSomething=():void=>{
    console.log("dosomething");
    
};
let foo:void =undefined;





/*
//Any
let foo1:any="foo";       //any will ignore anything regards foo1
//console.log(foo1.bar());

 //Never
 const doSomething1=():never=>{     //never is something that never happen,the function that returns never that never ends
    throw "never";
    console.log("dosomething1");
    
};


//Unknown
let vAny:any=10;
let vUnknown :unknown=10;
let s1:String=vAny;
//let s2:String=vUnknown; //we cant assign unknown directly in other type
//console.log(vAny.foo1());
//console.log(vUnknown.foo());
let s3:String=vUnknown as String;
let pageNumber:String="1"
//let numericPageNumber:number =pageNumber as number;

let numericPageNumber:number =(pageNumber as unknown)as number;  //String cannot be converted to number


//working with DOM
//Element is the highest class in hierarhy
const someElement=document.querySelector(".foo")as HTMLInputElement;
console.log("someElement",someElement.value);
 someElement.addEventListener("blur",(event)=>{
    const target =event.target as HTMLInputElement; 
    console.log("event",target.value);
 })

*/





 //classes
 /*class Employe{
   private firstName:String
   private lastName:String
   readonly unchangableName:String;
    constructor(firstName:String,lastName:String){
        this.firstName=firstName;
        this.lastName=lastName;
        this.unchangableName=firstName;
    }
    // changeUnchangableName():void{
    //     this.unchangableName="foo";     //if you mark a variable readonly then it cant be change
    // }
    getFullName():String{
        return this.firstName+" "+this.lastName;
    }
 }
const employe=new Employe("bheem","arjun");
console.log(employe.getFullName());*/


//interface 
interface EmployeInterface{
    getFullName():String;
}
class Employe implements EmployeInterface{
    private firstName:String
    private lastName:String
    readonly unchangableName:String;
    static readonly maxage=50;


     constructor(firstName:String,lastName:String){
         this.firstName=firstName;
         this.lastName=lastName;
         this.unchangableName=firstName;
     }
     // changeUnchangableName():void{
     //     this.unchangableName="foo";     //if you mark a variable readonly then it cant be change
     // }
    getFullName():String{
        return this.firstName+" "+this.lastName;
    }
  }

class Employe1 extends Employe{
    private editor:String;

    setEditor(editor:String):void{
        this.editor=editor;
    }
    getEditor():String{
        return this.editor;
    }
}



 const employe=new Employe("bheem","arjun");
 console.log(employe.getFullName());
 //console.log(employe.maxage);
 console.log(Employe.maxage);
 
 //inheritance in typeScript
const employe1=new Employe1("foo","bar");
console.log(employe1.getFullName());
employe1.setEditor("abcde");
console.log(employe1.getEditor());

//Generics and generics for interface
const addId=<T extends object >(obj:T)=>{
    const id=Math.random().toString(16);
    return{
        ...obj,
        id,
    };
    };

interface UInterface<T,V>{
    name:String;
    data :T;
    meta:V;
}    
const u:UInterface<{meta:String},string>={
    name:"jack",
    data:{
        meta:"foo",
    },
    meta:"bar",
};
const u2:UInterface<string[],string>={
    name:"john",
    data:["foo","bar","baz"],
    meta:"foo"
    
};
const result1=addId<UInterface<{meta:String},string>>(u);
const result=addId<UInterface<string[],string>>(u2);
console.log("result",result);
console.log("result",result1);


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


enum Status{
    NotStarted,
    InProgress,
    Done,
    IsDone
}
console.log(Status.InProgress);
console.log(Status.IsDone);

let notStartedStatus:Status=Status.NotStarted;
notStartedStatus=Status.Done;


interface Task{
    id:String;
    status:Status;
}


