/*

    * JavaScript is a syncronous language - every task execute step-by-step.
    * javascript is a single threaded language - every task run on single threas, because of that Js is also slower than other languages
    * As Js is single threaded, new statement can run when previous gets executed.
    * 
                                       CODE
         ---------------------------------------------------------------
         |                                                             |
    Blocking-Code                                               Non-Blocking code
         |                                                                   |
   Block the flow of program                                  Does not block the flow of program
               |                                                              |
 Read the file with Synchronous(sync)                       Read the file with Asynchronous(Async)              
 |                                                          |
 |                                                          |
 -> untill the file gets read,program execution             -> while reading the file, as it takes time so the flow of exection is not block, 
    will block, when reading done it start executing           in that time next operation gets executed, untill reading gets over










* Synchronous (Sync) Execution:=
                                In a synchronous execution model, code is executed sequentially, one statement at a time.
Each operation must complete before the next one begins.
It can lead to blocking behavior, where the program waits for one operation to finish before moving on to the next.

* Asynchronous (Async) Execution:=
                                  In an asynchronous execution model, certain operations can be initiated but not necessarily completed immediately.
Code execution doesn't wait for an asynchronous operation to finish, allowing other code to run in the meantime.
Callbacks, Promises, and Async/Await are mechanisms used for handling asynchronous operations in JavaScript.


 























*/