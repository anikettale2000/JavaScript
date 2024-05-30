// In JavaScript, the filter() method is used to create a new array with elements that pass a certain condition
// The filter() method accepts a callback function as its argument, and this callback function is applied to each element in the array
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.
// new array containing only the elements that satisfy the specified condition.
// it works on true or false condition, if condition is true then code will execute 

let numArr = [1,2,3,4,5,6,7,8,9,10];
// we have to get num grater than 5
let newArr = numArr.filter( function (num) {       
   return num > 5;
} )
// console.log(newArr);

let newArr2 = numArr.filter( (num) => (num > 5) );   // when we used () we dont need write the return keyword 
// console.log(newArr2);

let newArr3 = numArr.filter( (num) => {
    return num > 5} );                                 // when we used {} we must implicitly return the value
// console.log(newArr3);

const Book = [
    {
        title: 'Book one' , genre: 'Fiction' , publish: 1981 , edition: 2004 
    },
    {
        title: 'Book two' , genre: 'Non-Fiction' , publish: 1992 , edition: 2008 
    },
    {
        title: 'Book three' , genre: 'history' , publish: 1999 , edition: 2007
    },
    {
        title: 'Book four' , genre: 'Non-Fiction' , publish: 1989 , edition: 2010
    },
    {
        title: 'Book five' , genre: 'science' , publish: 2009 , edition: 2014
    },
    {
        title: 'Book six' , genre: 'Fiction' , publish: 1987 , edition: 2010 
    },
    {
        title: 'Book seven' , genre: 'history' , publish: 1986 , edition: 1996 
    },
    {
        title: 'Book eight' , genre: 'science' , publish: 2011 , edition: 2016 
    },
    {
        title: 'Book nine' , genre: 'Non-Fiction' , publish: 1981 , edition: 1989 
    },
]

// getting each book info

let getBook = Book.filter( (bk) => (bk.title) );
// console.log(getBook);

// getting book releted to science genre

let getGenre = Book.filter( (bk) => (bk.genre === "science") );
// console.log(getGenre);

// getting books on the basis of published year

let getBookYear = Book.filter( (bk) => (bk.publish > 1980) );
// console.log(getBookYear);

// getting book which are published from 1990 and from history genre

let books = Book.filter( (bk) => {
    return bk.publish >= 1990 && bk.genre === "history";  // in that we can cheak multiple conditions
} );
console.log(books);

