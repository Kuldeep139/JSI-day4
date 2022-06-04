// what is temporal dead zone?
// the period of time during which the let and const declarations cannot be accessed.
// in case of attempting to access a variable, JS will throw an reference error.
// eg:

// console.log(bestCar);//trying to access before initialization.

let bestCar = "Lamborghini"
console.log(bestCar)

// What is the for-in loop in JavaScript? Give its syntax.
// allows us to iterate over property keys of an object.
// allows us to iterate over keys of object.

// Syntax:
// for (key in object) {
//     // code block to be executed
//   }
// eg:
const person = {
  fname:"Kuldeep", 
  lname:"Rathod", 
  age:23
};

for(let key in person){
  console.log(person[key]);
}
// In the above program, the for...in loop is used to iterate over the person object and print all its properties.


// Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript.

//local scope:
//  In this, variable can only be access within a given scope but can still be accessible for the 
// other scope which are being nested within that parent scope.

//  block Scope:
//  a block scope is a type of scope if a variable is define it can only be acesss that variable within that scope only.

//  functional scope:
//  A function scoped variable means that the variable defined within a function will not accessible 
// from outside the function.


// What is difference between null and undefined and where to use what?
//   a special value that represents an empty or unknown value.
//   null can also be written as "",''
// let null = null;
// console.log(null);// op null

//  undefine is when a variable is defined but not initialized or we have assign value to a variable then we get undefine
// var value;
// console.log(value); //undefine


// what is Symbol?
// Symbol is a primitive data type of JavaScript, along with string, number, boolean, null and undefined.
//  Once you create a symbol, its value is kept private and for internal use.
//  it is alwaye unique
// const mySymbol = Symbol()// to create symbol


// Write code to explain map and filter in arrays.
//  The map() method is used for creating a new array from an existing one, applying a function to each one of
//  the elements of the first array.


let array = [1,2,3,4,5]
let op = array.map(x => x*2);
console.log(op);//multiply all element by 2


//  The filter() method takes each element in an array and it applies a conditional statement against it. 
//  If this conditional returns true, the element gets pushed to the output array. If the condition returns false,
//   the element does not get pushed to the output array.
let opp = array.filter(x => x>3);
console.log(opp);


// Write a code to create two objects with 2 properties each, one will be string and other will be an array. 
// Create a function to check if all the elements of the arrays in both the objects are same.

let boy = {
  fname: "Kuldeep",
  id:[1,2,3,4]
}
let person2 = {
  sname: "Rathod",
  id2: [1,2,3,4]
}

function check() {
  arr1 = person.id
  arr2 = person2.id2
  if(arr1.length===arr2.length){
  let a = 0;
  for(i=0; i<person.id.length; i++){
      for(j=0; j<person.id.length; j++){
          if(arr1[i]===arr2[j]){
              a++;
          }
      }

  }
if(arr1.length===a){
  console.log("same")
}else{
  console.log("different")
}
}
else{
  console.log("different")
}
}

check();


// Please explain Self Invoking Function and its code.
// A self-invoking expression is invoked (started) automatically, without being called.

// Function expressions will execute automatically if the expression is followed by ().

(function () {
  let x = "selfinvoking function";  
  console.log(x)
})();