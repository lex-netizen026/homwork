// Задание 1.
// Дан массив пользователей:
const users = [
	{ name: "Alex", age: 24, isAdmin: false },
	{ name: "Bob", age: 13, isAdmin: false },
	{ name: "John", age: 31, isAdmin: true },
	{ name: "Jane", age: 20, isAdmin: false },
];

// Добавьте в конец массива двух пользователей:

// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

users.push(
	{ name: "Ann", age: 19, isAdmin: false },
	{ name: "Jack", age: 43, isAdmin: true },
);

console.log(users);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

let len = users.length;
let sum = 0;
function getUserAverageAge(users) {
	for (let i = 0; i < users.length; i++) {
		sum += users[i].age;
	}
	return sum / len;
}

console.log(getUserAverageAge(users));

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

function getAllAdmins(users) {
	let admins = [];

	users.forEach((user) => {
		if (user.isAdmin) {
			admins.push(user);
		}
	});

	return admins;
}

console.log(getAllAdmins(users));

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

let arr = [8, 2, 7, 4, 5];
let n = 4

function first(arr, n) {
	if (n === 0) return [];
	if (n === undefined) return [arr[0]];

	return arr.slice(0, n);
}

console.log(first(arr, n))