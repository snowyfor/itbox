// Exercise (Check answers on line 35)
const students = [
    [1, "Jacob", 3.5],
    [2, "Thomas", 3.0],
    [3, "James", 2.75]
]
// Minimum GPA 3.0 to Pass

// Result
/*
    1. Jacob, IPK = 3.5, Passed
    2. Thomas, IPK = 3.0, Passed
    3. James, IPK = 2.75, Failed
*/

// Code here


















// Answers

for(let i=0; i<students.length; i++) {  //iterate as many as the number of students
    if(students[i][2] >= 3.0) {  //GPA >= 3.0
        console.log(students[i][0] + ". " + students[i][1] + ", IPK = " +
            students[i][2] + ", Passed");
    } else {  //GPA < 3.0
        console.log(students[i][0] + ". " + students[i][1] + ", IPK = " +
            students[i][2] + ", Failed");
    }
}