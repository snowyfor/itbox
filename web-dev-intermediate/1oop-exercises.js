/*

> Create Class Student
Attribute: name, subjects(array), score
Method: mentionName(), mentionSubjects()
> result
let andy = new Student("Andy", ["Physics", "Chemistry"], 95);
console.log(andy); -> the above instance
andy.mentionName(); -> Andy
andy.mentionSubjects(); -> [ 'Physics', 'Chemistry' ]

Answer at line 25

*/










class Student {
    constructor(name, subjects, score) {
        this.name = name;
        this.subjects = subjects;
        this.score = score;
    }

    mentionName() {
        console.log(this.name);
    }
    mentionSubjects() {
        console.log(this.subjects);
    }
}

let andy = new Student("Andy", ["Physics", "Chemistry"], 95);
console.log(andy);
andy.mentionName();
andy.mentionSubjects();
