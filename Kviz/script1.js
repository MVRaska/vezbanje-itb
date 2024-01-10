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
    odgovori: ['Toronto', 'Montreal', 'Edmonton', 'Otava'],
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

let pitanje11 = {
    tekst: 'Koji je glavni grad Turske?',
    odgovori: ['Antalija', 'Istambul', 'Ankara', 'Izmir'],
    indeksKorektnogOdgovora : 2
};

let pitanje12 = {
    tekst: 'Koji je glavni grad Indije?',
    odgovori: ['Mumbaj', 'Nju Delhi', 'Kolkata', 'Čenaj'],
    indeksKorektnogOdgovora : 1
};

let pitanje13 = {
    tekst: 'Koji je glavni grad Brazila?',
    odgovori: ['Rio de Ženeiro', 'Brazilija', 'Sao Paulo', 'Salvador'],
    indeksKorektnogOdgovora : 1
};

let pitanje14 = {
    tekst: 'Koji je glavni grad Švajcarske?',
    odgovori: ['Cirih', 'Ženeva', 'Bern', 'Bazel'],
    indeksKorektnogOdgovora : 2
};

let pitanje15 = {
    tekst: 'Koji je glavni grad Izraela?',
    odgovori: ['Tel Aviv', 'Haifa', 'Jerusalim', 'Holon'],
    indeksKorektnogOdgovora : 0
};

let pitanja = [pitanje1, pitanje2, pitanje3, pitanje4, pitanje5, pitanje6, pitanje7, pitanje8, pitanje9, pitanje10, pitanje11, pitanje12, pitanje13, pitanje14, pitanje15];

let mixPitanja = [];

for(let i = pitanja.length - 1; i >= 0 ; i--) {
    let randomIndex = Math.floor(Math.random()* (i + 1));
    mixPitanja[i] = pitanja[randomIndex];
    pitanja[randomIndex] = pitanja[i];
}

let divForma = document.getElementById('forma');
let forma = document.createElement('form');
divForma.appendChild(forma);

for(let i = 0; i < 5; i++) {
    let labela = document.createElement('label'); 

    labela.innerHTML = `${i + 1}.  ${mixPitanja[i].tekst} <br>`;
    
    forma.append(labela);
    
    for(let j = 0; j < mixPitanja[i].odgovori.length; j++) {

        let btnRadio = document.createElement('input'); 
        btnRadio.type = 'radio';
        btnRadio.name = (i + 1);
        btnRadio.value = false;
        if(j == mixPitanja[i].indeksKorektnogOdgovora) {
            btnRadio.value = true;
        }
        if(j == 0) {
            btnRadio.setAttribute('checked', 'true');
        }
        forma.append(btnRadio);

        let span = document.createElement('span'); 
        span.innerHTML = ` ${mixPitanja[i].odgovori[j]}<br>`;
        forma.append(span);
    }
}

let btnPosaljiOdgovore = document.createElement('input');
btnPosaljiOdgovore.type = 'submit';
btnPosaljiOdgovore.value = 'Pošalji odgovore';

let btnNovaPitanja = document.createElement('input');
btnNovaPitanja.type = 'submit';
btnNovaPitanja.value = 'Nova pitanja';
btnNovaPitanja.style.marginLeft = '20px';

forma.appendChild(btnPosaljiOdgovore);
forma.appendChild(btnNovaPitanja);

let ispis = document.getElementById('ispis');

btnPosaljiOdgovore.addEventListener('click', (e) => {
    e.preventDefault();

    ispis.innerHTML = '';

    for(let i = 0; i < 5; i++) {
        let btnRadio_i = forma.querySelectorAll(`input[name="${i + 1}"]`);

        let tacnost = false;

        for(let j = 0; j < mixPitanja[i].odgovori.length; j++) {
            if(btnRadio_i[j].checked && btnRadio_i[j].value == 'true') {
                tacnost = true;
            } 
            btnRadio_i[j].disabled = true;
        }
        if(tacnost) {
            ispis.innerHTML += `<p style='color: green;'>Tacno ste odgovorili na ${i + 1}. pitanje</p>`;
        } else {
            ispis.innerHTML += `<p style='color: red;'>Niste tacno odgovorili na ${i + 1}. pitanje</p>`;
        }
    }
});

btnNovaPitanja.addEventListener('click', () => {
    ispis.innerHTML = '';
});