//The basic syntax of a while loop looks like this:
/*
    while (condition) {
    // code to be repeated
    }
*/

// printing a number upto 10

// let num = 1;
// while(num <= 10){
//     // console.log(`Number is ${num}`);
//     num = num + 1;
// }


// let i = 1;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }

/* 
    * let i = 1; initializes the counter variable i to 1 before entering the loop.
    * i <= 5 is the condition. As long as i is less than or equal to 5, the loop continues.
    * console.log(i); prints the current value of i.
    * i++; increments the value of i by 1 after each iteration.
*/
//It's important to ensure that the condition in a while loop will eventually become false; otherwise, the loop will run indefinitely, 
//resulting in what is known as an infinite loop. 

//Example of infinite loop

//  while (true) {
//  console.log('This is an infinite loop!');
//  }

// ARRAY iteration

let Arr = ['Flash', 'batman', 'Superman', 'ironman'];
let index = 0;

while (index < Arr.length) {
  console.log(`Array value is ${Arr[index]}`)
  index = index + 1;     // index++
}

let myArray = ['Flash', 'batman', 'Superman', 'ironman'];
let arr = 0;
while (arr < myArray.length) {
  console.log(`our hero is ${myArray[arr]}`);
  arr = arr + 1;
}