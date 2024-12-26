/*
UPDATE from V3: see Todo.js > add() & save() section, in 'model' folder 

Note: follow the instructions below  while opening data.json
1) run 'node index.js show' in Terminal
2) run 'node index.js add "Do The Assignment"' in Terminal
3) run 'node index.js show' in Terminal
*/

// Process Argv : to get input from Terminal
// Conditional : show, add, delete, update

const command = process.argv[2];
const params = process.argv.slice(3);
// import class TodoController
const TodoController = require('./controller/TodoController')

switch (command) {
    case 'show':
        // console.log(TodoController);
        TodoController.show();
        break;
    case 'add':
        TodoController.add(params);
        break;
    case 'delete':
        TodoController.delete(params);
        break;
    case 'update':
        TodoController.update(params);
        break;
    default:
        TodoController.message("Enter the correct command!");
        break;
}