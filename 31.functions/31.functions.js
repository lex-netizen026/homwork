// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

function calculateFinalPrice(base_price, discount, tax) {
	const total =
		base_price * ((100 - discount) * 0.01) * tax +
		base_price * ((100 - discount) * 0.01);
	return total;
}

const result = calculateFinalPrice(100, 10, 0.2);
console.log(result);

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

// function checkAccess(user_name, password) {
// 	if (user_name == "admin" && password == "123456") {
// 		return "Доступ разрешен";
// 	} else {
// 		return "Доступ запрещен";
// 	}
// }

// let message = checkAccess(prompt("имя"), prompt("пароль"));
// console.log(message);

const checkAccess = function (user_name, password) {
	return user_name === "admin" && password === "123456"
		? "Доступ разрешен"
		: "Доступ запрещен";
};

console.log(checkAccess(prompt("имя"), prompt("пароль")));


// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

// function getTimeOfDay(time) {
// 	if (time >= 0 && time <= 5) {
// 		return "Ночь";
// 	} else if (time > 5 && time <= 11) {
// 		return "Утро";
// 	} else if (time > 11 && time <= 17) {
// 		return "День";
// 	} else if (time > 17 && time <= 23) {
// 		return "Вечер";
// 	} else {
// 		return "Некорректное время";
// 	}
// }

// let message2 = getTimeOfDay(+prompt("время"));
// console.log(message2);

const getTimeOfDay = (time) => {
	if (time < 0 || time > 23) return "Некорректное время";
	if (time <= 5) return "Ночь";
	if (time <= 11) return "Утро";
	if (time <= 17) return "День";
	return "Вечер";
};

console.log(getTimeOfDay(+prompt("время")));


// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

// function findFirstEven(num1, num2) {
//   for (let i = num1; i <= num2; i++) {
//     if (i % 2 == 0) {
//       return i
//     }
//   }
//     return "Чётных чисел нет";
//   }
// }

// console.log(findFirstEven(-5, 9));


(function (num1, num2) {
	for (let i = num1; i <= num2; i++) {
		if (i % 2 === 0) {
			console.log(i);
			return;
		}
	}
	console.log("Чётных чисел нет");
})(-5, 9);