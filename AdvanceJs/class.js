//* Creating an Class

// class User{
//     constructor(username , email , password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPass(){             // creating an Method inside the class
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// let customer = new User("Aniket" , "aniket@123" , "Aniket@123");    // creating an Object using "new" keyword for class User

// console.log(customer.username);          // calling class props using the "customer" object       
// console.log(customer.email);
// console.log(customer.password);
// console.log(customer.encryptPass());
// console.log(customer.changeUsername());   // calling class method using the "customer" object


//* Behind the Scene of the Class using prototype

function User(username , email , password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPass = function(){          // adding a prototype 'encryptPass' to the "User" Object ,just like creating an "method in class"
    return `${this.password}abc`;
}

User.prototype.changeUsername = function(){      // adding a prototype 'changeUsername' to the "User" Object , just like creating an "method in class"
    return `${this.password}abc`;
}

let customer = new User("Aniket" , "aniket@123" , "Aniket@123");

console.log(customer.username); 
console.log(customer.email);
console.log(customer.password);
console.log(customer.encryptPass());
console.log(customer.changeUsername()); 
