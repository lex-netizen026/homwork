import { todoKeys } from "./constants.js";
import { completeTodoById, deleteTodoById } from "./service.js";
import { setTodosToLocalStorage } from "./storage.js";
import { createTodo } from "./service.js";


export const form = document.querySelector("form");

export const input = document.querySelector("input");

export const todosNew = document.querySelector(".todos");

export const createTodoElement = (todo, todos) => {
	const li = document.createElement("li");
	li.classList.add("todo");
	li.dataset.id = todo[todoKeys.id];

	li.innerHTML = `
    <div class="todo-text">${todo.text}</div>
    <div class="todo-actions">
      <button class="button-complete button">&#10004;</button>
      <button class="button-delete button">&#10006;</button>
    </div>
  `;

	const initialTodo = todosNew.querySelector(".initial");

	if (initialTodo) {
		initialTodo.remove();
	}

	const completeBtn = li.querySelector(".button-complete");
	completeBtn.addEventListener("click", () => {
		completeTodoById(todos, todo.id);
		setTodosToLocalStorage(todos);
		li.classList.toggle("completed");
	});

	const deleteBtn = li.querySelector(".button-delete");
	deleteBtn.addEventListener("click", () => {
		deleteTodoById(todos, todo.id);
		setTodosToLocalStorage(todos);
		li.remove();
	});

	return li;
};

export const renderTodos = (todos, container) => {
	container.innerHTML = "";
	todos.forEach((todo) => {
		const todoElement = createTodoElement(todo, todos);
		if (todo[todoKeys.is_completed]) {
			todoElement.classList.add("completed");
		}
		container.append(todoElement);
	});
};

