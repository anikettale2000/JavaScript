// * IF SATEMENT 
/* 
   * if is statemnet used cheak the conditions if it is only true.
   * In JavaScript, the if statement is used to conditionally execute a block of code based on a specified condition.
   * ere's the basic syntax of the if statement:
    if (condition) {
    // Code to be executed if the condition is true
    }
   * if: This is the keyword that initiates the conditional statement.
   * condition: This is the expression that is evaluated. If the condition is true, the code inside the curly braces will be executed.
   * If the condition is false, the code inside the curly braces will be skipped.
   *  
   * 
*/

let time = 6;

if (time == 6) {
    // console.log("Good morning");
}


let temperature = 25;

if (temperature > 20) {
    // console.log("It's a warm day!");
}

// * IF ELSE statement

/*
    if_else statement is used to cheak the condition if it is true or false
*/
const Temperature = 41;                                       // > grater than
if (Temperature > 40) {                                        // < less than
    // console.log(" less then 40 degree");
} else {
    // console.log("greater than 50");
}


let islightOn = true;

if (islightOn == false) {
    // console.log("Start the motor")
} else {
    // console.log("Swith off the motor");
}


// * Else-if statements

/* 
    * The else if statement allows you to check multiple conditions. It is used in conjunction with the if statement.
    * Syntax ->
    * if (condition1) {
    // Code to be executed if condition1 is true
} else if (condition2) {
    // Code to be executed if condition2 is true
} else {
    // Code to be executed if none of the conditions are true
}

*/

let avg = 40;

if (avg < 30) { // a = 30 20 10
    console.log("Good Player");
} else if (avg > 50) {
    console.log("Best performer");
} else if (avg < 50) {
    console.log("not so good Player");
} else {
    console.log("Player is out of form")
}


const userLoggedin = false;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedin && debitCard) {                     // AND (&&) operate execute when all the condition are true only
    console.log("You can buy Course");
} else {
    console.log("Logged in First");
}

if (loggedInFromEmail || loggedInFromGoogle) {      // OR (||) operator execute when only one condtion is true
    console.log("WELCOME");
} else {
    console.log("Plese LogIn")
}


// * Switch Statement
let month = 12;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febuary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("Octomber");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;

    default:
        console.log("shit!!!")
        break;
}


// TERNARY OPERATOR

// The condition is evaluated.
// If the condition is true, the expression before the : (colon) is executed.If the condition is false, the expression after the : (colon) is executed.
// condition ? true statement : false statement   --> syntax
// condition ? expression_if_true : expression_if_false;

let price = 100;

price > 101 ? console.log("price is 100") : console.log("Price is not 100");


//we can store it inside the variable  like these,

var age = 20;

var message = (age >= 18) ? 'You are an adult' : 'You are a minor';

console.log(message);

// You can also use the ternary operator for more complex expressions:

var number = 43;

var result = (number % 2 === 0) ? 'Even' : 'Odd';

console.log(result);

