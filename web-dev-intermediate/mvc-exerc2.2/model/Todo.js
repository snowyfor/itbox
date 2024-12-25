const fs = require('fs');

class Todo {
    static getTodos() {
        let data = fs.readFileSync('./data.json');
        let todos = JSON.parse(data);
        return todos
    }
    static show() {
        let todos = this.getTodos();
        return todos;
    }
}
   
module.exports = Todo;