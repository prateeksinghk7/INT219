 
 
 //always add script tag at the end of the program because it takes a long time to render so put it at the end of the program...

 
const z=20; // we have to give value to the const variable at the time of initialization i.e. const z=10;  not const z; z=10; this is wrong
var p=2; // main difference between var and let is of scope i.e. var variable are like global variables and let variable are like local variables...

// we have 5 main datatypes i.e. Number, String, Boolean, Undefined and Null 
let a=10;
let b="this is ok";
let c=true;
let d=undefined;
let e=null;  // see google for the difference b/w null and undefined...

 let x=10;
 let y='20';

 console.log(x==y);
console.log(x===y);
console.log(x+y);
console.log(x-y);
console.log(x/y);
console.log(typeof(x)) ;

//Some String properties in javascript...
let myVar="Teaching int219";
console.log(myVar.length);
console.log(myVar.charAt(0));
console.log(myVar.charAt(10));
console.log(myVar.indexOf("in"));   //it will show the first occurrence of the given string
console.log(myVar.slice(0,10));     //here in slicing both values are considered i.e. we take 0 as well as 10th place value of the string
console.log(myVar.toLocaleLowerCase());
console.log(myVar.toUpperCase());
console.log(myVar.includes("219")); // it will give the value in boolean i.e. if value is present then true and if not then false

//some Math functions in javascript.....
let numVar = 51;
console.log(Number.isInteger(numVar));
console.log(Math.trunc(Math.PI));
console.log(Math.round(Math.PI));
console.log(Math.ceil(Math.PI));
console.log(Math.floor(Math.PI));

console.log(Math.random()*10); // IMPORTANT this will give me value from 0 to 9 (both included) but the value will be in decimal so we wil use floor value to make it integer
console.log(Math.floor(Math.random()*10)); // so here we used floor value to the random generated number so that it will be in whole number.


// question: write code to print random value from a given string  
console.log(myVar.charAt(Math.floor((Math.random()*myVar.length))));   //here myVar.length gives us the parameter for random function the charAt gives us the value in the string of that index...... 

