// 1. Dohvatiti element na koji zelimo da postavimo osluskivac

let btnHello = document.getElementById('hello');

// 2. Postavimo osluskivac na element koji smo dohvatili

btnHello.addEventListener('click', () => {
    console.log('Hello!');
});

btnHello.addEventListener('dblclick', () => {
    console.log('Hello hello!!');
});

// zadaci slajd

// 1.

let btnBroj = document.getElementById('broj');
let pIspisBroja = document.getElementById('ispisBroja');

// 2.

let br = 1;
btnBroj.addEventListener('click', () => {
    console.log(`Broj je ${br}`);

    pIspisBroja.innerHTML = `Broj je ${br}`;     // zadatak 2
    
    br++;
})


// zadatak 3
/*Napraviti dugme + i dugme -. 
Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.
Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1. */

//  zadatak 4
/*Dopuniti prethodni zadatak uslovima, tako da se na ekranu prikazuju samo pozitivni brojevi. Ukoliko je vrednost manja od nule, na ekranu nastaviti prikazivanje broja 0. */

let plusBtn = document.getElementById('plus');
let minusBtn = document.getElementById('minus');
let ispis = document.getElementById('brojac');

let brojac = 0;

plusBtn.addEventListener('click', () => {
    brojac++;
    ispis.innerHTML = brojac;
});

minusBtn.addEventListener('click', () => {
    brojac--;
    if(brojac < 0) {    // zadatak 4
        brojac = 0;
    }
    ispis.innerHTML = brojac;
});


// zadatak 5
/* Napraviti input polje i dugme.
U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja. */

let btnIspisiTekst = document.getElementById('ispisiTekst');
let pIspisTeksta = document.getElementById('ispisTeksta');
let inputTekst = document.getElementById('text');

btnIspisiTekst.addEventListener('click', () => {
    let preuzmiTekst = inputTekst.value;
    pIspisTeksta.innerHTML = `Zdravo ${preuzmiTekst}`;
});

// zadatak 6
/*Dopuniti 5. zadatak dodavanjem radio button polja gde korisnik može odabrati svoj pol (muški, ženski ili neopredeljen). 
Nakon duplog klika na dugme, u konzoli ispisati pol koji je osoba odabrala. */

let radioMuski = document.getElementById('muski');
let radioZenski = document.getElementById('zenski');
let radioNeopredeljen = document.getElementById('neopredeljen');

btnIspisiTekst.addEventListener('dblclick', () => {

    //1. nacin

    if(radioMuski.checked) {
        console.log('Osoba je muskog pola');
    } else if(radioZenski.checked) {
        console.log('Osoba je zenskog pola');
    } else {
        console.log('Osoba se nije opredelila');
    } 

    // 2. nacin
    
    //selektuj input polje ciji atribut ima vrednost pol i pri tome je cekiran
    
    let checkedPol = document.querySelector("input[name ='pol']:checked");
    // console.log(checkedPol);
    // console.log(checkedPol.value, checkedPol.id);
    
    console.log(`Osoba je ${checkedPol.value} pola`);

    // 3. nacin

    //selektuje sve radio button-e po atributu

    let polRadios = document.getElementsByName('pol');
    // console.log(polRadios);

    polRadios.forEach(radio => {
        if(radio.checked) {
            console.log(`Osoba je ${radio.value} pola`);
        }
    });  
    
    // 4. nacin

    // selektuje sve radio button-e po name atributu 

    let poloRadiosInput = document.querySelectorAll('input[name = "pol"]');
    poloRadiosInput.forEach(radio => {
        if(radio.checked) {
            console.log(`Osoba je ${radio.value} pola`);
        }
    });
});

// zadatak 7

let dugmeKvadrat = document.getElementById
('kvadratdugme');
let dugmePolovina = document.getElementById
('polovinadugme');
let dugmeKrug = document.getElementById
('krugdugme');

let inKvadrat = document.getElementById('kvadratinput');
let inPolovina = document.getElementById('polovinainput');
let inKrug = document.getElementById('kruginput');

let pkvadrat = document.getElementById('kvadrat');
let ppolovina = document.getElementById('polovina');
let pkrug = document.getElementById('krug');

// dugmeKvadrat.addEventListener('click', () => {
//     pkvadrat.innerHTML = `Kvadrat broja ${inKvadrat.value} je ${inKvadrat.value ** 2}`;
// });

// dugmePolovina.addEventListener('click', () => {
//     ppolovina.innerHTML = `Polovina broja ${inPolovina.value} je ${inPolovina.value / 2}`;
// });

// dugmeKrug.addEventListener('click', () => {
//     pkrug.innerHTML = `Povrsina kruga poluprecnika ${inKrug.value} je ${inKrug.value ** 2 * Math.PI}`;
// });

let dugmad = document.querySelectorAll('.button')
dugmad.forEach(dugme => {
    dugme.addEventListener('click', () => {
        if(dugme.id.includes('kvadrat')) {
            pkvadrat.innerHTML = `Kvadrat broja ${inKvadrat.value} je ${inKvadrat.value ** 2}`;
        } else if(dugme.id.includes('polovina')) {
            ppolovina.innerHTML = `Polovina broja ${inPolovina.value} je ${inPolovina.value / 2}`;
        } else {
            pkrug.innerHTML = `Povrsina kruga poluprecnika ${inKrug.value} je ${inKrug.value ** 2 * Math.PI}`;
        }
    });
})