const fs = require('fs');

class Todo {
    constructor(id, task, status) {
        this.id = id;
        this.task = task;
        this.status = status || false;
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
    static add(todo) {
        let todos = this.getTodos();
        let id = todos[todos.length-1].id + 1;
        let task = todo[0];
        let temp = new Todo(id, task)
        todos.push(temp);
        // console.log(todos);
        this.save(todos);
    }
    static delete(todo) {
        // console.log(todo); //testing with: run 'node index.js delete 3' in Terminal
        let todos = this.getTodos();
        let id = Number(todo[0]);
        todos = todos.filter(todo => todo.id !== id);
        //console.log(todos);  //testing with this command: run 'node index.js delete 3' THEN run 'index.js delete 2'
        this.save(todos);
    }
    static update(todo) {
        // console.log(todo)  //testing with: run 'node index.js update 3 "Eat Together"'
        let todos = this.getTodos();
        let id = Number(todo[0]);
        let task = todo[1];
        todos = todos.map(todo => {
            if(todo.id === id) {
                todo.task = task;
            }
            return todo;
        })
        // console.log(todos);  //testing with: run 'node index.js update 3 "Eat Together"'
        this.save(todos);
    }
    // save data to JSON
    static save(data) {
        fs.writeFileSync('./data.json',JSON.stringify(data, null, 3))
    }
}
   
module.exports = Todo;