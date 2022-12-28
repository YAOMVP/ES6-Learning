// 😊class expression 
// const Person = class {

// }

//😊class declaration
class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calAge() {
        console.log(2037 - this.birthYear);
    }

    //😊底下的方法 可以改成
    greet1() {
        console.log(`Hi, ${this.firstName}`);
    }
}
const olivia = new Person("Olivia", 1998);
console.log(olivia);
olivia.calAge();

console.log(olivia.__proto__ === Person.prototype); //true

Person.prototype.greet = function() {
    console.log(`Hi, ${this.firstName}`);
}

olivia.greet(); //Hi Olivia