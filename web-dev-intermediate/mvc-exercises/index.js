// Process Argv : to get input from terminal
// Conditional : show, add, delete, update

const command = process.argv[2];
const params = process.argv.slice(3);
// const argvValue = process.argv;
// console.log(argvValue);
// console.log(command);
// console.log(params);

switch (command) {
    case 'show':
        console.log("Command show");
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