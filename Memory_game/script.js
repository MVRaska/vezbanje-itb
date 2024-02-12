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
        slika.style.margin = slika.style.width * 0.07;
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

let velicinaSlika = tezina => {
    let slike = document.querySelectorAll('img');
    let procenatSirine;
    
    switch (tezina) {
        case 'lako':
            procenatSirine = 20;
            break;
        case 'srednje':
            procenatSirine = 14;
            break;
        case 'tesko':
            procenatSirine = 10;
            break;
        case 'expert':
            procenatSirine = 9;
            break;
        default:
            procenatSirine = 20;
    }

    slike.forEach(slika => {
        slika.style.width = `${procenatSirine}%`;
        slika.style.height = `auto`;
        slika.style.marginRight = `${procenatSirine * 0.1}%`;
        slika.style.marginBottom = `${procenatSirine * 0.06}%`;
    });
}
generisanjePoledjine(8);
generisanjeSlika(8);
velicinaSlika('lako');

let vreme;
let sekunde = -1;
let brojParova = [];
let brKlikova = 0;

let generisanjeSlikaIPoledjina = () => {
    dIspisSlika.innerHTML = '';
    dIspisPoledjina.innerHTML = '';
    brojParova = [];
    brKlikova = 0;

    vreme =  setInterval(() => {
        sekunde++;
        span.innerHTML = sekunde;
    }, 1000);

    radios.forEach(radio => {
        if(radio.value == 'lako' && radio.checked) {
            generisanjePoledjine(8);
            generisanjeSlika(8);
            velicinaSlika('lako');
        } else if(radio.value == 'srednje' && radio.checked) {
            generisanjePoledjine(18);
            generisanjeSlika(18);
            velicinaSlika('srednje');
        } else if(radio.value == 'tesko' && radio.checked) {
            generisanjePoledjine(32);
            generisanjeSlika(32);
            velicinaSlika('tesko');
        } else if(radio.value == 'expert' && radio.checked) {
            generisanjePoledjine(50);
            generisanjeSlika(50);
            velicinaSlika('expert');
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

radios.forEach(radio => {
    radio.addEventListener('change', () => {
        if (inKorisnikIme.value != '' && inKorisnikIme.value != null && inKorisnikIme.value.length < 20) {
            if (vreme) {
                clearInterval(vreme);
                sekunde = -1;
            }
            generisanjeSlikaIPoledjina();
        } else {
            alert('Korisničko ime nije ispravno uneseno!');
        }
    });
});

let otvoreneSlike = [];
let kliknutePoledjine = [];
let igraAktivna = true;
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
                            nizKorisnika = JSON.parse(localStorage.getItem('korisnici')) || [];
                            
                            let nizLako = nizKorisnika.filter(korisnik => korisnik.tezina == 'lako').map(korisnik => korisnik.vreme);
                            let najboljiLako;
                            if (nizLako.length > 0) {
                                najboljiLako = Math.min(...nizLako);
                            }
                            let nizSrednje = nizKorisnika.filter(korisnik => korisnik.tezina == 'srednje').map(korisnik => korisnik.vreme);
                            let najboljiSrednje;
                            if (nizSrednje.length > 0) {
                                najboljiSrednje = Math.min(...nizSrednje);
                            }
                            let nizTesko = nizKorisnika.filter(korisnik => korisnik.tezina == 'tesko').map(korisnik => korisnik.vreme);
                            let najboljiTesko;
                            if(nizTesko.length > 0){
                                najboljiTesko = Math.min(...nizTesko);
                            }
                            
                            let nizExpert = nizKorisnika.filter(korisnik => korisnik.tezina == 'expert').map(korisnik => korisnik.vreme);
                            let najboljiExpert;
                            if(nizExpert.length > 0){
                                najboljiExpert = Math.min(...nizExpert);
                            }
                            
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
                                    if (korisnik.vreme < najboljiLako) {
                                        console.log(korisnik.ime);
                                        alert(`Bravo! Najbolji rezultat u kategoriju težine igre 'lako'!`);
                                    }
                                } else if(radio.value == 'srednje' && radio.checked) {
                                    sortiran = rastuciNiz(nizKorisnikaSrednje);
                                    if (korisnik.vreme < najboljiSrednje) {
                                        alert(`Bravo! Najbolji rezultat u kategoriju težine igre 'srednje'!`);
                                    }
                                } else if(radio.value == 'tesko' && radio.checked) {
                                    sortiran = rastuciNiz(nizKorisnikaTesko);
                                    if (korisnik.vreme < najboljiTesko) {
                                        alert(`Bravo! Najbolji rezultat u kategoriju težine igre 'teško'!`);
                                    }
                                } else if(radio.value == 'expert' && radio.checked) {
                                    sortiran = rastuciNiz(nizKorisnikaExpert);
                                    if (korisnik.vreme < najboljiExpert) {
                                        alert(`Bravo! Najbolji rezultat u kategoriju težine igre 'ekspert'!`);
                                    }
                                }
                            });
                                
                            for(let i = 0; i < 5; i++) {
                                document.getElementById(`ime${i + 1}`).innerHTML = sortiran[i] ? sortiran[i].ime : '';
                                document.getElementById(`vreme${i + 1}`).innerHTML = sortiran[i] ? sortiran[i].vreme : '';
                            }
                           
                            if(odgovor) {
                                generisanjeSlikaIPoledjina();
                            }
                        } 
                    });
                }, 10);  
            }
        }
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
    let nizKorisnika = [];
    nizKorisnika = JSON.parse(localStorage.getItem('korisnici'));
    if (nizKorisnika) { // Dodatna provera da li postoje podaci u lokalnom skladištu
        let nizKorisnikaTezina = nizKorisnika.filter(korisnik => korisnik.tezina === tezina) || [];
        if (nizKorisnikaTezina.length > 0) { // Dodatna provera da li postoje podaci za odabranu težinu
            let sortiranNiz = rastuciNiz(nizKorisnikaTezina);

            for (let i = 0; i < 5; i++) {
                document.getElementById(`ime${i + 1}`).innerHTML = sortiranNiz[i] ? sortiranNiz[i].ime : '';
                document.getElementById(`vreme${i + 1}`).innerHTML = sortiranNiz[i] ? sortiranNiz[i].vreme : '';
            }
        }  else {

            for (let i = 0; i < 5; i++) {
                document.getElementById(`ime${i + 1}`).innerHTML = '';
                document.getElementById(`vreme${i + 1}`).innerHTML = '';
            }
        }
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

radios.forEach(radio => {
    radio.addEventListener('click', () => {
        top5(radio.id);
    })
});

