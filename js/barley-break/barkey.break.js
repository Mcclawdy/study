'use strict';

class Knuckle {
	//костяшка
	constructor(num, row, col){
		this.num = num;
		this.row = row;
		this.col = col;
		this.render(); //вызыв метода для мгновенной отрисовки
		this.move(row, col);
	}

	render() {
		//отрисовка элемента
		this.elem = document.createElement('div');
		this.elem.className = 'knuckle';
		this.elem.textContent = this.num;
	}

	move(row, col) {
		//перемещает костяшку на указанные координаты
		this.row = row;
		this.col = col;
		this.elem.style.top = row * 25 + '%';
		this.elem.style.left = col * 25 + '%';
		this.elem.dataset.row = row;
		this.elem.dataset.col = col;
	}
}

class Field {
	//игровое поле
	constructor(options) {
		options = options || {};

		this.rows = options.rows || 4;
		this.cols = options.cols || 4;
		this.grid = Array.from(
			Array(this.rows), () => Array(this.cols)
		);
		this.render();
	}

	exists(row, col) {
		//возвращает true, если координаты попадают в поле
		return !(row < 0 || col < 0 || row >= this.rows || col >= this.cols)
	}
	render() {
		this.elem = document.createElement('div');
		this.elem.className = 'field';

		for (let i = 0; i <this.rows * this.cols - 1; i++) {
			let row = Math.floor(i / this.rows),
				col = i % this.cols,
				knuckle = new Knuckle(i + 1, row, col);

			this.grid[row][col] = knuckle; //программная сетка
			this.elem.append(knuckle.elem); // DOM сетка (визуальная часть)
		}
		this.empty = new Knuckle('', this.rows - 1, this.cols - 1); //пустая костяшка
	}
}

class Game { 
	//игровой процесс
	constructor(elemId) {
		this.field = new Field();
		this.starter = false; // флаг начали игру или нет
		this.render(elemId)
	}

	render(elemId) {
		this.elem = document.getElementById(elemId);
		this.elem.classList.add('game');
		this.elem.append(this.field.elem);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	let game  = new Game('game')
});