const fs = require('fs');

class Todo {
    constructor(id, task, status) {
        this.id = id;
        this.task = task;
        this.status = status;
    }
    static getTodos() {
        let data = fs.readFileSync('./data.json');
        let parsedData = JSON.parse(data);
        let todos = parsedData.map(el => {
            const {id, task, status} = el;
            return new Todo(id, task, status);
        })
        return todos;
        // so it'll return 'Todo' instance
    }
    static show() {
        let todos = this.getTodos();
        return todos;
    }
}
   
module.exports = Todo;