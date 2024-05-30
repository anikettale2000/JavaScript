/*
    * In JavaScript, the do-while loop is another type of loop that is similar to the while loop. 
    * The key difference is that in a do-while loop, the block of code is executed first, and then the condition is checked. 
    * If the condition is true, the loop continues to execute; if the condition is false, the loop is terminated.

    * The basic syntax of a do-while loop looks like this:
    * do {
    // code to be repeated
    } while (condition);

*/
// The do-while loop ensures that the code inside the loop is executed at least once, regardless of whether the condition is initially true or false.

let i =34;                         // return a value 34 because do while loop execute first iteration
do {
    console.log("number is", i);
    i++;
} while (i<=10);