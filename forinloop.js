/*
    * In JavaScript, the for...in loop is used to iterate over the enumerable properties of an object
    * it can also be used with arrays to iterate over the indices.
    * Here's the basic syntax for the for...in loop:
    * for (variable in object) {
        // code to be executed for each property
    }
    
*/

const obj = {
    id : 1 ,
    name : "Aniket" ,
    Lname : "Tale",
    Study : "MCA"
}

for(let key in obj){
    console.log(`${key} is ${obj[key]}`);  // ${obj[key} is used to print the value of an object ar perticular key
}

// we can iterate array also using the for-in loop but instead of values these loop return the indexes of an Array.
// while in for-of loop its returns the actual values present in the array

let Arr = ['HP', 'Intel', 'Acer', 'Asus', 'Samsung'];
for(let i in Arr){
    console.log(`${i} => ${Arr[i]}`); // ${Arr[i]} is used to print the value or keys of an array ar perticular index
}

// Keep in mind that when using for...in with arrays, the loop variable will be the index, not the actual element value.
// If you want to iterate over the values of an array, consider using the for...of loop instead.






