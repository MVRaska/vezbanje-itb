import Pacijent from './pacijent.js';

let pacijent1 = new Pacijent('Srecko', 180, 88);
let pacijent2 = new Pacijent('Mladen', 184, 78);
let pacijent3 = new Pacijent('Boris', 177, 77);
let pacijent4 = new Pacijent('Sima', 177, 80);

let pacijenti = [pacijent1, pacijent2, pacijent3, pacijent4];

pacijenti.forEach(pacijent => {
    console.log(`Pacijent se zove: ${pacijent.ime}`);;
});

console.log(pacijent1.bmi());;
console.log(pacijent3.kritican());;

//ispisati podatke pacijenta sa najmanjom tezinom

let pacijentSaMinTezinom = niz => {
    let minTezinaPacijent = niz[0];
    let minTezina = minTezinaPacijent.tezina;

    niz.forEach( pacijent => {
        if(pacijent.tezina < minTezina) {
            minTezina = pacijent.tezina;
            minTezinaPacijent = pacijent;
        }
    });

    return minTezinaPacijent;
}
// let rezultat = pacijentSaMinTezinom(pacijenti);
// rezultat.stampaj();

pacijentSaMinTezinom(pacijenti).stampaj();

/*
Ispisati podatke o pacijentu sa najvećim bmi vrednošću.
*/

let pacijentMaxBMI = niz => {
    let pacijentMXBMI = niz[0];
    let minBMI = pacijentMXBMI.bmi();

    niz.forEach(pacijent => {
        if(pacijent.bmi() > minBMI) {
            minBMI = pacijent.bmi();
            pacijentMXBMI = pacijent;
        }
    });
    return pacijentMXBMI;
}
pacijentMaxBMI(pacijenti).stampaj();

//Ispisati sve pacijente čije ime sadrži slovo A.

let pacijentSaA = niz => {
    let pacijentiA = [];
    niz.forEach(pacijent => {
        if(pacijent.ime.includes('a') || pacijent.ime.includes('A')) {
            pacijentiA.push(pacijent);
            // console.log(pacijent);
        }
    });
    return pacijentiA;
}

pacijentSaA(pacijenti).forEach(p => {
    p.stampaj();
});

//Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.

let srednjaVisina = niz => {
    let sumaVisina = 0;
    niz.forEach(pacijent => {
        sumaVisina += pacijent.visina; //poziva geter za visinu
    });
    return sumaVisina / niz.length;
}
console.log(`Srednja visina pacijenata je: ${srednjaVisina(pacijenti)}`);
console.log((180+184+177*2)/4);