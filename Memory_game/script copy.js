let inKorisnikIme = document.getElementById('korisnickoIme');
let radios = document.querySelectorAll('input[type="radio"]');
let imgs = document.querySelectorAll('img');
let dIspisPoledjina = document.getElementById('ispisPoledjina');
let dIspisSlika = document.getElementById('ispisSlika');
let span = document.querySelector('span');
let btns = document.querySelectorAll('button');

let nizSrc = [];
for(let i = 0; i < 50; i++) {
    nizSrc[i] = i + 1;
}

let mix = niz => {
    let mixNiz =[];
    for(let i = niz.length; i > 0 ; i--) {
        let index = Math.floor(Math.random() * i);
        mixNiz[i - 1] = niz[index];
        niz[index] = niz[i - 1];
    }
    return mixNiz;
}

let mixSrc = mix(nizSrc);
let srcPolja = [];

let generisanjeSlika = brParova => {
    
    srcPolja = mixSrc.slice(0, brParova);
    srcPolja = srcPolja.concat(srcPolja);

    let mixSrcPolja = mix(srcPolja);
            
    for(let i = 0; i < mixSrcPolja.length; i++) {
        let slika = document.createElement('img');
        slika.src = `img/${mixSrcPolja[i]}.png`;
        dIspisSlika.appendChild(slika);   
        if((i + 1) % Math.sqrt(2 * brParova) == 0) {
            dIspisSlika.appendChild(document.createElement('br'));
        } 
    } 
}

let generisanjePoledjine = brParova => {
    for(let i = 0; i < 2 * brParova; i++) {
        let slika = document.createElement('img');
        slika.src = 'img/bg1.jpg';
        dIspisPoledjina.appendChild(slika);  
        if((i + 1) % Math.sqrt(2 * brParova) == 0) {
            dIspisPoledjina.appendChild(document.createElement('br'));;
        }  
    }
}

let velicinaSlika = velicina => {
    let slike = document.querySelectorAll('img');
    slike.forEach(slika => {
        slika.style. width = velicina;
        slika.style. height = velicina;
    });
}
generisanjePoledjine(8);
generisanjeSlika(8);
velicinaSlika('80px');

let vreme;
let sekunde = -1;

let generisanjeSlikaIPoledjina = () => {
    dIspisSlika.innerHTML = '';
    dIspisPoledjina.innerHTML = '';

    vreme =  setInterval(() => {
        sekunde++;
        span.innerHTML = sekunde;
    }, 1000);

    radios.forEach(radio => {
        if(radio.value == 'lako' && radio.checked) {
            generisanjePoledjine(8);
            generisanjeSlika(8);
            velicinaSlika('80px');
        } else if(radio.value == 'srednje' && radio.checked) {
            generisanjePoledjine(18);
            generisanjeSlika(18);
            velicinaSlika('70px');
        } else if(radio.value == 'tesko' && radio.checked) {
            generisanjePoledjine(32);
            generisanjeSlika(32);
            velicinaSlika('60px');
        } else if(radio.value == 'expert' && radio.checked) {
            generisanjePoledjine(50);
            generisanjeSlika(50);
            velicinaSlika('50px');
        }
    });
}


inKorisnikIme.addEventListener('keypress', e => {
    
    if(e.key == 'Enter') {
        e.preventDefault();
        
        if(inKorisnikIme.value != '' && inKorisnikIme.value != null && inKorisnikIme.value.length < 20) {

            if(vreme) {
                clearInterval(vreme);
                sekunde = -1;
            }

            generisanjeSlikaIPoledjina();
            
        } else {
            alert('Korisničko ime nije ispravno uneseno!');
        }
    }
});

let otvoreneSlike = [];
let kliknutePoledjine = [];
let brKlikova = 0;
let igraAktivna = true;
let brojParova = [];
let odgovor;
let nizKorisnika = JSON.parse(localStorage.getItem('korisnici')) || [];

dIspisPoledjina.addEventListener('click', e => {
    if(e.target.tagName == 'IMG' && igraAktivna && inKorisnikIme.value != null && inKorisnikIme.value != '' && inKorisnikIme.value.length < 20) {
        let slikaPozadina = e.target;

        let index = Array.from(slikaPozadina.parentNode.children).indexOf(slikaPozadina);
        slikaPozadina.classList.add('iskljuceno');
        kliknutePoledjine.push(slikaPozadina);

        let slika = dIspisSlika.children[index];
        otvoreneSlike.push(slika);

        brKlikova++;

        if(brKlikova === 2) {
            igraAktivna = false;

            if(otvoreneSlike[0].src != otvoreneSlike[1].src) {
                setTimeout(() => {
                    kliknutePoledjine.forEach(poledjina => {
                        poledjina.classList.remove('iskljuceno');
                    });
                    otvoreneSlike = [];
                    kliknutePoledjine = []
                    brKlikova = 0;
                    igraAktivna = true;
                }, 1000);
            } else {
                brojParova. push(1);
                otvoreneSlike = [];
                kliknutePoledjine = [];
                brKlikova = 0;
                igraAktivna = true;
            }
        }
    
        setTimeout(() => {
            radios.forEach(radio => {
                if(radio.value == 'lako' && radio.checked && brojParova.length == 8 ||
                radio.value == 'srednje' && radio.checked && brojParova.length == 18 ||
                radio.value == 'tesko' && radio.checked && brojParova.length == 32 ||
                radio.value == 'expert' && radio.checked && brojParova.length == 50) {

                    odgovor = window.confirm('Kraj igre! Da li želite novu igru?');

                    brojParova = [];

                    let korisnik = {};
                    korisnik.ime = inKorisnikIme.value;
                    radios.forEach(radio => {
                        if(radio.value == 'lako' && radio.checked) {
                            korisnik.tezina = 'lako';
                        } else if(radio.value == 'srednje' && radio.checked) {
                            korisnik.tezina = 'srednje';
                        } else if(radio.value == 'tesko' && radio.checked) {
                            korisnik.tezina = 'tesko';
                        } else if(radio.value == 'expert' && radio.checked) {
                            korisnik.tezina = 'expert';
                        }
                    });
                    korisnik.vreme = sekunde;
                    nizKorisnika.push(korisnik);
                    if(nizKorisnika.length > 40) {
                        nizKorisnika.shift();
                    } 
                    localStorage.setItem('korisnici', JSON.stringify(nizKorisnika));

                    clearInterval(vreme);
                    sekunde =  -1;

                    let nizKorisnika40 = JSON.parse(localStorage.getItem('korisnici'));
                    let nizKorisnikaLako =[];
                    let nizKorisnikaSrednje =[];
                    let nizKorisnikaTesko =[];
                    let nizKorisnikaExpert =[];

                    nizKorisnika40.forEach(korisnik => {
                        if(korisnik.tezina == 'lako') {
                            nizKorisnikaLako.push(korisnik);
                        } else if(korisnik.tezina == 'srednje') {
                            nizKorisnikaSrednje.push(korisnik);
                        } else if(korisnik.tezina == 'tesko') {
                            nizKorisnikaTesko.push(korisnik);
                        } else {
                            nizKorisnikaExpert.push(korisnik);
                        }
                    });

                    let sortiran;
                    radios.forEach(radio => {
                        if(radio.value == 'lako' && radio.checked) {
                            sortiran = rastuciNiz(nizKorisnikaLako);
                        } else if(radio.value == 'srednje' && radio.checked) {
                            sortiran = rastuciNiz(nizKorisnikaSrednje);
                        } else if(radio.value == 'tesko' && radio.checked) {
                            sortiran = rastuciNiz(nizKorisnikaTesko);
                        } else if(radio.value == 'expert' && radio.checked) {
                            sortiran = rastuciNiz(nizKorisnikaExpert);
                        }
                    });
                        
                    for(let i = 0; i < 5; i++) {
                        document.getElementById(`ime${i + 1}`).innerHTML = sortiran[i] ? sortiran[i].ime : '';
                        console.log(sortiran[i]);
                        document.getElementById(`vreme${i + 1}`).innerHTML = sortiran[i] ? sortiran[i].vreme : '';
                    }
                   
                    if(odgovor) {
                        generisanjeSlikaIPoledjina();
                    }
                } 
            });
        }, 0);  
    }
});

let rastuciNiz = niz => {
    for(let i = 0; i < niz.length; i++) {
        for(let j = i; j < niz.length; j++) {
            if(niz[i].vreme > niz[j].vreme) {
                let pomocna = niz[i];
                niz[i] = niz[j];
                niz[j] = pomocna;
            }
        }
    }
    return niz;
}

let top5 = (tezina) => {
    let nizKorisnika = JSON.parse(localStorage.getItem('korisnici')) || [];
    let nizKorisnikaTezina = nizKorisnika.filter(korisnik => korisnik.tezina === tezina);
    
    let sortiranNiz = rastuciNiz(nizKorisnikaTezina);

    for (let i = 0; i < 5; i++) {
        document.getElementById(`ime${i + 1}`).innerHTML = sortiranNiz[i] ? sortiranNiz[i].ime : '';
        document.getElementById(`vreme${i + 1}`).innerHTML = sortiranNiz[i] ? sortiranNiz[i].vreme : '';
    }
    btns.forEach(b => b.classList.remove('btnChecked'));
    let clickedBtn = document.querySelector(`button[id=${tezina}`);
    clickedBtn.classList.add('btnChecked');
};
top5('lako')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        top5(btn.id);
    });
});


// btns.forEach(btn => {
//     let nizKorisnika40 = JSON.parse(localStorage.getItem('korisnici')) ? JSON.parse(localStorage.getItem('korisnici')) : [];
//     let nizKorisnikaLako =[];
//     let nizKorisnikaSrednje =[];
//     let nizKorisnikaTesko =[];
//     let nizKorisnikaExpert =[];

//     nizKorisnika40.forEach(korisnik => {
//         if(korisnik.tezina == 'lako') {
//             nizKorisnikaLako.push(korisnik);
//         } else if(korisnik.tezina == 'srednje') {
//             nizKorisnikaSrednje.push(korisnik);
//         } else if(korisnik.tezina == 'tesko') {
//             nizKorisnikaTesko.push(korisnik);
//         } else {
//             nizKorisnikaExpert.push(korisnik);
//         }
//     });

//     let sortiran;
//     let cekiran = false;
//     btn.addEventListener('click', () => {
//         if(btn.id == 'lako' && cekiran) {
//             sortiran = rastuciNiz(nizKorisnikaLako);
//             btn.classList.add('btnChecked');
//             cekiran = false;
//         } else if(btn.id == 'srednje') {
//             sortiran = rastuciNiz(nizKorisnikaSrednje);
//             btn.classList.add('btnChecked'); 
//         } else if(btn.id == 'tesko') {
//             sortiran = rastuciNiz(nizKorisnikaTesko);
//             btn.classList.add('btnChecked');
//         } else if(btn.id == 'expert') {
//             sortiran = rastuciNiz(nizKorisnikaExpert);
//             btn.classList.add('btnChecked');
//         } else {
//             btn.classList.remove('btnChecked');
//         }
//         for(let i = 0; i < 5; i++) {
//             document.getElementById(`ime${i + 1}`).innerHTML = sortiran[i] ? sortiran[i].ime : '';
//             document.getElementById(`vreme${i + 1}`).innerHTML = sortiran[i] ? sortiran[i].vreme : '';
//         }
//     });
// });
