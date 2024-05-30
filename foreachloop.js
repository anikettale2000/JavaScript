/*
    * In JavaScript, the forEach loop is a specific method available for arrays.
    * It allows you to iterate over each element in an array and execute a callback function for each element. 
    * The syntax is as follows:
    * array.forEach(element => {
    
    });
*/
let Arr = [1,2,4,,5,6,7];
Arr.forEach( (index) => {     // callback function dont have name, so we dont write the function while declaring the callback function
    // console.log(index);
})

// Another way to write an callback function

const coding = ['js', 'java', 'php', 'Python', 'HTML', 'CSS'];

coding.forEach  (function (lang) {     // callback function dont have name, so we dont write the function while declaring the callback function
    console.log(lang);
})

//Another way to write an callback function

function print(value){
    console.log(value);             // now we can pass these function as a parameter in the forEach loop
}

// coding.forEach(print);     // here we pass print function as parameter to the forEach loop

function print(value, index, array){
     console.log(value, index, array);             // we multiple parameter to get index , value and full array
}

coding.forEach(print);     

// [{},{},{}] to deal such situation

const languages = [
    {
        langName : "javaScript",
        Extention : ".js"
    } ,
    {
        langName : "Java",
        Extention : ".java"
    } , 
    {
        langName : "Python",
        Extention : ".py"
    } ,
    {
        langName : "HTML",
        Extention : ".html"
    }
];

languages.forEach( ( value ) => {
    console.log(value);
} )

languages.forEach( ( value ) => {
    console.log(`Language is ${value.langName} and its extension is  ${value.Extention}`); // using "value.langName" and "value.Extension" these we can acces the property and value of an object
    // console.log(value.Extention);
} )

// For-each loop does not return any  value we must use filter or map for return value

let num = [1,2,3,45,6,7,8,9,0];

const result = num.forEach( (value) => {
    // console.log(value);
    return value;                        // return undefined value
} )
console.log(result);



