'use strict';

function makeGallery(elemId) {
	function prev(current){
		let nextImage = current.nextElementSibling || images.firstElementChild;
		nextImage.classList.add('active');
		current.classList.remove('active');
	}

	function next(current){
		let prevImage = current.previousElementSibling || images.lastElementChild;
		prevImage.classList.add('active');
		current.classList.remove('active');
	}

	let elem = document.getElementById(elemId),
		images = document.createElement('div');


	images.append(...elem.querySelectorAll('img'));

	elem.classList.add('gallery');
	elem.append(images);
	elem.insertAdjacentHTML('afterbegin',`<span class="arrow prev">&lt;</span>`);
	elem.insertAdjacentHTML('beforeend',`<span class="arrow next">&gt;</span>`);

	images.firstElementChild.classList.add('active');


	elem.addEventListener('click', event => {  //Так как используется Делигирование необходим объект event
		if (event.target.matches('img')){
			next(event.target);
		}
	});

	elem.addEventListener('click', event => {
		if (event.target.classList.contains('arrow')){
			let active = images.querySelector('.active');

			event.target.classList.contains('prev') ? prev(active) : next(active);
		}
	});

}


document.addEventListener('DOMContentLoaded', () => {
	makeGallery('gallery');
});
