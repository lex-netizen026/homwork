"use strict";

// {
//   id:1,
//   text: 'Todo',
//   is_completed: false
// }

const todos = [];

const todoKeys = {
	id: "id",
	text: "text",
	is_completed: "is_completed",
};

const getNewTodoId = (todos) => {
	return (
		todos.reduce((maxId, todo) => {
			if (todo[todoKeys.id] > maxId) {
				return todo[todoKeys.id];
			} else {
				return maxId;
			}
		}, 0) + 1
	);
};

const errTodoNotFound = (todoId) => `Todo with id ${todoId} is not found`;

const createTodo = (todos, text) => {
	const newTodo = {
		[todoKeys.id]: getNewTodoId(todos),
		[todoKeys.text]: text,
		[todoKeys.is_completed]: false,
	};
	todos.push(newTodo);
	return newTodo;
};

const completeTodoById = (todos, todoId) => {
	const todo = todos.find((todo) => todo[todoKeys.id] === todoId);
	if (todo === undefined) {
		console.error(errTodoNotFound(todoId));
		return null;
	}
	todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
	return todo;
};

const deleteTodoById = (todos, todoId) => {
	const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
	if (todoIndex === -1) {
		console.error(errTodoNotFound(todoId));
		return todos;
	}
	todos.splice(todoIndex, 1);
	return todos;
};
