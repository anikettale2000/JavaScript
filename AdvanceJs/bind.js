/*
*With the bind() method, an object can borrow a method from another object.
> When a function is used as a callback, this is lost.
*Sometimes the bind() method has to be used to prevent losing this.

*/

const person1 = {
    fName : "Aniket" ,
    lName : "Tale" ,
    fullName : function(hometown , work){
        return this.fName + " " + this.lName + " " + hometown + " " + work;
    }
}

const person2 = {
    fName : "Mahesh" ,
    lName : "Tale" ,
}

// call()
console.log(person1.fullName.call(person2 , "Saywani" , "student"));

// apply()
console.log(person1.fullName.apply(person2 , ["Saywani" , "student"]));

// bind()
let result = person1.fullName.bind(person2 , "Saywani" , "student");
console.log(result);          // Function Reference. The bind() function creates a new bound function. store the parameters passed — which include the value of this and the first few arguments — as its internal state.These values are stored in advance, instead of being passed at call time.
console.log(result());        // calling a function also called as target function.

//=====================================================================================================================================================


// let geeks = {
//     name: "ABC",
//     printFunc: function () {
//         console.log(this.name);
//     }
// }
// geeks.printFunc();

// /*Output
// ABC*/

// //Example 2: In this example, the binding of this is lost, so no output is produced.


// let geeks = {
//     name: "ABC",
//     printFunc: function () {
//         console.log(this.name);
//     }
// }
 
// let printFunc2 = geeks.printFunc;
// printFunc2();

// /*Output
// undefined */

// /*
// Example 3: In this example, we are using the bind() method in the previous example. 
// The bind() method creates a new function where this keyword refers to the parameter in the parenthesis. 
// This way the bind() method enables calling a function with a specified this value. 
// */


// let geeks = {
//     name: "ABC",
//     printFunc: function () {
//         console.log(this.name);
//     }
// }
 
// let printFunc2 = geeks.printFunc.bind(geeks);
// //using bind()
// // bind() takes the object "geeks" as parameter//
// printFunc2();

// /*
// Output
// ABC
// */

// //Example 4: In this example, there are 3 objects, and each time we call each object by using the bind()method. 


// //object geeks1
// let geeks1 = {
//     name: "ABC",
//     article: "C++"
// }
// //object geeks2
// let geeks2 = {
//     name: "CDE",
//     article: "JAVA"
// }
 
// //object geeks3
// let geeks3 = {
//     name: "IJK",
//     article: "C#"
// }
 
// function printVal() {
//     console.log(this.name + " contributes about " + 
//                 this.article + "<br>");
// }
 
// let printFunc2 = printVal.bind(geeks1);
// //using bind()
// // bind() takes the object "geeks1" as parameter//
// printFunc2();
 
// let printFunc3 = printVal.bind(geeks2);
// printFunc3();
 
// let printFunc4 = printVal.bind(geeks3);
// printFunc4();
// //uniquely defines each objects

// /*
// Output
// ABC contributes about C++<br>
// CDE contributes about JAVA<br>
// IJK contributes about C#<br>4
// */
