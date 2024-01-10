/*
-Svim parnim paragrafima na stranici dodati klasu error, a svim neparnim paragrafima dodati klasu success
-Tekst u paragrafima naizmenično pisati veličinom 15px, veličinom 20px i veličinom od 25px.
-Svim paragrafima čiji tekst sadrži reč error, postaviti klasu na error, svim paragrafima čiji tekst sadrži reč success, postaviti klasu na success. Ostale klase paragrafa ne modifikovati.
 if(p.textContent.includes(’success’))
-Svim paragrafima koji imaju klasu error skloniti tu klasu, a svim paragrafima koji nemaju klasu error dodati tu klasu.
*/

let paragrafi = document.querySelectorAll('p');

paragrafi.forEach((paragraf, i) => {
    if(i % 2 == 0) {
        paragraf.classList.add('error');
        paragraf.style.fontSize = '15px';
    } else {
        paragraf.classList.add('success');
        paragraf.style.fontSize = '25px';
    }
});

paragrafi.forEach(paragraf => {
    if(paragraf.textContent.includes('error')) {
        paragraf.classList.add('success');
    } else if(paragraf.textContent.includes('error')) {
        paragraf.classList.add('success');
    }
});

paragrafi.forEach(paragraf => {
    paragraf.classList.toggle('error');
});

//Dodati novi div tag dokumentu.

let noviDiv = document.createElement('div');
noviDiv.innerHTML = 'Div kreiran u JS-u';
noviDiv.style.background = 'green';
document.body.appendChild(noviDiv);

let noviNaslov = document.createElement('h3');
noviNaslov.innerHTML = 'Novi naslov';
noviDiv.appendChild(noviNaslov);

//Formirati ul listu sa stavkama čiji je sadržaj proizvoljan tekst, i dodati je div elementu.

let lista = document.createElement('ul');
noviDiv.append(lista);

let li1 = document.createElement('li');
li1.innerHTML = 'Prva stavka liste';
let li2 = document.createElement('li');
li2.innerHTML = 'Druga stavka liste';
let li3 = document.createElement('li');
li3.innerHTML = 'Treca stavka liste';

lista.append(li1, li2, li3);

// Iz ul liste izbaciti prvu stavku.

// lista.removeChild(li1);
// lista.removeChild(lista.firstChild);
lista.removeChild(lista.childNodes[0]);

// U ul listi zameniti drugu stavku liste.

let li4 = document.createElement('li');
li4.innerHTML = 'Cetvrta stavka liste';

lista.replaceChild(li4, li3);

// Dodati još jednu stavku ul listi, pri čemu je sadržaj stavke slika.

let li5 = document.createElement('li');
lista.appendChild(li5);
let slika = document.createElement('img');
slika.src = '/deciji crtez 1.jpg';
slika.alt = 'slika';
li5.appendChild(slika);