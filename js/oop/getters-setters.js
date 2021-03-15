"use strict";

// геттеры и сеттеры

let account = {
	_email: 'mail@mail.ru',
	firstname: "Tod",
	lastname: "Govard",

	get fullname() {
		return `${this.firstname} ${this.lastname}`
	},

	set fullname(value){
		[this.firstname, this.lastname] = value.split(' ');
	}

};



console.log(account.fullname);
account.fullname = 'Даб Дабович';
console.log(account.fullname);
console.log(Object.getOwnPropertyDescriptor(account, 'fullname'));

Object.defineProperty(account, 'email', {
	enumerable: true,
	get() {
		return this._email;
	},
	set(value) {
		const  pattern = /^\w+@\w+\.\w+$/i;
	
		if (!value.match(pattern)) {
			throw new Error('Incorrect E-mail.');
		}

		this._email = value;
	},
});

account.email = 'aa@aa.ru';
console.log(account.email);