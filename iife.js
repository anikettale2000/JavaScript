// IIFE stands for Immediately Invoked Function Expression
//Used to defined and executed function immediately after being created. 
// create a private scope for variables, preventing them from affecting the global scope.
// IIFE is used to save from Global Scope pollution i.e  avoid polluting the global namespace.

//syntax

// (function(){
//     //line of code
// })();

// ({})();                  //()(); 1st () for function declaration, and 2nd () for calling the function

//IIFE function                       
(function add(a,b){                 // Named IIFE
    console.log(a+b);
})(5,5);

(function (a,b){                    // UnNamed IIFE
    console.log(a+b);
})(5,5);

//Normal Function

function mul(x,y){
    console.log(x*y);
}
mul(4,4);

(() => console.log("hi ANiket"))();                // IIFE arrow function

//or
((name) =>{
    console.log(name)
})("ANIKET TALE");



