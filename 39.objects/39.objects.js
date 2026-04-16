// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

let person = {
	firstName: "Aleksandr",
	lastName: "Usoltsev",
	age: "38",
	birthCity: "Novosibirsk",
};

console.log(person);

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

function isEmpty(person) {
	for (let key in person) {
		return false;
	}
	return true;
}
const result = isEmpty(person);
console.log(result);

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

let task = {
	title: "Task_3",
	description: "Description",
	isCompleted: false,
};

function cloneAndModify(object, modifications) {
	return { ...object, ...modifications };
}

let newTask = cloneAndModify(task, {
	isCompleted: true,
	title: "Updated Task",
});

for (let key in newTask) {
	console.log(key, newTask[key]);
}

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

function callAllMethods(obj) {
	for (let key in obj) {
		if (typeof obj[key] === "function") {
			obj[key]();
		}
	}
}

const myObject = {
	method1() {
		console.log("Метод 1 вызван");
	},
	method2() {
		console.log("Метод 2 вызван");
	},
	property: "Это не метод",
};

callAllMethods(myObject);