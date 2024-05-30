/*
    A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. It is a way to handle asynchronous operations more cleanly and avoid the callback hell (nested callbacks). A Promise can be in one of three states:

Pending: The initial state. The promise is neither fulfilled nor rejected.
Fulfilled: The operation completed successfully, and the promise has a resulting value.
Rejected: The operation failed, and the promise has a reason for the failure.

Promises provide a cleaner way to structure asynchronous code compared to using callbacks, 
especially when dealing with multiple asynchronous operations in sequence.
Additionally, they make it easier to handle errors and provide a more readable and maintainable code structure.

*/

// Creating a Promise  

const promiseOne = new Promise(function(resolve , reject){
    // Simulating an asynchronous operation
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();           // connect with .then with out resolve() .then block is not work
    }, 1000)
});

// consuming the Promise

promiseOne.then(function(){               // We use the then method to handle the fulfillment case (success)
    console.log("Promise is consumed");
});


// another way of creating the promise

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log('Async is called');
        resolve();
    } , 2000)
}).then(function(){                       // consuming the Promise
    console.log('promise is consumed')
});

// another way of creating the promise  

const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username: "Aniket" , email: "aniket@123"})
    } , 1000)
});

promiseThree.then(function(getData){         // as ".then" function connect to "resolve()", so the value pass inside in the resolve we can access in then() with any parameter. here we use "getData" although we can used another param aslo.
    console.log(getData);
});

// another way of creating the promise  

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function () {
        let error = true      // true returns an error , false will not throw error
        if (!error) {
            resolve({username: "Aniket" , email: "aniket@123"});
        } else {
            reject('ERROR : something went wrong')
        }
    } , 3000)
});

// error handling with "then" chaining

promiseFour
.then((user) => {            // using Arrow Function
    console.log(user);
    return user.username
})
.then((username) => {                // Another then is used to handle the result of the previous then. it "holds" the return value of previous then         
    console.log(username);
})
.catch(function(error){        // The catch method is used to handle any errors that might occur during the Promise execution.
    console.log(error);
})
.finally(() => {                           // it will execute in any condition
    console.log('The promise is either resolve or rejected');
});

// another way of creating the promise 

const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function () {
        let error = true      // true returns an error
        if (!error) {
            resolve({username: "Javascript" , password: "123"});
        } else {
            reject('ERROR : Js went wrong')
        }
    } , 3000)
});

// error handling with "async" , "await"

// async function consumePromiseFour(){           //it will work fine without error but as we cant able handle error with these method we use "Try and Cacth"
//    let response = await promiseFive;
//    console.log(response)
// }

async function consumePromiseFour(){
    try {
        let response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFour();

/*

*async Function:
The async keyword is used to define asynchronous functions. 
An asynchronous function returns a Promise implicitly and allows the use of the await keyword inside it. 

*await Keyword:
The await keyword is used inside an "async function" to pause the execution of the function until the Promise is resolved.
It can only be used within an async function.

*Handling Errors:
When working with async and await, it's a good practice to handle errors using try...catch blocks.
*/

// especially when dealing with multiple asynchronous operations in sequence.
//  Additionally, they make it easier to handle errors and provide a more readable and maintainable code structure.





// https://api.github.com/users/hiteshchoudhary
/*
*fetch() 
function in JavaScript is like sending a request to a server to ask for information.
It's a way for your code to talk to other parts of the internet and get data.
*The fetch() function returns something called a "Promise."
 It's like saying,"I'll get back to you once I have the information.
"This is because fetching data takes a bit of time, and the browser doesn't want your program to get stuck waiting.

*/

// fetch() using async and await

// async function getUser(){
//     try {
//         let response = await fetch('https://api.github.com/users/hiteshchoudhary');    
//         let user = await response.json();
//         console.log(user);
//     } catch (error) {
//         console.log("E:" , error);
//     }
// };

// getUser();


// fetch() using .then

fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(getUser){
    return getUser.json();
})
.then(function(data){
    console.log(data);
})
.catch((error) => {
    console.log(error);
});

// OR ussing ArrowFunction

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((getUser) => {
//     return getUser.json();
// })
// .then((userData) => {
//     console.log(userData);
// })
// .catch((error) => console.log(error));