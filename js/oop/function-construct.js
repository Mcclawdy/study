'use strict';

//todo: функуцкции - конситрукторы

function Rectange(x1, y1, x2, y2, color='black') {
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
	this.color= color;

	this.fill = function (color) {
		this.color = color;
	};

	this.move = function(dx, dy) {
		this.x1 += dx;
		this.y1 += dy;
		this.x2 += dx;
		this.y2 += dy;
	};
}

let rect1 = new Rectange(0, 1, 10, 20),
	rect2 = new Rectange(1, 2, 11, 21);

console.log(rect1, rect2);

//todo : Прототип

console.log(Object.getPrototypeOf({}))
console.log(Object.getPrototypeOf([]))

function Magazine(maxBullets) {
	this.numberBullets = this.maxBullets = maxBullets;
}

Magazine.prototype.gunshot = function () {
	--this.numberBullets;
};

Magazine.prototype.reload = function () {
	this.numberBullets = this.maxBullets;
};

let miniGun = new Magazine(10);
console.log(miniGun);

//todo: Как создать объект с указанным прототипом и свойствами

let config = Object.create(null);
config.clientID = 123;
config.secretKey = 456;
console.log(config);