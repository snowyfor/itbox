/*
UPDATE from V1: see data.json & index.js

run 'node index.js show' in Terminal
*/

// Process Argv : to get input from Terminal
// Conditional : show, add, delete, update

const command = process.argv[2];
const params = process.argv.slice(3);

switch (command) {
    case 'show':
        // console.log("Command show");
        const fs = require('fs');
        let data = fs.readFileSync('./data.json');
        let todos = JSON.parse(data);
        console.log(todos);
        break;
    case 'add':
        console.log("Command add");
        break;
    case 'delete':
        console.log("Command delete");
        break;
    case 'update':
        console.log("Command update");
        break;
    default:
        console.log("Enter the correct command!")
        break;
}