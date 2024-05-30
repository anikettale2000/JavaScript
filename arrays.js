let Array1 = [1,2,3,4,5,6,7];       // Array Decleration of number type
// console.log(Array1);

let Arr2 = ["Aniket","Mahesh", "Sachin"];    // string array declaration
// console.log(Arr2);

//ARRAYS Methods

Array1.push(8,9,10);                        // used insert an new element in end of arrays
console.log(Array1);

Array1.pop();                         // used to remove an new element from thr end of arrays
// console.log(Array1);

Array1.unshift(0);                    //Inserts new elements at the start of an array, and shift the arrays elememts to the right eventually remove last element
// console.log(Array1);

Array1.shift(0);                    //Removes the first element from an array and returns it.
// console.log(Array1);

// console.log(Array1.includes(9));          // cheaks elements present into the arrays or not and returns the boolean value
// console.log(Array1.includes(11));

// console.log(Array1.indexOf(4));           // returns the index of an array element

// console.log(Array1.slice(1,5));              //Returns a copy of a section of an array withou modifying the actual array

// console.log(Array1.splice(1,5));             //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements it also manipulate or modify Actual array
// console.log(Array1);

const newArray1 = Array1.join();                // change the type of aaray elements into the string and return string values
console.log(newArray1);
console.log(typeof newArray1);