// (parameter) => {}   ---> syntax for arrows function

// we write the arrow function in the from of expression or we store it inside a variable
// arrow function is a coincise way to write an function
// when we use curly bracees we must use the "Return" keyword i.e implicit declaration

let hello = () => "hello Aniket";
console.log(hello());

let add = (num1,num2) => {
    return num1 + num2;
}
console.log(add(2,3));

// we can declare arrow function explicitly i.e in a single line without using curly bracess we use () instead of {}
// while using () we dont need to use "Return" keyword

let sum = (num1,num2) => (num1 + num2);
console.log(sum(5,5));

// OR

let sum2 = (num1,num2) => num1 + num2 ;
console.log(sum2(5,5));

// object declaration in Arrow Function

const object =(obj1) => ({name : "Aniket"});
console.log(object());

// Arrow Function Without Parentheses:

hello = val => "Hello " + val;
console.log(hello("ANiket"))



// this keyword inside the normal function return object in node envrionment. In regular functions the this keyword represented the object that called the function,
// this keyword inside the normal function return "window object" in console of browser 
//With arrow functions the this keyword always represents the object that defined the arrow function.

function regularFunction() {
    console.log(this);
  }
  
  regularFunction(); // 'this' refers to the global object (e.g., window in a browser environment)
  



