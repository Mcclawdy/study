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
        </div>
        `;
    return modal;
}

let modalWindow = createModal('Hello', '<p>This is Modal window</p>');

document.body.append(modalWindow); //Вставка в DOM

