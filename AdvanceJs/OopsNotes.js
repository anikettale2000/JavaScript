/*
*Object =>
collection of properties and methods
toLowerCase
why use OOP
parts of OOP */

// * Object literal => nothing but how we declare an object

const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);     // * this keyword refers to the current scope or content of function or object
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


// * Constructor function => constructor function is a function that is used to create and initialize objects.using new keyword we can create a new instance.

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}
// * using new keyword we can create a new instance of class or a object

const userOne = new User("hitesh", 12, true)             // creating a new instance of user
const userTwo = new User("ChaiAurCode", 11, false)        // another instance
console.log(userOne.constructor);
//console.log(userTwo)

/* instanceof => It checks if an object is an instance of a particular class or constructor function.
instanceof operator is used to test whether an object's prototype chain includes a particular constructor's prototype */

// Constructor function
function Animal(name) {
  this.name = name;
}

// Creating an instance
const myDog = new Animal('Buddy');

// Checking instance using instanceof
if (myDog instanceof Animal) {
  console.log('myDog is an instance of Animal');
} else {
  console.log('myDog is not an instance of Animal');
}

/*
> Prototypes
> Classes
> Instances (new, this)
*/


/*
* 4 pillars =>

*1. Abstraction:
Abstraction in JavaScript involves creating abstract classes or interfaces that define the expected behavior,
while the implementation details are left to the concrete classes. This helps in simplifying complex systems.
In Simple Terms: Abstraction is like using a TV remote without knowing how it works internally.
You just press the buttons without worrying about the details inside.

class Remote {
  clickButton() {
    console.log("TV Remote clicked");
  }
}

const myRemote = new Remote();
myRemote.clickButton();

*2. Encapsulation:
Encapsulation in JavaScript involves bundling data and methods that operate on the data within a single object. 
It can be achieved through closures and private variables.
n Simple Terms: Encapsulation is like packaging something in a box. You don't need to know how it's packed; you just interact with the box.

Example:
function createCounter() {
  let count = 0;

  return {
    increment: function() {
      count++;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // Outputs: 1

*3. Inheritance:
In JavaScript, inheritance is achieved through prototype chaining. Objects can inherit properties and methods from other objects,
forming a prototype chain.
In Simple Terms: Inheritance is like a family tree where children inherit traits from their parents.
In programming, a new thing can inherit properties from an existing thing.

Example:
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

const myDog = new Dog();
myDog.speak(); // Outputs: Animal speaks
myDog.bark();  // Outputs: Dog barks

4. Polymorphism:
Polymorphism in JavaScript is achieved through the ability of objects to share the same interface (method names), allowing them to be used interchangeably.
In Simple Terms: Polymorphism is like using the same remote for different devices. One button can do different things depending on the context.
Example:
class Shape {
  draw() {
    console.log("Drawing a shape");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing a circle");
  }
}

const shape = new Circle();
shape.draw(); // Outputs: Drawing a circle

*/