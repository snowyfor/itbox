// import class Todo & TodoView
const Todo = require('../model/Todo');
const TodoView = require('../view/TodoView');

class TodoController {
    static show() {
        // console.log("Controller show");
        let todos = Todo.show();
        TodoView.show(todos);
    }
    static add(todo) {
        
    }
    static delete(todo) {
        
    }
    static update(todo) {

    }
    static message(msg) {
        TodoView.message(msg);
    }
}

module.exports = TodoController;