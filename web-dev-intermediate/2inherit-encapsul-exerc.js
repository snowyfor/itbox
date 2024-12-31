/* (answer at line 27)

Create class Person with basic attribute:
-name
-age

Create subclass Programmer & Student and
add these attributes:
-skills in class Programmer
-scores in class Student

Use the concepts of Inheritance and Encapsulation.

*/












class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    set setName(name) {
        this._name = name
    }
    set setAge(age) {
        this._age = age;
    }
}

class Programmer extends Person {
    constructor(name, age, skills) {
        super(name, age);
        this._skills = skills;
    }
    get skills() {
        return this._skills;
    }
    set setSkills(skills) {
        this._skills = skills;
    }
}

class Student extends Person {
    constructor(name, age, scores) {
        super(name, age);
        this._scores = scores;
    }
    get scores() {
        return this._scores;
    }
    set setScores(scores) {
        this._scores = scores;
    }
}

let person1 = new Person("Andi",15)
let programmer1 = new Programmer("Charlie",21,["js"]);
let student1 = new Student("Doni",18,[87])
// console.log(person1)
console.log(programmer1.name);
console.log(student1.age);