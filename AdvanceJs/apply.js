/*
* The apply() => these method is similar to the call() method

* The difference is:
The call() method takes arguments separately. (name,city,town)
The apply() method takes arguments as an array. ([name,city,town])

*Syntax == functionName.apply(thisArg, [argsArray]);

*/


const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));  // here args as a Array

//==============================================================================================================

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.apply(this ,[username]);              // *The apply() method we have to pass args. as in the form of Arrays:
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);