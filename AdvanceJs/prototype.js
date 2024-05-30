/*
JavaScript is a prototype-based language 

* Prototype =>  prototype is an object from which other objects inherit properties and methods.
> Every JavaScript object has a prototype, and it acts as a blueprint for creating that object.
> share properties and methods among multiple objects.
> uses object inheristance to access the further propss.
> inheritance is achieved through the prototype chain.
*Each object in JavaScript has an associated prototype object,
*and when you access a property or method on an object,
*JavaScript looks for that property or method in the object itself. 
*If it doesn't find it, it looks in the object's prototype, 
*and this process continues up the prototype chain until the property or method is found or 
*the end of the chain is reached or null value is found.

*/


function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

// function is also act as a object


function createUser(username, score){
    this.username = username
    this.score = score
}

// we can create a Prototype for a specific object using "__Proto__" or using ".prototype"

createUser.prototype.increment = function(){      
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()


// You can define the prototype explicitly using the prototype property or implicitly using constructor functions.

// Constructor function for creating a Person object
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Adding a method to the prototype of Person
  Person.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  };
  
  // Creating instances of Person
  var person1 = new Person("John", 25);
  var person2 = new Person("Jane", 30);
  
  // Calling the sayHello method on instances
  person1.sayHello(); // Output: Hello, my name is John and I am 25 years old.
  person2.sayHello(); // Output: Hello, my name is Jane and I am 30 years old.


/*
* About new keyword =>
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. 
If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), 
the newly created object is returned.

*/


// Prototype //

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){                // directly adding an prototype to the "Global Object" so bydefault every object like array,string,etc will have that prototype method
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){            // here we are additing an protype to the array only, so it is only access by arrays itself
    console.log(`Hitesh says hello`);
}

heroPower.hitesh()
myHeros.hitesh()               // here we can see the hitesh() method access by array as we set to the Global object
myHeros.heyHitesh()            // assing heyHitesh() to array only
heroPower.heyHitesh()          // assing heyHitesh() to array only so heroPower cant access the heyhitesh() 

// prototype is the behind the Scene of inheritance

const User = {
    name: "chai", 
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport                   // old syntax used for prototype inheristance
}

Teacher.__proto__ = User

// *modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){                  // here creating a prototype named as truelength().
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()