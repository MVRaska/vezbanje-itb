let pitanje1 = {
    tekst: 'Koji je glavni grad Kipra?',
    odgovori: ['Limasol', 'Pafos', 'Larnaka', 'Nikozija'],
    indeksKorektnogOdgovora : 3
};

let pitanje2 = {
    tekst: 'Koji je glavni grad Lihtenštajna?',
    odgovori: ['Vaduz', 'Ščan', 'Trisen', 'Balzers'],
    indeksKorektnogOdgovora : 0
};

let pitanje3 = {
    tekst: 'Koji je glavni grad Mongolije?',
    odgovori: ['Moron', 'Erdenet', 'Darkan', 'Ulan Bator'],
    indeksKorektnogOdgovora : 3
};

let pitanje4 = {
    tekst: 'Koji je glavni grad Papue Nove Gvineje?',
    odgovori: ['Lae', 'Port Moresbi', 'Arava', 'Mount Hagen'],
    indeksKorektnogOdgovora : 1
};

let pitanje5 = {
    tekst: 'Koji je glavni grad Australije?',
    odgovori: ['Melburn', 'Brizbejn', 'Pert', 'Kanbera'],
    indeksKorektnogOdgovora : 3
};

let pitanje6 = {
    tekst: 'Koji je glavni grad Tanzanije?',
    odgovori: ['Tabora', 'Singida', 'Dodoma', 'Dar-es-Salam'],
    indeksKorektnogOdgovora : 2
};

let pitanje7 = {
    tekst: 'Koji je glavni grad Kanade?',
    odgovori: ['Toront', 'Montreal', 'Edmonton', 'Otava'],
    indeksKorektnogOdgovora : 3
};

let pitanje8 = {
    tekst: 'Koji je glavni grad Libana?',
    odgovori: ['Tripoli', 'Bejrut', 'Sidon', 'Tir'],
    indeksKorektnogOdgovora : 1
};

let pitanje9 = {
    tekst: 'Koji je glavni grad Maroka?',
    odgovori: ['Kazablanka', 'Meknes', 'Rabat', 'Marakeš'],
    indeksKorektnogOdgovora : 2
};

let pitanje10 = {
    tekst: 'Koji je glavni grad Urugvaja?',
    odgovori: ['Montevideo', 'Salto', 'Sjudad da le Kosta', 'Pajsandu'],
    indeksKorektnogOdgovora : 0
};

let pitanja = [pitanje1, pitanje2, pitanje3, pitanje4, pitanje5, pitanje6, pitanje7, pitanje8, pitanje9, pitanje10];

let mixPitanja = [];

for(let i = pitanja.length - 1; i >= 0 ; i--) {
    let randomIndex = Math.floor(Math.random()* (i + 1));
    mixPitanja[i] = pitanja[randomIndex];
    pitanja[randomIndex] = pitanja[i];
}

let forma = document.getElementById('forma');

for(let i = 0; i < 5; i++) {
    forma.innerHTML += `<br><label>${i+1}. ${mixPitanja[i].tekst}</label><br>`;
    
    mixPitanja[i].odgovori.forEach((odgovor, j) => {
        if(j == mixPitanja.indeksKorektnogOdgovora) {
            if(j == 0) {
                forma.innerHTML += `<input type='radio' name='${i+1}' value='true' checked> ${odgovor}<br>`;
            } else {
                forma.innerHTML += `<input type='radio' name='${i+1}' value='true'> ${odgovor}<br>`;
            }
        } else {
            if(j == 0) {
                forma.innerHTML += `<input type='radio' name='${i+1}' value='false' checked> ${odgovor}<br>`;
            } else {
                forma.innerHTML += `<input type='radio' name='${i+1}' value='false'> ${odgovor}<br>`;
            }
        }
    });
}

let btnPosaljiOdgovore = document.createElement('input');
btnPosaljiOdgovore.type = 'submit';
btnPosaljiOdgovore.value = 'Pošalji odgovore';

let btnNovaPitanja = document.createElement('input');
btnNovaPitanja.type = 'submit';
btnNovaPitanja.value = 'Nova pitanja';
btnNovaPitanja.style.marginLeft = '10px';

forma.appendChild(btnPosaljiOdgovore);
forma.appendChild(btnNovaPitanja);

let ispis = document.getElementById('ispis');

btnPosaljiOdgovore.addEventListener('click', (e) => {
    e.preventDefault();

    for(let i = 0; i < 5; i++) {
        let btnRadio = forma.querySelectorAll(`input[name="${i + 1}"]`);
        let tacnost = false;
        console.log(btnRadio);

        btnRadio.forEach(radio => {
            if(radio.checked && radio.value) {
                tacnost = true;
            } 
        });

        if(tacnost) {
            ispis.innerHTML += `<p style='color: green;'>Tacno ste odgovorili na ${i + 1}. pitanje</p>`;
        } else {
            ispis.innerHTML += `<p style='color: red;'>Niste tacno odgovorili na ${i + 1}. pitanje</p>`;
        }
    }
});

    