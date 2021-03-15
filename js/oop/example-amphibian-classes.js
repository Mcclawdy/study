'use strict';

//todo: классы

class Car {
    constructor(vendor){
        this.vendor = vendor;
        this.transmission = new Map([
            ['P', 'Parking'],
            ['R', 'Reverse'],
            ['N', 'Neutral'],
            ['D', 'Drive'],
            ['M', 'Manual'],
        ]);
        this.currentTransmission = this.transmission.get('P');
    }
    shiftTransmission(value) {
        if (this.transmission.has(value)) {
            this.currentTransmission = this.transmission.get(value);
        }
    }
    
    drive() {
        console.log('Выполняем движение');
    }
}

class Amphibian extends Car {
     constructor(vendor) {
        super(vendor);
        this.onWater = false;
    }

    drive() {
        if (this.onWater) {
            console.log('Начинаем плавание');
        }else {
            super.drive();
        }
    }
}

let car = new Amphibian('Жигулез-Водорез');

car.shiftTransmission('D');
car.drive();
car.onWater = true;
car.drive();
