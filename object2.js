const tinder = new Object();                      // singleton Object
console.log(tinder);

const linkedIn = {};                              // Non singleton object 
console.log(linkedIn);


tinder.user = "abc@123";                         // aasinging a key-values to the singlton object 
tinder.id = 21;
tinder.userName = "Aniket"
tinder.isLoggedIn = false;
console.log(tinder);

// object Nesting

const regularUser = {
    email : "aniket@tale",
    fullName : {
        userFullName : {
            Fname : "Aniket",
            Lname : "Tale"
        }
    }
}
console.log(regularUser.fullName.userFullName.Fname);


let obj1 = { 1 : "A", 2 : "B"};
let obj2 = { 3 : "C", 4 : "D"};
let obj3 = { 5 : "E", 6 : "F"};

const obj4 ={obj1,obj2,obj3}                       // merg object (not so used)
console.log(obj4);

const obj5 = Object.assign({},obj1,obj2,obj3);       // '{}' it is the target object where the all object get copied
console.log(obj5);

const obj = {...obj1, ...obj2, ...obj3};             // merging multiple object into single object (frequently used)
console.log(obj);

// ARRAYS CONTAINING OBJECTS

const arrObject = [
    {
        id_1 : 1,
        email : "aniket@123"
    },
    {
        id_2 : 2,
        email : "ani@ket"
    },
    {
        id_3 : 3,
        email : "andy@345"
    },
    {
        id_4 : 4,
        email : "ket@ani"
    },    
]

console.log(arrObject[3]);
console.log(Object.keys(arrObject));
console.log(Object.values(arrObject))


// Introduction to the JavaScript object destructuring assignment    Synatx -'({propertyName : newpropertyNew})'
// Suppose you have a person object with two properties: firstName and lastName.

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

const course = {
    courseName : "javascript",
    coursePrice : 123,
    courseInsttructor : "Hitesh Sir"
}
//console.log(course.courseName);

// console.log(coursePrice);  // we cant access these object property like these but using object destructuring we can achieve it

let {courseName , courseInsttructor} = course; // here we achieve 
console.log(courseName);
console.log(courseInsttructor);

let {courseName : cName , courseInsttructor : cInsttructor} = course         //we also change the property name to another name for easy access
console.log(cName);
console.log(cInsttructor);
// ES6 introduces the object destructuring syntax that provides an alternative way to assign properties of an object to variables:

// let { firstName: fname, lastName: lname } = person;

// Code language: JavaScript (javascript)
// In this example, the firstName and lastName properties are assigned to the fName and lName variables respectively.

// In this syntax:

// let { property1: variable1, property2: variable2 } = object;

// The identifier before the colon (:) is the property of the object and the identifier after the colon is the variable.

// Notice that the property name is always on the left whether it’s an object literal or object destructuring syntax.

// If the variables have the same names as the properties of the object, you can make the code more concise as follows:

// let { firstName, lastName } = person;

// console.log(firstName); // 'John'
// console.log(lastName); // 'Doe'

// In this example, we declared two variables firstName and lastName, and assigned the properties of the person object to the variables in the same statement.
//Object destructuring is a powerful feature in JavaScript that helps make code cleaner and more expressive.
