'use stict';

let menu = document.getElementById('menu'),
    elem = document.querySelector('.navbar-nav');

// console.log('parentNode', elem.parentNode);
// console.log('previousSibling', elem.previousSibling);
// console.log('nextSibling', elem.nextSibling);
// console.log('firstChild', elem.firstChild);
// console.log('lastChild', elem.lastChild);
// console.log(elem.childNodes) 

// console.log(elem);
// console.dir(elem);

// menu.dataset.status = 'OK';
// console.log(menu);


function createModal(title, body) {
    let modal = document.createElement('div');
    modal.className = 'modal-window';

    modal.innerHTML = `
        <div class="modal-window-dialog">
            <div class="modal-window-header">
                <h4 class="modal-window-title">${title}</h4>
                <button class="modal-window-close">X</button>
            </div>
            <div class="modal-window-body">${body}</div>
            <div class="modal-window-footer">
            	<button class="modal-window-close">Отмена</button>
            </div>
        </div>
        `;

    modal.addEventListener('click', event => {
    	// if (event.target.closest('button')) {
    	// 	modal.remove();
    	// };
    	if (event.target.matches('.modal-window-close')){
    		event.target.closest('.modal-window').remove();
    	};
    	
    });
    return modal;
}

function demoHandler(event) {
	console.log(this, event.target);
}

document.addEventListener('DOMContentLoaded', () => {
	let modalWindow = createModal('Hello', '<p>This is Modal window</p>');// эта строка не обязательно должна быть тут
	document.body.append(modalWindow); //Вставка в DOM, это строка ОБЯЗАТЕЛЬНО должна находится в DOMContentLoader

	let demoTable = document.getElementById('demoTable'),
		demoTd = demoTable.querySelector('.active');

	demoTd.addEventListener('click', demoHandler);
	demoTable.addEventListener('click', demoHandler);
	document.addEventListener('click', demoHandler);
});



