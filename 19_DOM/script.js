console.log(document); // document je objekat
console.log(document.body); // body svojstvo document objekta je objekat
console.log(document.head);

let el = document.getElementById('p2');
console.log(el);  //jedinstveni el iz DOM stabla

let el2 = document.getElementsByClassName('par');
console.log(el2); //HTML kolekcija iz DOM stabla

//pristup elementima HTML kolekcije

for(let i = 0; i< el2.length; i++) {
    console.log(el2[i]);
}

//HTML kolekcije nemaju forEach petlju

/*
el2.forEach(el => {
    console.log(el);  //greska  
});
*/

let niz = Array.from(el2);
niz.forEach(el => {
    console.log(el);
});

let el3 = document.getElementsByTagName('p');  //vraca HTML kolekciju
console.log(el3);

let el4 = document.getElementsByName('p'); //vraca Node listu
console.log(el4);

el4.forEach(e => {
    console.log(e);
});
console.log(el4[0]);

//Array (forEach), HTML Collection, NodeList (forEach)


let t1 = document.querySelector('#p2');
console.log(t1);

t2 = document.querySelector('.par');
console.log(t2);

let t3 = document.querySelectorAll('.par');
console.log(t3); //vraca Node listu

t3.forEach(e => {
    console.log(e);
});

let t4 = document.querySelectorAll('div p.par');
console.log(t4);



///////////////////////////////
// vezba
/*
Dohvatiti prvi paragraf na stranici.
Dohvatiti prvi div tag sa klasom „error“.
Dohvatiti poslednji red u tabeli.
Dohvatiti sve linkove na stranici.
Dohvatiti sve slike na stranici.
Sve elemente ispisati u konzoli.
*/

let prviParagraf = document.getElementsByTagName('p')[0];
console.log(prviParagraf);

let prviErrorDiv = document.querySelector('div.error');
console.log(prviErrorDiv);

let redoviTabele = document.querySelectorAll('table tr');
let poslednjiRedTabele = redoviTabele[redoviTabele.length - 1];
console.log(poslednjiRedTabele);

let linkovi = document.querySelectorAll('a');
console.log(linkovi);

let slike = document.querySelectorAll('img');
console.log(slike);


////////////////////////////////////////

let link = document.querySelector('a');
link.innerHTML = '<span style="font-weight;">Novi text</span>prvog linka';
// link.href = 'https://www.google.com';

link.setAttribute('href', 'https://google.com');

// link.target = '_blank';

link.setAttribute('target', '_blank');

link.id = 'pera';

linkovi.forEach(link => {
    // link.style.color = 'red';
    // link.style.fontSize = '18px';
    link.setAttribute('style', 'color: red; font-size: 18px; text-decoration: none;');
});

//////////////////////////////////

//vezbanje
//slajd 8

let paragrafi = document.querySelectorAll('p');

paragrafi.forEach(paragraf => {
    paragraf.innerHTML += 'VAZNO!!!';
});

let divError = document.querySelectorAll('div.error');
divError.forEach(div => {
    div.innerHTML += '<h1>Greska!</h1>';
    div.style.color = 'red';
})

paragrafi.forEach((paragraf, i) => {
    paragraf.innerHTML += (i + 1) ** 2;
});

for(let i = 0; i < slike.length; i++) {
    slike[i].setAttribute('alt', `deciji crtez ${i + 1}`);
}

paragrafi.forEach(paragraf => {
    paragraf.style.color = 'violet';
})

paragrafi.forEach((paragraf, i) => {
    if(i % 2 == 0) {
        paragraf.style.background = 'green';
    } else {
        paragraf.style.background = 'red';
    }
});

/* 9. slajd
-Svim linkovima na stranici postaviti padding na 5px, font size na 18px i text-decoration na none.
Parnim linkovima staviti zelenu pozadinsku boju i ljubicastu boju teksta, a neparnim linkovima plavu pozadinsku boju i belu boju teksta.
-Svim slikama na stranici koja su sa ekstenzijom .png, postaviti okvir na debljinu 2px i crvenu boju. 
-Svakom linku na stranici promeniti target svojstvo na sledeći način: ako je bilo _blank, postaviti na _top, a ako je bila neka vrednost različita od _blank, ili uopšte nije bilo postavljeno, tada postaviti na _blank. 
*/

linkovi.forEach((link, i) => {
    link.style.padding = '5';
    link.style.fontSize = '18px';
    link.style.texDecoration = 'none';

    if(i % 2 == 0) {
        link.style.backgroundColor = 'green';
        link.style.color = 'violet';
    } else {
        link.style.backgroundColor = 'blue';
        link.style.color = 'white';
    }
});

slike.forEach(slika => {
    if(slika.src.includes('.jpg')) {
        slika.style.border = '2px solid red';
    }
});

linkovi.forEach(link => {
    if(link.target == '_blank') {
        link.target = '_top';
    } else {
        link.target = '_blank';
    }
});

/* 10. slajd
Napraviti niz od najmanje tri imena. Proći nizom i imena ispisati:
-Svako u novom linku. Ako ime počinje na slovo „S“, link se otvara u novom tabu, a inače se otvara na istoj stranici.
-U listi kao stavke liste. Naizmenično stavke liste obojiti sa dve različite boje.
-U jednoj koloni tabele. Postaviti okvir, marginu i pading ćelijama tabele.
*/

let imena = ['Mika', 'Jevrem', 'Mirjana', 'Srecko'];

imena.forEach(ime => {
    document.body.innerHTML += `<a href=''>${ime}</a>`;
    if(ime[0] == 'S') {
        document.body.innerHTML += `<a href='' target='_blank'>${ime}</a>`;
    }
});

let lista = document.getElementById('lista');

imena.forEach((ime, i) => {
    let stavka = `<li style='color: pink'>${ime}</li>`;
    if(i % 2 == 0) {
        stavka = `<li style='color: yellow'>${ime}</li>`;
    }
    lista.innerHTML += stavka;
});

let tabela = document.getElementById('tabela');
tabela.style.borderCollapse = 'collapse';

imena.forEach(ime => {
    tabela.innerHTML += `<tr><td style='border: 1px solid black; margin: 5px; padding: 5px;'>${ime}</td></tr>`;
});

/////////////////////////////////////

let div = e1.parentNode;
console.log(div);
console.log(div.childNodes);
console.log(div.childNodes[1]);

div.childNodes.forEach(e => {
    let tip = e.nodeName;
    if(tip != '#text') {
        console.log(e);
    }
});