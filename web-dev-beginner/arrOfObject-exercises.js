/*
(1)
> Convert this two dimension array to array of object
let items = [
    ["Asus", "laptop", 7500000],
    ["Dell", "laptop", 7000000],
    ["Corsair", "ram", 1250000]
]
> result
[
    {   name : "Asus",
        type : "laptop",
        price : 7500000
    },
    {   name : "Dell",
        type : "laptop",
        price : 5000000
    },
    {   name : "Corsair",
        type : "ram",
        price : 1250000
    }
]

(2)
> Create a function to group students by class
let students = [
    ["Charlie", "A", 87],
    ["Berno", "A", 75],
    ["Andy", "B", 83],
    ["Ferdy", "B", "73"]
]
> result
[
    {   class : "A",
        students : ["Charlie", "Berno"],
        scores : [87, 75]
    },
    {   class : "B",
        students : ["Andy", "Ferdy"],
        scores : [87 75]
    }
]
*/
// 1
function changeToArrayOfObject(array2D) {
    let result = [];
    let tempObj = {};

    for(let i = 0; i<array2D.length; i++) {
        tempObj.name = array2D[i][0];
        tempObj.type = array2D[i][1];
        tempObj.price = array2D[i][2];

        result.push(tempObj);
        tempObj = {}
    }
    return result;
}
// 2
function groupClass(array2D) {
    let result = [];
    let classA = {
        class : "A",
        students : [],
        scores : []
    };
    let classB = {
        class : "B",
        students : [],
        scores : []
    };

    for(let i = 0; i < array2D.length; i++) {
        if(array2D[i][1] == "A") {
            classA.students.push(array2D[i][0]);
            classA.scores.push(array2D[i][2]);
        } else {
            classB.students.push(array2D[i][0]);
            classB.scores.push(array2D[i][2]);
        }
    }

    result.push(classA);
    result.push(classB);

    return result;
}