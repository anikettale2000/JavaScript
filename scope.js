// var          // Global Scope
// let          // Blocked Scope
// const       // Blocked Scope


const c = 6 ;
let a = 4;
if(true){
    let a = 1 ;
    var b = 2;
    const c = 3;
    // console.log(`Inner : ${a} , ${c}`);  // well a,c can only access within the if block so they are the blocked scoped variable
}

// console.log(a);
// console.log(b);               // var can be access outside the scope of if block so it is a Global scoped variable
// console.log(c);



function one(){
    const username = "Aniket";
    // console.log(website);                   here in scoping Parent function cant access the child function value
    function two(){
        const website = "youtube"
        console.log(`${username} and {website}`)     // here in scoping child function can access the value of parent function
    }
    two();
}
one();


if (true) {
    let username = "Aniket";
    if (true) {
        let website = "youtube"
        console.log(username + website)
    }
    // console.log(website);                       //here also we cant access the website variable outside the scope of (child) inner if loop it will throw error
}
// console.log(username);              //here also we cant access the username variable outside if loop it will throw error
