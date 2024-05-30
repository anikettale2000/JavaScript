//* A static method is a method that belongs to the class itself, rather than an instance of the class.
// The static keyword is used both for defining static methods and static properties within the class


class User{
    constructor(username){
        this.username = username;
    }

    static creatId(){      // using static we can only access that prop inside the class itself only not outside the class
        return `123`
    }
}

const person = new User("Aniket");
// console.log(person.creatId());   // here we cant access these prop here as it is an "static" method
console.log(person.username);

class Teacher extends User {
    constructor(username , email){
        super(username);
        this.email = email;
    }
}

const person_2 = new Teacher("hitesh" , "hitesh@123");

// console.log(person_2.creatId());  // here we cant access these prop here as it is an "static" method