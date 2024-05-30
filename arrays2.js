// let Marvel_heros = ["Thor", "Ironman","Hulk"];
// let Dc_heros = ["Superman","Flash","batman"];
// // console.log(Marvel_heros,Dc_heros);

// const allHeros = [...Marvel_heros, ...Dc_heros];             //... is spread operator used to spread the alement from both arrays and store them into the new array
// console.log(allHeros);


// // Marvel_heros.push(Dc_heros);                    // returns the arrays inside the arrays (see the o/p) i.e arrays dont merged (dont return new array)
// // console.log(Marvel_heros[3][1]);                // in these way we have to access the element after using push method (not the proper way to merg two arrays)


// let newHeros = Marvel_heros.concat(Dc_heros);      //concate or merg two arrays and return the new array
// console.log(newHeros);


// let mixArray = [1,2,3,[4,5,6,],[7,8],[9]];
// // console.log(mixArray);
// let single_Array = mixArray.flat();      //Returns a new array with all sub-array elements concatenated into single array recursively up to the specified depth.
// console.log(single_Array);                        // flat(Depth) we have to mention depth 

//FOR DATA SCRAPING

// console.log(Array.isArray("Aniket Tale"));           //cheak and tells is it Array or not by returning an boolean value

// console.log(Array.from("Aniket Tale"));              //Creates an array from an array-like object.

// console.log(Array.from({name:"Aniket"}));            // returns an empty array as it cant directly convert as there kay value pair include (imp for interview)

let Name1 = "Aniket";
let Name2 = "Mahesh";
let Name3 = "Sachin";
let Name4 = "Virat";

console.log(Array.of(Name1, Name2, Name3, Name4));      //Returns a new array from a set of elements.