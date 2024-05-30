
/*
* Call() => is used to access the prop of one objects to another aobject
> With call(), an object can use a method belonging to another object.

*Syntax == functionName.call(thisArg, arg1, arg2, ...);

*/

const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "Mary Doe"
 console.log(person.fullName.call(person2));
  
//============================================================================================================

// Call() pass the context of one object to the other object

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

// The first argument passed to call becomes the value of this inside the function that is being called.and we can kept these value as we want

function createUser(username, email, password){
    SetUsername.call(createUser, username)               // *The call() method can accept arguments:
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);



/* 
Q- what does call do internally ?
A- when we called a function in js, function context gets created in call-stack ,when the function get executed 
 completly its context also gets remove alogn with the props and when we call the props of that function to other function ,as that function 
 context gets remove we cant access that props to other function. so the Call() method hods the context of that function
 and pass to the other function
*/