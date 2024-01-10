let cars = ['Toyota', 'BMW', 'Volvo'];
console.log(cars);

let razno = [15, -3.5, 'hello', false, [1, 2, 3]];
console.log(razno);
console.log(razno[0]);

let niz = [];
niz[1] = 'Pera';
console.log(niz);
console.log(niz[0]);
// niz[] = 'Lena'; ne mora redom da se dodeljuju elementi, aliindex mora biyi dodeljen

niz[1] = 'Zika';
console.log(niz);

// umesto reda 8-14 moze i let niz = [undefined, 'Zika'];

for(let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

for(let i = 0; i < razno.length; i++) {
    console.log(razno[i]);
}

let unutrasnjiNiz = razno[4];
for(let i = 0; i < unutrasnjiNiz.length; i++) {
    console.log(unutrasnjiNiz[i]);
}

for(let i = 0; i < razno[4].length; i++) {
    console.log(razno[4][i]);
}

let brojevi = [4, 3.5, 8, 9, 10];

//uvecati vrednosti svih elemenata za 10%

for(let i = 0; i < brojevi.length; i++) {
    brojevi[i] *= 1.1;
}
for(let i = 0; i < brojevi.length; i++) {
    console.log(brojevi[i]);
}  

//test nizovi

let brojevi1 = [8, 4, -2, 0, 1, 0];
let brojevi2 = [10, -5, 0, -3];
let brojevi3 = [1, 2, 3, 4, 5, 6];
let brojevi4 = [1, 5, 9, 3];
let brojevi5 = [8, 6, 7, 8, 3];

// zadatak 2 (sa slajda)
//Odrediti zbir elemenata celobrojnog niza


let sumElem = niz => {
    let sum = 0;
    for(let i = 0; i < niz.length; i++) {
        sum += niz[i];
    }
    return sum;
}
console.log(sumElem(brojevi1));
console.log(sumElem(brojevi2));
console.log(sumElem(brojevi3));

// zadatak 3
//Odrediti proizvod elemenata celobrojnog niza.

let proizvElem = niz => {
    let proizvod = 1;
    for(let i = 0; i < niz.length; i++) {
        proizvod *= niz[i];
    }
    return proizvod;
}
console.log(proizvElem(brojevi1));
console.log(proizvElem(brojevi2));
console.log(proizvElem(brojevi3));

// zadatak 4
//Odrediti srednju vrednost elemenata celobrojnog niza.

let aritElem = niz => niz.length != 0 ? sumElem(niz) / niz.length : 0;
console.log(aritElem(brojevi1));
console.log(aritElem(brojevi2));
console.log(aritElem(brojevi3));
console.log(aritElem([]));

// zadatak 5
//Odrediti maksimalnu vrednost u celobrojnom nizu.

let maxElem = niz => {
    let najveci = niz[0];
    for(let i = 1; i < niz.length; i++) {
        if(niz[i] > najveci) {
            najveci = niz[i];
        }
    }
    return najveci;
}
console.log(maxElem(brojevi1));
console.log(maxElem(brojevi2));
console.log(maxElem(brojevi3));


// zadatak 6
//Odrediti minimalnu vrednost u celobrojnom nizu.

let minElem = niz => {
    let najmanji = niz[0];
    for(let i = 1; i < niz.length; i++) {
        if(niz[i] < najmanji) {
            najmanji = niz[i];
        }
    }
    return najmanji;
}
console.log(minElem(brojevi1));
console.log(minElem(brojevi2));
console.log(minElem(brojevi3));


// zadatak 7
//Odrediti indeks maksimalnog elementa celobrojnog niza.

let indexMaxBr = niz => {
    let najveci = niz[0];
    let index = 0;
    for(let i = 1; i < niz.length; i++) {
        if(niz[i] > najveci) {
            najveci = niz[i];
            index = i;
        }
    }
    return index;
}
console.log(indexMaxBr(brojevi1));
console.log(indexMaxBr(brojevi2));
console.log(indexMaxBr(brojevi3));
console.log(indexMaxBr(brojevi4));
console.log(indexMaxBr(brojevi5));

// zadatak 8
//Odrediti indeks minimalnog elementa celobrojnog niza.

let indexMinBr = niz => {
    let najmanji = niz[0];
    let index = 0;
    for(let i = 1; i < niz.length; i++) {
        if(niz[i] < najmanji) {
            najmanji = niz[i];
            index = i;
        }
    }
    return index;
}
console.log(indexMinBr(brojevi1));
console.log(indexMinBr(brojevi2));
console.log(indexMinBr(brojevi3));
console.log(indexMinBr(brojevi4));
console.log(indexMinBr(brojevi5));

// zadatak 9
//Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.

let veciOdSrVr = niz => {
    let srvr = aritElem(niz);
    let br = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] > srvr) {
            br++;
        }
        // br += niz[i] > srvr ? 1 : 0;
    }
    return br;
}
console.log(veciOdSrVr(brojevi1)); 
console.log(veciOdSrVr(brojevi2));
console.log(veciOdSrVr(brojevi3));
console.log(veciOdSrVr(brojevi4));
console.log(veciOdSrVr(brojevi5));

// zadatak 10
//Izračunati zbir pozitivnih elemenata celobrojnog niza.

let zbirPoz = niz => {
    let zbir = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] > 0) {
            zbir += niz[i];
        }
    }
    return zbir;
}
console.log(zbirPoz(brojevi1)); 
console.log(zbirPoz(brojevi2));
console.log(zbirPoz(brojevi3));
console.log(zbirPoz(brojevi4));
console.log(zbirPoz(brojevi5));


// zadatak 11
//Odrediti broj parnih elemenata u celobrojnom nizu.

let brParnihElem = niz => {
    let br = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] % 2 == 0) {
            br++
        }
    }
    return br;
}
console.log(brParnihElem(brojevi1)); 
console.log(brParnihElem(brojevi2));
console.log(brParnihElem(brojevi3));
console.log(brParnihElem(brojevi4));
console.log(brParnihElem(brojevi5));


// zadatak 12
// Odrediti broj parnih elemenata sa neparnim indeksom.

let parniNeparIn = niz => {
    let br = 0;
    for(let i = 1; i < niz.length; i++) {
        if(i % 2 == 1 && niz[i] % 2 == 0) {
            br++;
        }
    }
    return br;
}
console.log(parniNeparIn(brojevi1)); 
console.log(parniNeparIn(brojevi2));
console.log(parniNeparIn(brojevi3));
console.log(parniNeparIn(brojevi4));
console.log(parniNeparIn(brojevi5));

// zadatak 13
//Izračunati sumu elemenata niza sa parnim indeksom.

let sumaParIn = niz => {
    let sum = 0;
    for(let i = 0; i < niz.length; i++) {
        if(i % 2 == 0) {
            sum += niz[i];
        }
    }
    return sum;
}
console.log(sumaParIn(brojevi1)); 
console.log(sumaParIn(brojevi2));
console.log(sumaParIn(brojevi3));
console.log(sumaParIn(brojevi4));
console.log(sumaParIn(brojevi5));

// zadatak 14
//Promeniti znak svakom elementu celobrojnog niza.

let promenaZnaka = niz => {
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] != 0) {
            niz[i] = -niz[i];
        }
    }
    return niz;
}
console.log(promenaZnaka(brojevi1)); 
console.log(promenaZnaka(brojevi2));
console.log(promenaZnaka(brojevi3));
console.log(promenaZnaka(brojevi4));
console.log(promenaZnaka(brojevi5));


// zadatak 15
//Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.

brojevi1 = [8, 4, -2, 0, 1, 0];
brojevi2 = [10, -5, 0, -3];
brojevi3 = [1, 2, 3, 4, 5, 6];
brojevi4 = [1, 5, 9, 3];
brojevi5 = [8, 6, 7, 8, 3];

let promenaZnNeParniIn = niz => {
    for(let i = 0; i < niz.length; i++) {
        if((niz[i] % 2 != 0) && (i % 2 == 0)) {
            niz[i] = -niz[i];
        }
    }
    return niz;
}
console.log(promenaZnNeParniIn(brojevi1)); 
console.log(promenaZnNeParniIn(brojevi2));
console.log(promenaZnNeParniIn(brojevi3));
console.log(promenaZnNeParniIn(brojevi4));
console.log(promenaZnNeParniIn(brojevi5));


// zadatak 19
//Ispisati dužinu svakog elementa u nizu stringova.

let imena = ['Stefan', 'Jelena', 'Marko', 'Jovan', 'Milos'];

let duzina = niz => {
    for(let i = 0; i < niz.length; i++) {
        let s = niz[i];
        console.log(s.length);
    }
}
duzina(imena);

// zadatak 20
//Odrediti element u nizu stringova sa najvećom dužinom.

let stringovi = ['manje', 'visoko', 'ime', 'marama', 'Popokatepetel'];

let najduzi = niz => {
    let max = niz[0].length;
    let maxString = niz[0];
    for(let i = 1; i < niz.length; i++) {
        if(niz[i].length > max) {
            max = niz[i].length;
            maxString = niz[i];
        }
    }
    return maxString;
}
console.log(najduzi(stringovi));


// zadatak 21
//Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

let stringovi1 = ['ko', 'sta', 'kako', 'aaaaaaaaa', 'mmmmmm'];

let prosecnaDuzina = niz => {
    let sumDuzina = 0;
    for(let i = 0; i < niz.length; i++) {
        let s = niz[i];
        sumDuzina += s.length;
    }
    return sumDuzina / niz.length;
}

let brojNatprosecnih = niz => {
    let pd = prosecnaDuzina(niz);
    let br =0;
    for(let i = 0; i < niz.length; i++) {
        let s = niz[i];
        if(s.length > pd) {
            br++;
        }
    }
    return br;
}

console.log(prosecnaDuzina(stringovi1));
console.log((2+3+4+9+6)/5);
console.log(brojNatprosecnih(stringovi1));

// zadatak 22
//Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 

let stringovi2 = ['mi', 'ana', 'sveska', 'racunar', 'kompjuter'];

let slovoA = niz => {
    let br = 0;
    for(let i = 0; i < niz.length; i++) {
        let s = niz[i];
        if(s.includes('a')) {
            br++;
        }
    }
    return br;
}
console.log(slovoA(stringovi2));

// zadatak 23
//Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’. 

let stringovi3 = ['mi', 'ana', 'sveska', 'racunar', 'kompjuter', 'A', 'ab'];

let pocetnoSlovo = niz => {
    let br = 0;
    for(let i = 0; i < niz.length; i++) {
        let s = niz[i];
        if(s[0] == 'a' || s[0] == 'A') {
            br++;
        }
    }
    return br;
}
console.log(pocetnoSlovo(stringovi3));

// zadatak 23, nacin 2

let pocetnoSlovo1 = niz => {
    let br = 0;
    for(let i = 0; i < niz.length; i++) {
        let s = niz[i];
        if(s.startsWith('a') || s.startsWith('A')) {
            br++;
        }
    }
    return br;
}
console.log(pocetnoSlovo1(stringovi3));

// zadatak 24

let a1 = ['a', 0, 1, 'b'];
let b1 = ['b', 6, 'c', 9];

let zad24 = (a, b) => {
    let n = a.length;
    let c = [];
    for(let i = 0; i < n; i++) {
        c.push(a[i], b[i]);
    }
    return c;
}

// zadatak 24, nacin 2

let zad24b = (a, b) => {
    let n = a.length;
    let c = [];
    for(let i = 0; i < n; i++) {
        c[2*i] = a[i];
        c[2 * i + 1] = b[i];
    }
    return c;
}
console.log(zad24(a1, b1));
console.log(zad24b(a1, b1));

// zadatak 25

let a2 = [-6, 0, 1, 90];
let b2 = [12, 6, -3, 9];

let zad25 = (a, b) => {
    let n = a.length;
    let c = [];
    for(let i = 0; i < n; i++) {
        c[i] = a[i] * b[i];
    }
    return c;
}
console.log(zad25(a2, b2));

// zadatak 26

let nizA = [16, 2, -3, 96, 54, 18, 110];

let zad26 = niz => {
    let n = niz.length / 2;
    let b = [];
    for(let i = 0; i < n; i++) {
        b[i] = (niz[i] + niz[2 * n - 1 - i]) / 2;
    }
    return b;
}
console.log(zad26(nizA));

