/* Kreirati projekat sa sledećom strukturom.
 -U modulu general.js exportovati funkciju
generateImage(src) koja formira img tag sa 
slikom na zadatoj putanji.
 -U modulu list.js exportovati funkcije:
    *generateList(parent), koja formira ul listu i dodaje je na parent element,
    *generateListItem(parent, src), koja formira stavku liste čiji je sadržaj slika na zadatoj putanji, i dodaje je na parent element.
 -U modulu table.js exportovati funkcije:
   *generateTable(parent), koja formira tabelu i dodaje je na parent element,
   *generateTableRow(parent), koja formira tr tag i dodaje ga na parent element,
   *generateTableItem(parent, src), koja formira td tag čiji je sadržaj slika na zadatoj putanji, i dodaje ga na parent element.
*/

import {generateList, generateListItem} from './moduli/list.js';

let src1 = './img/cvece1.jpg';
let src2 = './img/daisy.jpg';
let src3 = './img/lily1.jpg';

let roditelj = document.createElement('div');
document.body.appendChild(roditelj);

let lista = generateList(roditelj);

generateListItem(lista, src1);
generateListItem(lista, src2);
generateListItem(lista, src3);


import {generateTable, generateTableRow, generateTableItem} from './moduli/table.js';

let t = generateTable(roditelj);
let red = generateTableRow(t);
generateTableItem(red, src1);
generateTableItem(red, src2);
generateTableItem(red, src3);

document.body.appendChild(roditelj);