let person = {
    name: 'banzhang',
    age: 18,
    sex: '男'
}
console.log(person);

function createPerson(name, age, sex) {
    let person = {}
    person.name = name;
    person.age = age;
    person.sex = sex;
    person.school = 'UTS';
    person.songsCansing = ["haha", "gaga", "lala", "bbebe"];

    person.ifCanSing(song1, song2, song3) = function() {
        if (person.sonsCansing.includes(song1) && person.sonsCansing.includes(song2) && person.sonsCansing.includes(song3)) {
            console.log(person.name + " can sing those three songs.")
        } else {
            console.log(person.name + " cannot sing those three songs.")
        }
    }

    person.goToSchool() = function(transportation) {
        if (transportation === "bike") {
            console.log(person.name + " today go to school by bike");
        }
    }
    person.goToSchool() = function() {


        console.log(person.name + " today go to school SWIMMING");

    }

    person.cookWhatDishToday() = function(vagetable, meet) {
        if (vagetable === "cabbage" && meet === "pork") {
            console.log(person.name + " can cook cabbage fry pork");
        } else if (vagetable === "eggplant" && meet === "beef") {
            console.log(person.name + " can cook beef fry eggplant today")
        } else {
            console.log(person.name + " cannot cook today, becasuse he only can cooke cabbage fry pork and beef fry eggplant");
        }

    }

    return person;
}
let oli = createPerson('Oliva', 18, 'Female');
let ali = createPerson('Alex', 19, 'Female');
console.log(oli);
console.log(ali);
ali.cookWhatDishToday("cabbage", "pork");
ali.goToSchool("SWIM");
ali.ifCanSing("rrr", "bb", "gganm");