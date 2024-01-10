import {generateImage} from './general.js';

let generateList = parent => {
    let lista  = document.createElement('ul');
    parent.appendChild(lista);
    return lista;
}

let generateListItem = (parent, src) => {
    let listItem = document.createElement('li');
    parent.appendChild(listItem);
    let slika = generateImage(src);
    listItem.appendChild(slika);
    return listItem;
}

export {generateList, generateListItem};