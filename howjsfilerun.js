/*
    * When you run a JavaScript program, the JavaScript engine creates a call stack. 
    * execution of js file is done through the stack.
    * stack is work on LIFO i.e last in first out.
    * when we invoke a function , these function gets added into the stack and after executing the all line of code that function  get poped out.
    * The call stack is where our code is executed at its most basic level, using the execution context. 
    * last function that is called is the first one to be executed.
    * When a function is called, the JavaScript engine creates a new execution context for the function and pushes it onto the call stack.
    * The execution context contains all of the information that the function needs to execute, such as the function's parameters, local variables, and the return address.
    * 
    * Javascript Execution Context is of 3 types -
    * 1) Gobal Execution context.
    * 2) Function Execution context.
    * 3) Eval Execution Context.
*/

function Name(){
    console.log("Aniket");
    lastName();
}

function lastName(){
    console.log("Tale"); 
}
Name();

// here Name function start executing first as its get added to the stack . inside the Name() function we called the lastname()function,
//it is also gets added to stack but above the Name() function. so first all iine of code i\inside the LastName is executed and its get poped off and then the
//the remaining line of code inside the Name() is executed and its also gets poped