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

// import {generateList, generateItem as generateListItem} from './moduli/list.js';

let src1 = './img/cvece1.jpg';
let src2 = './img/daisy.jpg';
let src3 = './img/lily1.jpg';

let roditelj = document.createElement('div');
document.body.appendChild(roditelj);

// let lista = generateList(roditelj);

// generateListItem(lista, src1);
// generateListItem(lista, src2);
// generateListItem(lista, src3);


// import {generateTable, generateTableRow, generateItem as generateTableItem} from './moduli/table.js';

// let t = generateTable(roditelj);
// let red = generateTableRow(t);
// let red1 = generateTableRow(t);
// generateTableItem(red, src1);
// generateTableItem(red, src2);
// generateTableItem(red, src3);
// generateTableItem(red1, src2);
// generateTableItem(red1, src3);
// generateTableItem(red1, src1);

import * as List from './moduli/list.js';
import * as Table from './moduli/table.js';

let lista = List.generateList(roditelj);

List.generateItem(lista, src1);
List.generateItem(lista, src2);
List.generateItem(lista, src3);


let t = Table.generateTable(roditelj);
let red = Table.generateTableRow(t);
let red1 = Table.generateTableRow(t);
Table.generateItem(red, src1);
Table.generateItem(red, src2);
Table.generateItem(red, src3);
Table.generateItem(red1, src2);
Table.generateItem(red1, src3);
Table.generateItem(red1, src1);