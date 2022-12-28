// const Person = function(firstNname, birthYear) {
//     this.firstNname = firstNname;
//     this.birthYear = birthYear;

// }

// const olivia = new Person("Olivia", 1994);
// // console.log(olivia);
// console.log(olivia instanceof Person);

// //😊Prototype
// console.log(Person.prototype);
// //Each object that are created through this constructor function will inherit, they will get access to all the methods and properities that are defined on this prototype property.

// Person.prototype.calAge = function() {
//     console.log(2037 - this.birthYear); //There is exist one copy of this function, all of the object that are created can reuse this function
// }

// Person.prototype.species = "Homo Sapiens";
// console.log(olivia); //This property is not in the object that we declared before, this is the inheritant properities.
// console.log("------" + olivia.hasOwnProperty("firstNname")); // Check if it has own property   true
// console.log("------" + olivia.hasOwnProperty("species")); //false

// olivia.calAge();
// console.log(olivia);





// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// const bmw = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);


// Car.prototype.accelerate = function() {
//     this.speed += 10; //this.speed = this.speed +10;
//     console.log(`${this.make} is ${this.speed + 10}km/h`);
// }
// Car.prototype.break = function() {
//     this.speed -= 5;
//     console.log(`${this.make} is ${this.speed + 10}km/h`);
// }
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.break();

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate() {
        this.speed += 10; //this.speed = this.speed +10;
        console.log(`${this.make} is ${this.speed + 10}km/h`);
    }
    break () {
        this.speed -= 5;
        console.log(`${this.make} is ${this.speed + 10}km/h`);
    }

    get speedUs() {
        return this.speed / 1.6;
    }

    set speedUs(value) {
        this.speed = value * 1.6
    }
}
const ford = new Car("Ford", 120);
console.log(ford.speedUs); //Use as a properities(get)
ford.speedUs = 50; //Just use to set as a property
console.log(ford); //80   50*1.6=80