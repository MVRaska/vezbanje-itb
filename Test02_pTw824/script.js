// zadatak 1

function indexTM(tezina, visina) {
    let vis = visina / 100;
    let BIM = tezina / vis;
    return BIM;
}

function uhranjenost (tezina, visina) {
    if(indexTM(visina, tezina) <= 18.5) {
        console.log(`Pothranjenost`);
    } else if(indexTM(visina, tezina) > 18.5 && indexTM(visina, tezina) < 24.9) {
        console.log(`Normalna tezina`);
    } else if(indexTM(visina, tezina) >= 24.9 && indexTM(visina, tezina) <= 30) {
        console.log(`Povisena tezina`);
    } else {
        console.log(`Gojaznost`);
    }
}
uhranjenost(100, 182);
console.log(50/1.82);

// zadatak 2


let doZeljeneTezine = (tezinaStvarna, tezinaZeljena) => {
    let br = 0;
    if(tezinaZeljena > tezinaStvarna) {
        let tez = tezinaStvarna;
        while(tez <= tezinaZeljena) {
            tez = tez * 1.01;
            br++;
        }
    } else if(tezinaZeljena < tezinaStvarna) {
        tez = tezinaStvarna;
        while(tez >= tezinaZeljena ) {
            tez = 0.98 * tez;
            br++;
        }
    } 
    return br;
}
console.log(doZeljeneTezine(70, 78));
console.log(70*.98);


// zadatak 3

let tezinaGod = [120, 118, 115, 116, 110, 112, 110, 113];

let prosecnaTezina = tezinaGod => {
    let max = tezinaGod[0];
    let min =tezinaGod[0];
    let br = 0;
    let sum = 0;
    for(let i = 1; i < tezinaGod.length; i++) {
        if(tezinaGod[i] > max) {
            max = tezinaGod[i];
        }
    }
    for(let i = 1; i < tezinaGod.length; i++) {
        if(tezinaGod[i] < min) {
            min = tezinaGod;
        }
    }
    for(let i = 0; i < tezinaGod.length; i++) {
        if(tezinaGod[i] != max && tezinaGod[i] != min) {
            sum += tezinaGod[i];
            br++;
        }
    }
    return sum / br;
}
prosecnaTezina(tezinaGod);
console.log(prosecnaTezina(tezinaGod));
console.log(118+115+116+112+113);
console.log(574/5);

// zadatak 4

let tezineKlijenata = [55, 65, 96, 88, 53];

let napredak = tezineKlijenata => {
    let s1 = 0;
    let s2 = 0;
    let br = 0;
    for(let i = 0; i <= tezineKlijenata.length; i++) {
        s1 += tezineKlijenata[i];
    }
    for(let i = 0; i <= tezineKlijenata.length; i += 2) {
        s2 += tezineKlijenata[i];
        br ++;
    }
    if(s2 > 1.1 * s1 / tezineKlijenata.length || s2 < 0.9 * s1 / tezineKlijenata.length) {
        return false;
    } else {
        return true;
    }  
}
napredak(tezineKlijenata);
console.log(napredak(tezineKlijenata));
console.log((55+65+96+88+53)/5);
console.log((55+96+53)/3);
console.log(71.4/68);


// zadatak 5

function ukupnaTezina(niz) {
    let sum = 0;
    for(let i = 0; i <= niz.length; i++) {
        sum += niz[i];
    }
    return sum;
}
function brKlijenata(niz) {
    let br = 0;
    for(let i = 0; i <= niz.length; i++) {
        if(niz[i] == ukupnaTezina(niz) / niz.length) {
            br++;
        }
    }
    return br;
}
let niz = [49, 92, 50, 66, 72, 85];
brKlijenata(niz);
console.log(brKlijenata(niz));

if(brKlijenata(niz) > 1 / 3 * niz.length) {
    document.write(`<p style='color: green;'>Svi klijenti su približno iste težine.</p>`);
} else {
    document.write(`<p style='color: red;'>Nisu svi klijenti približno iste težine.</p>`);
}

