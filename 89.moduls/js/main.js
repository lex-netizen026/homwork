import { getTodosFromLocalStorage, setTodosToLocalStorage } from "./storage.js";
import { createTodo } from "./service.js";
import { renderTodos, createTodoElement } from "./dom.js";
import { form, input, todosNew } from "./dom.js";



const todos = getTodosFromLocalStorage() || [];


const handleCreateTodo = (todos, text) => {
	const todo = createTodo(todos, text);
	const todoElement = createTodoElement(todo, todos);
  setTodosToLocalStorage(todos);
	todosNew.append(todoElement);
};

document.addEventListener('DOMContentLoaded', () => {
  renderTodos(todos, todosNew)
})

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const text = input.value.trim();
	if (!text) return;

	handleCreateTodo(todos, text);

	input.value = "";
});


