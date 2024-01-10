//Test primeri
let a = [-6, 8, 11, 6, 8];
let b = ['pera', 'mika', 'laza'];

//Resena funkcija bez callback-a

function ispisNizaKonzola(niz) {
    let s = '';
    for(let i = 0; i < niz.length; i++) {
        s += niz[i] + ' ';
    }
    console.log(s);
}

function ispisNizaStranica(niz) {
    let s = '';
    for(let i = 0; i < niz.length; i++) {
        s += niz[i] + ' ';
    }
    let d = document.getElementById('container');
    d.innerHTML += s;
}

ispisNizaKonzola(a);
ispisNizaKonzola(b);
ispisNizaStranica(a);
ispisNizaStranica(b);

// Funkcija 1: niz => {for petljom prodjemo kroz sve elemente niza, i generisani string ispisemo u konzoli}
// Funkcija 2: niz => {for petljom prodjemo kroz sve elemente niza, i generisani string ispise u div tag}
// A moze li ovako?
// Funkcija: (niz, nacin) => {for petljom prodjemo kroz sve elemente niza, i generisani string ispise na zadati nacin?}

// Sa callback funkcijama
function ispisKonzola(p) {
    console.log(p);
}

function ispisStranica(p) {
    let div = document.getElementById("container");
    div.innerHTML += p;
}

function ispisNiza(niz, cb) {
    let s = '';
    for(let i = 0; i < niz.length; i++) {
        s += niz[i] + ' ';
    }
    cb(s);
}
ispisNiza(a, ispisKonzola);
ispisNiza(b, ispisKonzola);
ispisNiza(a, ispisStranica);
ispisNiza(b, ispisStranica);


// anonimna funkcija kao callback funkcija

ispisNiza([1, 2, 3, 4, 5], function(p) {
    console.log(p);
});


//arrow funkcija kao callback
ispisNiza([9, 8, 7, 6], p => {
    console.log(p);
})

// forEach petlja

a.forEach(ispisKonzola);
//prolazi kroz sve elemente niza i za svaki element niza poziva callback funkciju, i prosledjuje vrednost elementa kao argument

b.forEach(ispisKonzola);

a.forEach(function(e) {
    console.log(e);
});

a.forEach(e => {
    let div = document.getElementById('container');
    div.innerHTML += e + ' ';
});

a.forEach((e, i) => {
    console.log((`Element ${e} u nizu ima indeks ${i}`));
});


// zadatak 2

let sumaElem = niz => {
    let sum = 0;
    niz.forEach(el => {
        sum += el;
    });
    return sum;
}

// zadatak 3
//Odrediti proizvod elemenata celobrojnog niza.

let proizvod = niz => {
    let pr = 1;
    niz.forEach(e => {
        pr *= e;
    });
    return pr;
}
console.log(proizvod(a));

// zadatak 4
//Odrediti srednju vrednost elemenata celobrojnog niza.

let srednjaVr = niz => {
    let zbir = 0;
    niz.forEach(e => {
        zbir += e;
    });
    return zbir / niz.length;
}
console.log(srednjaVr(a));


// zadatak 5

let maxVr = niz => {
    let max = niz[0];
    niz.forEach(el => {
        if(el > max) {
            max = el;
        }
    });
    return max;
}
console.log(sumaElem(a));
console.log(maxVr(a));

// zadatak 6
//Odrediti minimalnu vrednost u celobrojnom nizu.

let minVr = niz => {
    let min = niz[0];
    niz.forEach(e => {
        if(e < min) {
            min = e;
        }
    });
    return min;
}
console.log(minVr(a));

// zadatak 7
//Odrediti indeks maksimalnog elementa celobrojnog niza.

let indexMax = niz => {
    let max = niz[0];
    let maxIn = 0;
    niz.forEach((e, i) => {
        if(e > max) {
            max = e;
            maxIn = i;
        }
    });
    return maxIn;
}
a = [-6, 8, 11, 6, 8];
console.log(indexMax(a));

// zadatak 7 '
// Vratiti sve indexe pojavljivanja max vrednosti

let sviInMaxVr = niz => {
    let maxVr = niz[0];
    let sviIndexi = [];
    niz.forEach((el, i) => {
        if(el > maxVr) {
            maxVr = el;
            sviIndexi.push(i);
        }
    });
    return sviIndexi;
}

// zadatak 8
//Odrediti indeks minimalnog elementa celobrojnog niza.

let indexMin = niz => {
    let min = niz[0];
    let minIn = 0;
    niz.forEach((e, i) => {
        if(e < min) {
            min = e;
            minIn = i;
        }
    });
    return minIn;
}
console.log(indexMin(a));


// zadatak 9
//Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.

let veceOdSrVr = niz => {
    let srVr = srednjaVr(niz);
    let br = 0;
    niz.forEach( e => {
        if(e > srVr) {
            br++;
        }
    });
    return br;
}
console.log(veceOdSrVr(a));

// zadatak 19

let duzinaStringova = niz => {
    niz.forEach(el => {
        console.log(el.length);
    });
}
let imena = ['Stefan', 'Vladislav', 'Nikola', 'Milan', 'Maja'];

duzinaStringova(imena);

// zadatak 20

let stringMaxDuzine = niz => {
    let maxVr = niz[0];
    let duzina = niz[0].length;
    niz.forEach(el => {
        if(el.length > duzina) {
            maxVr = el;
            duzina = el.length;
        }
    });
    return maxVr;
}
console.log(stringMaxDuzine(imena));


let stringMaxDuzina = niz => {
    let maxVr = niz[0];
    let duzina = niz[0].length; 
    niz.forEach(el => {
        if(el.length > duzina) {
            maxVr = el;
           
        }
    });
    return maxVr;
}

console.log(stringMaxDuzina(imena)); 
// maxVr = "Vladislav", duzina = 6
// callback("Stefan")
// callback("Vladislav")
// ......
// callback("Maja")



// zadatak 24

let zad24 = (a, b) => {
    let c = [];
    a.forEach((e, i) => {
        //c.push(a[i], b[i]);
        c.push(e, b[i]);
    });
    return c;
}

let n1 = [1, 2, 3, 4];
let n2 = [5, 6, 7, 8];
console.log(zad24(n1, n2));

// zadatak 25

let zad25 = (a, b) => {
    let n = a.length; //n=b.length;
    let c = [];
    for(let i = 0; i < n; i++) {
        c[i] = a[i] * b[i];  // c.push(a[i] * b[i]);
    }
    return c;
}
console.log(zad25(n1, n2));


let zad25ForEach = (a, b) => {
    let c = [];
    a.forEach((e, i) => {
        c[i] = e * b[i];
    });
    return c;
}
console.log(zad25ForEach(n1, n2));

// zadatak 26
//a = [a[0], a[1], ... a[2n - 1]] - niz ima 2n elemenata
//a = [a[0], a[1], ... a[2n - 1]]
// n = 3 => a ima 6 elem a[a[0], a[1], a[2], a[3], a[4], a[5]]
//b[i] = (a[i] + a[2n - 1 - i]) / 2
// b[0] = (a[0] + a[5]) / 2
// b[1] = (a[1] + a[4]) / 2

let zad26 = a => {
    let k = a.length;
    let n = k / 2;
    let b =[];
    for(let i = 0; i < n; i++) {
        b[i] = (a[i] + a[2 * n - 1 - i]) / 2;
    }
    return b;
}
console.log(zad26(n1));
console.log(zad26(n2));

let zad26ForEach = a => {
    let b = [];
    let n = a.length / 2;
    a.forEach((e, i) => {
        if(i < n) {
            b[i] = (a[i] + a[2 * n - 1 - i]) / 2;
        }
    });
    return b;
}
let n3 = [0, 1, 2, 3, 4, 5];
console.log(zad26ForEach(n3));








