import Auto from './moduli/auto.js';

let a1 = new Auto('audi', 'bela', true);
console.log(a1); //a1.m_marka, a1._boja, a1._imaKrov
a1.sviraj();

let a2 = new Auto('peugeot', 'plava', false); //a2_marka, a2._boja, a2._imaKrov
console.log(a2._marka);
console.log(a2._boja);
console.log(a2._imaKrov);
a2.sviraj();

a2.marka = 'Opel'; // seter - pristupa mu se kao polju, a zapravo se poziva metoda
console.log(a2._marka);

a1.marka ='';
console.log(a1._marka);

a1.boja = '';
console.log(a1._boja);
console.log(a1.boja);

let a3 = new Auto('', '', '');
console.log(a3);