//Syntax  function functionName(){
//                                    }

// function addNumber(num1,num2){                    //passsing an parameter
//      num1 + num2;
//      console.log(num1+num2);
// }
// addNumber(2,3);                                   // Passing an Arguement

// function addTwoNumbers(n1, n2){
//     console.log(n1+n2);
// }
// let result = addTwoNumbers(3,8);
// console.log(result);               // we get result is undefine, because we did return the value in the function we just print it to the console

// function addTwoNumbers(n1, n2){
//     const result = n1+n2;
//     return result;                         
//     console.log("Aniket");                 // any statemnet after the return keyword wont be executed     
// }
// const result = addTwoNumbers(2,6);
// console.log(result);

//OR

// function addTwoNumbers(n1, n2){
//     return n1+n2;
// }
// const result = addTwoNumbers(2,6);
// console.log(result);

// //Example

// function userLoggedIn(userName){
//     console.log(`${userName} is Logged in Now`);
// }
// userLoggedIn("Aniket");

// function userLoggedIn(userName){
//     return `${userName} is Logged in Now`;
// }
// userLoggedIn("Mahesh");                     // here we cant get the output as we only return it not print it on the console so -
// console.log(userLoggedIn("Mahesh"));
// console.log(userLoggedIn(""));               // return emty space
// console.log(userLoggedIn());                // return undefine username

//REST PARAMETER (...rest)

function userKartPrice(...item){                   //used to pass multiple parameter to an function
    return item;
}
console.log(userKartPrice(200,300,400,500));        // returns ann array of an combine value

function userKartPrice(item1, item2, ...item){                 
    return item;
}
console.log(userKartPrice(200,300,400,500));        // here 200 and 300 gets stored in the val1 and val2 and remaining return an arrays of combine value 

// PASSING AN OBJECT TO AN FUNCTION

const user = {
    name : "Aniket",
    id : 64
}

function accessObject(anyObject){
    console.log(`user name is ${anyObject.name} and user id is ${anyObject.id}`);
}
accessObject(user);             // here we access the object properties through function

accessObject({                  //another way to access the object values
    name : "sam",
    id : 56
})

// PASSING AN ARRAY TO AN FUNCTION

let arr1 = [1,2,3.4,5,6];

function getArray(fromAnyArray){
return fromAnyArray[2];
}
console.log(getArray(arr1));
//or
console.log(getArray([100,200,300,400,600]));
