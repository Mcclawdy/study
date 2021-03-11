var btnBack = document.querySelector('.slider__btns--back');
var btnNext = document.querySelector('.slider__btns--next');
var images = document.querySelectorAll('.slider__photos--image');
var i = 0;
btnBack.onclick = function (){
	images[i].style.display = 'none';
	i--;
	if (i < 0) {
		i = images.length - 1;
	} 
	images[i].style.display = 'block';
	

}
btnNext.onclick = function (){
	images[i].style.display = 'none';
	i++;
	if (i>=images.length) {
		i = 0;
	}
	images[i].style.display = 'block';
};


var loadMore = document.querySelector('.loadMore__btn');
var photos = document.querySelectorAll('.loadMore__item');
var x;
loadMore.onclick = function showBlocks(){
	
	for (x = 0; x < photos.length; x++) {
		photos[x].style.display = 'block';
	}
}

