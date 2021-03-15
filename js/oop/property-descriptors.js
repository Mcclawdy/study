"use strict";

// todo : Дескриптор свойства - содержит значение свойства и флаги

// writable - доступно для изменения значения ( записи)
// enumerable - доступно для итерации
// configurable - доступно для конфигурации

let obj = {
	defaultProperty : 1,
};

// todo: Свойство создано в объекте(литерал или конструктор)
console.log(Object.getOwnPropertyDescriptor(obj, 'defaultProperty'));

// todo:

Object.defineProperty(obj, 'createdProperty', {
	value: "You can't change me",
});
console.log(Object.getOwnPropertyDescriptor(obj, 'createdProperty'));

// obj.createdProperty = 123; //полчим ошибку

// delete object.createdProperty; //ошибка
// Object.defineProperty(obj, 'createdProperty', {writable: true}); // ошибка

Object.defineProperty(obj, 'customProperty',
{
	value: "do it",
	writable: true,
	enumerable: true,
});

obj.customProperty = 'Other';
console.assert(obj.customProperty === 'Other', 'writable is false');

console.log('Массив имен свойст ',Object.keys(obj))

// todo: Как создать сразу несколько свойств с помощью defineProperties?


function createCustomer(id, email, balance) {
	let customer = {
		pay(amount) {
			this.balance -= amount;
		}
	};

	Object.defineProperties(customer, {
		id: {
			value: id,
		},
		email: {
			value: email,
			enumerable: true,
		},
		balance: {
			value: balance,
			writable: true,
			enumerable: true,
		},
	});

	return customer;
}

let customer = createCustomer(1, 'mail@example.ru', 100);

customer.pay(50);
console.log(`Баланс покупателя с ID ${customer.id} равен ${customer.balance}`)

console.log('Все дескрипторы свойств в виде объекта', Object.getOwnPropertyDescriptors(customer));

// todo: как сериализовать объект в JSON строку?
// в результат попадают только перечисляемые(enumerable) свойства

console.log(JSON.stringify(customer))