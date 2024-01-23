/*generateTable(parent), koja formira tabelu i dodaje je na parent element,
*generateTableRow(parent), koja formira tr tag i dodaje ga na parent element,
*generateTableItem(parent, src), koja formira td tag čiji je sadržaj slika na zadatoj putanji, i dodaje ga na parent element.*/

import {generateImage} from './general.js';

let generateTable = parent => {
    let tabela = document.createElement('table');
    tabela.style.borderCollapse = 'collapse';
    parent.appendChild(tabela);
    return tabela;
}

let generateTableRow = parent => {
    let red = document.createElement('tr');
    parent.appendChild(red);
    return red;
}

let generateItem = (parent, src) => {
    let celija = document.createElement('td');
    celija.style.border = '1px solid lightblue';
    celija.src = src;
    parent.appendChild(celija);
    let slika = generateImage(src);
    celija.appendChild(slika);
    return celija;
}

export {generateTable, generateTableRow, generateItem};