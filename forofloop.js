/*
    * In JavaScript, the for...of loop is used to iterate over iterable objects, such as arrays, strings, maps, sets, and other iterable objects.
    * It provides a concise and clean syntax for iterating through the elements of an iterable.
    * Syntax
    * for (variable of iterable) {
        // code to be executed for each element in the iterable
    }

    *  for...of loop works only with iterable objects
*/

let numbers = [1,2,3,4,4,5,6,7,8,9,10];
for(const num of numbers){
    // console.log(`numbers in the Array are => ${num}`);
}

// we can do the on the string also

let name = "Aniket Tale";
for(const word of name){
    if(word == " "){
        // console.log("got u");
        continue;
    }
    // console.log(`Characters in the name are => ${word}`);
}

// Maps in JS

/*
    * In JavaScript, a Map is a data structure that allows you to store key-value pairs where 
    * both the keys and values can be of any data type.
    * Unlike objects, which use strings or symbols as keys,
    * Map allows you to use any data type, including objects and functions, as keys.
    * No duplicate value in map i.e all values are unique 
    * also maintain the order of key-value pair
*/

let myMap = new Map();
myMap.set("Name" , "Aniket");
myMap.set("LName" , "Tale");
myMap.set("Address" , "Akola");
myMap.set("PinCode" , "444501");
myMap.set("Name" , "Aniket");   // does not added into map as it not allow duplicate entries
// console.log(myMap);

// implimenting For-of loops on map

for(const i of myMap){
    // console.log(i);        // returns an array of key value pair 
}

for(const [kay, value] of myMap){            //[key ,value] synatx return value without array
    // console.log(`${kay} => ${value}`);
}

// we cant use for-of loop on object as they are not iterable, we can use for-of loop on iterable objects only like arrays, strings,map,etc

const obj = {
    id : 1 ,
    name : "Aniket" ,
    Lname : "Tale"
}

for (const i of obj){
    console.log(i);
}