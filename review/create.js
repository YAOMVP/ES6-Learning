// const Person = function(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// }

// Person.prototype.calcAge = function() {
//     console.log(2037 - this.birthYear);
// }

// const Student = function(firstName, birthYear, course) {
//         //DO NOT REPEAT YOURSELF!!!
//         // this.firstName = firstName;
//         // this.birthYear = birthYear;

//         Person.call(this, firstName, birthYear);
//         this.course = course; //An additional property

//     }
//     //😊Linking prototypes
// Student.prototype = Object.create(Person.prototype); //The sudent.prototype object is inheritance from person.prototype!

// Student.prototype.introduce = function() {
//     console.log(`My name is ${this.firstName} and I study ${this.course}!`);
// }

// const mike = new Student("Mike", 2020, "Computer Science");
// console.log(mike); //Student {firstName: 'Mike', birthYear: 2020, course: 'Computer Science'}
// mike.introduce(); //My name is Mike and I study Computer Science!
// mike.calcAge(); //17



// console.log("------------");



// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function() {
//     this.speed += 10;
// }

// const EV = function(make, speed, charge) {
//     Car.call(this, make, speed);
//     this.charge = charge;
// }

// //Link the protorype
// EV.prototype = Object.create(Car.prototype);

// const tesla = new EV("Telsa", 120, 23);
// console.log(tesla); //EV {make: 'Telsa', speed: 120, charge: 23}

// EV.prototype.chargeBattery = function(chargeTo) {
//     this.charge = chargeTo;
// }

// EV.prototype.accelerate = function() {
//     this.fast += 20;
//     this.charge--;
//     console.log(`${this.make} with a charge of ${this.charge}`);
// }
// tesla.chargeBattery(90); //EV {make: 'Telsa', speed: 120, charge: 90}
// tesla.accelerate(); //Telsa with a charge of 89





// class Account {

//     //1).Public fields (instances)
//     locale = navigator.language;

//     //2).Private fields
//     // #movements = [];
//     // #pin;

//     constructor(owner, currency, pin) {
//         this.owner = owner;
//         this.currency = currency;
//         //Protected property
//         this.#pin = pin;
//         //this._movements = [];
//         //this.locale = navigator.language;
//     }

//     getMovements() {
//         return this.#movements;
//     }

//     deposit(val) {
//         this.#movements.push(val);
//         return this;
//     }

//     withdraw(val) {
//         this.deposit(-val);
//         return this;
//     }



//     requestLoan(val) {
//         if (this._approveLoan(val)) {
//             this.deposit(val);
//             console.log(`Loan approved`);
//             return this;
//         }
//     }

//     //Private methods: very useful to hide the implementation details from the outside.
//     //    #approveLoan(val) {
//     //         return true;
//     //     }
// }

// const acc1 = new Account("Jones", "EUR", "111");
// console.log(acc1);
// acc1.deposit(250);
// acc1.withdraw(140);


class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
    }

    break () {
        this.speed -= 5;
        return this;
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}


class EVCL extends Car {
    //#charge;
    constructor(make, speed, charge) {
        super(make, speed);
        //this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        //this.#charge = chargeTo;
        return this;
    }

    accelerate() {
        this.speed += 20;
        //this.#charge--;
        return this;
    }
}

const rivian = new EVCL("Rivian", 120, 23);
console.log(rivian);
rivian.accelerate().break().chargeBattery(50).accelerate(); //😊Do not forget to return above!!!