class TodoList {
  constructor() {
        this.todos = new Map();
        this.todoContainer = document.querySelector(".todo-body");
        this.todoList = document.querySelector(".todo-list");
        this.todoInput = document.querySelector(".todoInput");
        this.removeButton = document.querySelector(".removeText");
        this.bindEvents();
    }
  markTodo(id, isChecked) {
        let obj = this.todos.get(id);
        obj.checked = !isChecked;
        this.todos.set(id, obj);
        this.render();
    }
  addTodo(text = "Blank Task") {
        let id = Date.now() + "";
        this.todos.set(id, {
            id: id,
            text: text,
            checked: false
        });
        this.render();
    }
  clean() {
        this.todos.forEach((todo, key) => {
            if(todo.checked) {
                this.todos.delete(key)
            }
        });
        this.render();
    }
}
