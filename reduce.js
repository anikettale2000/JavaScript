// In JavaScript, a reducer is a function used with the reduce method
// used to reduce an array to a single value.
// It iterates over each element of the array, applying a specified callback function and "accumulating" the result.
// Here's the basic syntax of the reduce method:
//array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
/*
array: The array to be reduced.
callback: A function that is called once for each element in the array.
accumulator: The accumulated result of the previous callback invocations or the initial value (if provided).
currentValue: The current element being processed in the array.
index (optional): The index of the current element being processed.
array (optional): The array on which the reduce method is called.
initialValue (optional): A value to use as the first argument to the first call of the callback. 
If not provided, the first element of the array is used as the initial accumulator value.
 */
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

// console.log(sumWithInitial);              // Expected output: 10

let num = [1,2,3,4,5,6,7,8,9,10];

let newNum = num.reduce( function(accumulator, currentValue,){
    return accumulator + currentValue;
} , 10);
// console.log(newNum);

// now in the form of Arrow function with scope i.e {}

// let num2 = [1,2,3,4,5,6,7,8,9,10];
// let newNum2 = num2.reduce( (Accumulator,currentvalue) => {
//     return Accumulator + currentvalue;
// },0)
// console.log(newNum2);

// Arrow function without Scope i.e ()

let num2 = [1,2,3,4,5,6,7,8,9,10];
let newNum2 = num2.reduce( (Accumulator,currentvalue) => Accumulator + currentvalue,0);
// console.log(newNum2);

const arr = [11, 12, 13, 14, 15, 16]

let newArr = arr.reduce( function(store , chaluvalue){
    //  console.log(`stored value is ${store} and current value is ${chaluvalue}`);
     return store + chaluvalue;
},0);
// console.log(newArr);

const ShoppingKart = [
    {
        courseName: "js",
        price: 2999
    },
    {
        courseName: "Ruby",
        price: 999
    },
    {
        courseName: "Java",
        price: 3500
    },
    {
        courseName: "py",
        price: 5999
    },
    {
        courseName: "HTML/CSS",
        price: 1999
    },
]

let kartPrice = ShoppingKart.reduce( (storeValue, currentValue) => storeValue + currentValue.price,0);
console.log(kartPrice);
