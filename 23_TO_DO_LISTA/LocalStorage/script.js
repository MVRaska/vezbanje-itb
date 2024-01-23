// pamcenje/upisivanje/smestanje u lokalnoj memoriji

localStorage.setItem('ime', 'Stefan');
localStorage.setItem('grad', 'Nis');

//izmena/update u lokalnoj memoriji

localStorage.setItem('grad', 'Leskovac');

// ako postoji neki key u localStorage-u onda vrsi update
// ako ne postoji onda vrsi upis


// preuzimanje iz lokalne memorije

let unetoIme = localStorage.getItem('ime');
console.log(unetoIme);
console.log(localStorage.getItem('grad'));

console.log(localStorage.getItem('godine'));  //vraca null jer kljuc gonine ne postoji u localStorage

localStorage.removeItem('grad');