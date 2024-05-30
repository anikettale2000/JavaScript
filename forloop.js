/*
    * the for loop is used for iterating over a block of code repeatedly for a specific number of times or for each item in a collection (like an array). 
    * The basic syntax of a for loop looks like this:
    * for (initialization; condition; iteration) {
            // code to be repeated
        }
    * initialization: Executed before the loop starts. It usually initializes a counter variable.
    *  condition: Evaluated before each iteration. If true, the loop continues; if false, the loop terminates.
    *  iteration: Executed after each iteration of the loop. It typically increments or updates the counter variable.    

*/

// printing a number upto 1-10 using for loop

for(let i=1; i<=10; i++){
    // console.log(i);
}

//printing number Table upto 10

for(let i=1; i<=10; i++){
    // console.log(`Table for ${i} `);
    for(let j=1; j<=10; j++){
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

const arr1 = ["Aniket", "Mahesh", "Sachin", "Vijay", "Shubham"];

for (i=0; i<arr1.length; i++){
    // console.log(arr1[i]);
}


// Break and Continue Keyword in loop
 /*
    * In JavaScript, the break and continue keywords are used within loops to control the flow of the loop.
    * Both break and continue can be used with for loops, while loops, and do-while loops in JavaScript.
    * They provide flexibility in controlling the flow of your loops based on specific conditions.
    * break Statement:
                     The break statement is used to exit a loop prematurely.
                     When the break statement is encountered inside a loop, the loop is terminated immediately, and the program continues with the next statement after the loop.
                     It is often used with conditional statements to exit the loop when a certain condition is met
*/

for(i=1; i<5; i++){
    console.log(i);
    if(i==2){
        console.log("number found");
        break;
    }
}

let arr = ["one", "two", "three", "four", "five", "six"]

for(index=0; index < arr.length; index++){
    console.log(arr[index]);
    if(arr[index] == "four"){                                  // not index mention whoose index so it will be arr[index] 
        console.log("number is caught",arr[index]);
        break;                                           // exit the loop when arr[index] = four 
    }
}

//Continue Keyword

/*
    * The continue statement is used to skip the rest of the code inside a loop for the current iteration and move to the next iteration.
    * It is often used when you want to skip certain iterations based on a condition.
*/


for(index=0; index < arr.length; index++){
    console.log(arr[index]);
    if(arr[index] == "two"){
        console.log("skip these number :",arr[index]);
        continue;                                        
    }
}