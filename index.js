class TodoList {
  constructor() {
        this.todos = new Map();
        this.todoContainer = document.querySelector(".todo-body");
        this.todoList = document.querySelector(".todo-list");
        this.todoInput = document.querySelector(".todoInput");
        this.removeButton = document.querySelector(".removeText");
        this.bindEvents();
    }
}
