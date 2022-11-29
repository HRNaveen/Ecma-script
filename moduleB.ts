// export let a="bing";
// export let lname="chandler";
let fName="bing";
let lName="chandler";
export{fName,lName};

let fn="chandler";
let ln="Bing";
let obj={
    name:"joey"
};
console.log("module loaded");
export{ fn,ln,obj};

//Default exports

let fullName="chandler";
export default fullName;

//exporting functions and classes

export function greet(message){
    console.log(message);
    
}

export class greetMessage{
    constructor(){
        console.log("constructor");
        
    }
    greets(){
        console.log("greet function");
        
    }
};

