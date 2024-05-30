//DEC;LARING AN OBJECT

// let objectName ={object key and value}

// OBJECT LITERALS 

const myInfo = {Name : "Aniket",
Age : 23,
Class : "MCA -2",
Contact : 7410579608};

console.log(myInfo["Age"]);
console.log(myInfo.Age);            // Accesing object properties

myInfo.Age=21;                      // used to change the value of object attribute
console.log(myInfo.Age); 

Object.freeze(myInfo);              // once we freez the js object we cant change the attributes value inside it
myInfo.Age=34;
console.log(myInfo["Age"]);

const demo = {"F Name" : "Aniket Tale"}  // we cant access the object element "F Name" using object.method so must use second method to access the object i.e

console.log(demo["F Name"]);
// console.log(demo.FName);                // returns undefine so it not suitable in also cases

const symbol = Symbol("key1")              // creating symbol

const myInfo = {Name : "Aniket",
Age : 23,
Class : "MCA -2",
Contact : 7410579608,
[symbol] : "mykey1"};                      // used '[symbol name]' while calling symbol inside an object otherwise it return symbol type as a string

console.log( myInfo[symbol]);                //calling symbol from object
console.log(myInfo);

myInfo.greet = function(){                  // creating a function along with object
    console.log("hello !!!")
}
console.log(myInfo.greet());
myInfo.greet();                             // calling a function along with object
console.log("hello !!!")

myInfo.greet2 = function(){
    console.log(`hello , ${this.Name}`);
}
myInfo.greet2();                            // calling an function along with object
console.log(myInfo.greet2());


const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      console.log(`${this.firstName} ${this.lastName}`);          //creating function inside an object
    }
  }
  
  // This will return "John Doe":
  person.fullName();  