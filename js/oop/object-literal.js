"use strict";

let obj = {
    prop1: 1,
    prop2: 2,
};

//todo: деструктуризация массивов(как распаковать массив в переменную)
let [firstname, lastname] = ['Linus', 'Torvalds']
console.log(firstname, lastname);

// todo: Деструктуризация объектов (как распаковать объект в переменные)
let {latitude, longtitude} = {latitude : 1.0, longtitude : 2.0};
console.log(latitude, longtitude);

let [a, b, c=0] = [1, 2],
{x, y, z=0} = {x: 1, y: 2};
console.log(a, b, c)
console.log(x, y, z)

//todo: Литерал объекта
let nameX = 'x',
	nameY = 'y',
	point = {
		[nameX]: 1,
		[nameY]: 2,
	};
console.log("point = " + point)

let posX = 1.0,
	posY = 2.0,
	coords = {posX, posY};
console.log(coords);

const returnThis = function() {
	return this;
};

console.log(returnThis());
console.assert(returnThis() === undefined, 'Включи строгий режим!');

const arrowReturnThis = () => this;
console.log(this); //лучше так не делать
console.assert(arrowReturnThis() === window, 'False')

// todo: Методы

let rectangle = {
	x1: 0,
	y1: 1,
	x2: 10,
	y2: 20,
	color: 'black',
	fill: function (color) {	
		this.color = color;	
	},
	move(dx, dy) {
		this.x1 += dx;
		this.y1 += dy;
		this.x2 += dx;
		this.y2 += dy;
	}
};

console.log(rectangle);

rectangle.fill('green');
console.log(rectangle.color);

rectangle.move(10, 5);
console.log(rectangle);