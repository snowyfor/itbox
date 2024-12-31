/*
(1)
> Read File data.json
> console.log(parsedData);
> Result
List Students :
1. Andi, 90
2. Charlie, 85

(2)
> Read File data2.json
> console.log(parsedData2);
> Result
Ani
Jakarta
reading

*/ 
// 1
const fs = require('fs');
let data = fs.readFileSync('./web-dev-intermediate/json-exercises/data.json',
    'utf8');
 
let parsedData = JSON.parse(data);
console.log(parsedData);

console.log("List Students:");
parsedData.forEach(data => {
    console.log(`${data.id}. ${data.name}, ${data.score}`);
});

// 2
console.log('\n');
let data2 = fs.readFileSync('./web-dev-intermediate/json-exercises/data2.json',
    'utf8');

let parsedData2 = JSON.parse(data2);
console.log(parsedData2);

console.log(parsedData2.name);
console.log(parsedData2.address.city);
console.log(parsedData2.hobby[0]);
