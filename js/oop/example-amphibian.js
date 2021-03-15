'use strict';

function Car(vendor) {
	this.vendor = vendor;
	this.transmission = new Map([
		['P', 'Parking'],
		['R', 'Reverse'],
		['N', 'Neutral'],
		['D', 'Drive'],
		['M', 'Manual'],
	]);
	this.currentTransmission = this.transmission.get('P')
}

Car.prototype.shiftTransmission = function(value) {
	if (this.transmission.has(value)) {
		this.currentTransmission = this.transmission.get(value);
	}
};

Car.prototype.drive = function() {
	console.log('Выполняем движение')
};

function Amphibian(vendor){
	//.call(context, arg1, arg2, arg3)]
	//.apply(context, [arg1, arg2, arg3])
	Car.call(this, vendor); //Вызвали родительский констуктор
	this.onWater = false;
}

//наследование прототипа
Amphibian.prototype = Object.create(Car.prototype);
//изменение конструктора (после использования чужого прототипа появляется конструктор объекта который мы унаследовали)
Amphibian.prototype.constructor = Amphibian;

Amphibian.prototype.drive = function () {
	if (this.onWater) {
		console.log('Начинаем плавание');
	}else{
		Car.prototype.drive.call(this); //вызов родительского метода drive
	}
}


let car = new Amphibian('Жигулез-Водорез');
car.shiftTransmission('D');
car.drive();
car.onWater = true;
car.drive();	
console.log(car instanceof Car);
console.log(car instanceof Amphibian);
