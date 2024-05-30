// In JavaScript, the map method is used to create a new array by applying a provided function to each element of an existing array.
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

const num = [1,2,3,4,5,6,7,8];
// add 1 in each element of array

let sum = num.map((index) => (index + 1) );  // when do not include {} no need to used return
// console.log(sum);

let Sum = num.map((index) => {              // when include {} must use return
    return index + 1} );
// console.log(sum);

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

let book  = Book.map( (bk) => (`book ${bk.title} is published in => ${bk.publish}`));
// console.log(book);

// MAP CHAINING

// Chaining in JavaScript refers to the practice of calling multiple methods on an object in a single statement, which results in a more concise and readable code
// using chaining you can perform a sequence of operations on the array in a concise and readable manner

const NumArr = [ 1,2,3,4,5,6,7,8,9,10 ];

let chain = NumArr
                .map( (num) => (num + 10) )                                    // o/p => 11,12,13,14,15,16,17,18,19,20
                // now num hold value that modifies by the first .map()
                .map( (num ) => (num * 2) )                                    // o/p =>  22, 24, 26, 28, 30, 32, 34, 36, 38, 40
                .filter((num) => (num >= 30))                                  // o/p => 30, 32, 34, 36, 38, 40
console.log(chain);

// in that way we can achieve the chaining in js 