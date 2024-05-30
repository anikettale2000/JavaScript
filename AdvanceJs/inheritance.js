class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

//* The extends keyword is used to create a subclass that inherits from another class
//* The super() function is used to call the constructor of the parent class.

class Student extends User{
    constructor(username , email , password){
        super(username);                 //* The super() function is used to call the constructor of the parent class. just like "call()" function do
        this.email = email;
        this.password = password;
    }

    getMail(){
        return `Student mail is : ${this.email}`;
    }

    getName(){
        return `${this.username}`;
    }

}

let stu_1 = new Student("Mahesh" , "mahesh@123" , "123@mahesh");

console.log(stu_1.email);
console.log(stu_1.getMail());

stu_1.logMe();            // here accessing the property of "User" Class with the refferance of child class "Student"

//----------------------------------------------------------------------------------------

let stu_2 = new Student("Ani" , "ani@123" , "123@ani");

console.log(stu_2.username);
console.log(stu_2.email);
console.log(stu_2.password);

stu_2.logMe();                // here accessing the property of "User" Class with the refferance of child class "Student"
console.log(stu_2.getMail());

//---------------------------------------------------------------------------------------------------

const stud_3 = new User("Andy");
stud_3.getName();                // here parent class dont have the access to the props and methods of "child" class
