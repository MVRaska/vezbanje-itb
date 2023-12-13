let i = 1;

while(i <= 5) {
    console.log(i);
    i++    //i = i + 1; i += 1;
}

console.log('kraj petlje');

// zadatak isti, varijanta dva

i = 1;
 while(i <= 5) {
    console.log(i++);
 }

 // zadatak isti, varijanta tri

i = 0;
while(i < 5) {
    i++;
   console.log(i);
}

/*

pre petlje: i = 1;
1.iteracija: log(1), i = 2;
2.iteracija: log(2), i = 3;
3.iteracija: log(3), i = 4;
4.iteracija: log(4), i = 5;  
5.iteracija: log(5). i = 6;

*/ 


// zadatak 1

// a

let br = '';
let j = 1;

while (j <= 20) {
    br = br + j + ' ';
    j++;
}
console.log(br);

//for petlja

let brojevi = '';
for(let a1 = 1; a1 <= 20; a1++) {
    brojevi += `${a1} `;
}
console.log(`Brojevi od 1 do 20; ${brojevi}`);

//b

j = 1;

while(j <= 20) {
    console.log(j);
    j++;
}

//for petlja

for(let a = 1; a <= 20; a++) {
    console.log(`Broj ${a}`);
}

// zadatak drugi

let k = 20;

while(k >= 1) {
    console.log(k--);
}
//for petlja

for(let a2 = 20; a2 >= 1; a2--) {
    console.log(a2);
}

// zadatak drugi, nacin dva

k = 1;

while(k <= 20) {
    console.log(21 - k);
    k++;
}

//for petlja

for(let a3 = 1; a3 <= 20; a3++) {
    console.log(21-a3);
}


// zadatak treci

let l = 1;

while(l <= 20) {
    if(l % 2 == 0) {
        console.log(l);
    }
    l++;
}

//for petlja

for(let b1 = 1; b1 <= 20; b1++) {
    if(b1 % 2 == 0) {
        console.log(b1);
    }
}


// zadatak treci, nacin dva

l = 2;

while(l <= 20) {
    console.log(l);
    l = l + 2; // i += 2
}

//for petlja

for(let b = 2; b <= 20; b += 2) {
    console.log(b);
}


// zadatak cetvrti

let n = 8;
let m = 1;

while(m <= n) {
    if(m % 3 == 0) {
        document.write(`<p style='background-color: purple'>Lorem ipsum</p>`);
    } else if(m % 3 == 1) {
        document.write(`<p style='background-color: pink'>Lorem ipsum</p>`);
    } else {
        document.write(`<p style='background-color: lime'>Lorem ipsum</p>`);
    }
    m++;
}

// zadatak cetvrti, drugi nacin

n = 7;
i = 1;

while(i <= n) {
    if(i % 3 == 1) {
        document.body.innerHTML += `<p class='plava'>Paragraf broj ${i}</p>`;
    } else if(i % 3 == 2) {
        document.body.innerHTML += `<p class='crvena'>Paragraf broj ${i}</p>`;
    } else {
        document.body.innerHTML += `<p class='zelena'>Paragraf broj ${i}</p>`;
    }
    i++;
}

//for petlja

n = 5;

for(let c = 1; c <= n; c++){
    if(c % 3 == 1) {
        document.body.innerHTML += `<p style='color: blue'>Paragraf ${c}</p>`;
    } else if(c % 3 == 2) {
        document.body.innerHTML += `<p style='color: red'>Paragraf ${c}</p>`;
    } else {
        document.body.innerHTML += `<p class='color: green'> Paragraf ${c}</p>`;
    }
}

// zadatak cetvrti, treci nacin

n = 7;
i = 1;

while(i <= n) {
    let klasa;  //let uvek vazi u bloku u kojem je definisana
    if(i % 3 == 1) {
        klasa = 'plava';
    } else if(i % 3 == 2) {
        klasa = 'crvena';
    } else {
        klasa = 'zelena'
    }
    document.body.innerHTML += `<p class='${klasa}'>Paragraf broj ${i}</p>`;
    i++;
}

//for petlja

n = 5;

for(let c1 = 1; c1 <= n; c1++) {
    if(c1 % 3 == 1) {
        klasa = 'plava';
    } else if(c1 % 3 == 2) {
        klasa = 'crvena';
    } else {
        klasa = 'zelena'
    }
    document.body.innerHTML += `<p class='${klasa}'>Paragraf ${c1}</p>`;
}

// zadatak peti

n = 5;
m = 1;

while( m <= n) {
    if(m % 2 == 0) {
        document.write(`<img src='php.jpg' style='border: 3px solid lime'>`);  
    } else {
        document.write(`<img src='php.jpg' style='border: 3px solid pink'>`);
    }
    m++;
}

//for petlja

n = 5;
for(let d = 1; d <= n; d++) {
    if(d % 2 == 0) {
        document.body.innerHTML += `<img src='php.jpg' style='border: 3px solid lime'>`;
    } else {
        document.body.innerHTML += `<img src='php.jpg' style='border: 3px solid pink'>`;
    }
}

// zadatak sesti

i = 1;
let sum = 0;

while(i <= 100) {
    sum += i;
    i++;
}
document.write(sum);

//for petlja

sum = 0;

for(let d2 = 1; d2 <= 100; d2++) {
    sum += d2;
}
console.log(sum);

// zadatak sedmi

n = 21;
i = 1;
sum = 0;

while(i <= n) {
    sum += i;
    i++;
}
document.write(`<p>Suma od 1 do ${n} iznosi ${sum}</p>`);

//for petlja

n = 20;
sum = 0;

for(let d3 = 1; d3 <= n; d3++) {
    sum += d3;
}
console.log(sum);
// zadatak osmi

n = 29;
m = 51;
let o = n;
sum = 0;

while(n <= m) {
    sum += n;
    n++;
}
document.write(`<p>Suma od ${o} do ${m} iznosi ${sum}</p>`);

//for petlja
n = 10;
m = 15;
sum = 0;

for(let d4 = n; d4 <= m; d4++) {
    sum += d4;
}
console.log(`Suma brojeva od ${n} do ${m} iznosi ${sum}`);

// zadatak deveti

n = 2;
m = 6;
o = n;
let proizvod = 1;

while(n <= m) {
    proizvod *= n;
    n++;
}
document.write(`<p>Proizvod brojeva od ${o} do ${m} iznosi ${proizvod}</p>`);

//for petlja

n = 4;
m = 9;
proizvod = 1;

for(let d5 = n; d5 <= m; d5++) {
    proizvod *= d5;
}
console.log(`Proizvod brojeva od ${n} do ${m} iznosi ${proizvod}`);

// zadatak deseti

n = 2;
m = 5;
o = n;
let sumakvadrata = 0;
let sumakubova = 0;

while(n <= m) {
    if(n % 2 == 0) {
        sumakvadrata += n**2
    }
    else {
        sumakubova += n**3
    }
    n++;
}
document.write(`<p>Suma kvadrata parnih brojeva od ${o} do ${m} iznosi ${sumakvadrata}</p>`);
document.write(`<p>Suma kubova neparnih brojeva od ${o} do ${m} iznosi ${sumakubova}</p>`);

//for petlja

n = 5;
m = 9;
sumakvadrata = 0;
sumakubova = 0;

for(let d6 = n; d6 <= m; d6++) {
    if(d6 % 2 == 0) {
        sumakvadrata += d6 ** 2;
    } else {
        sumakubova += d6 ** 3;
    }
}
console.log(`Suma kvadrata parnih brojeva od ${n} do ${m} iznosi ${sumakvadrata}`);
console.log(`Suma kubova brojeva od ${n} do ${m} iznosi ${sumakubova}`);


// zadatak jedanaesti

k = 24;
i = 1;
sum = 0;

while(i <= k) {
    if(k % i == 0) {
        sum ++;
    }
    i++;
}
document.write(`<p>Broj ${k} je deljiv sa ukupno brojeva: ${sum}</p>`);

//for petlja

k = 18;
sum = 0;

for(d7 = 1; d7 <= k; d7++) {
    if(k % d7 == 0) {
        sum ++;
    }
}
console.log(`Broj ${k} je deljiv sa ukupno brojeva: ${sum}`);

// zadatak dvanaesti

n = 11;
i = 1;
sum = 0;

while(i <= n) {
    if (n % i == 0) {
        sum ++;
    }
    i++; 
}
if(sum == 2) {
    document.write(`<p>Broj ${n} je prost broj.</p>`);
} else {
    document.write(`<p>Broj ${n} nije prost broj.</p>`);
}

//for petlja

n = 23;
sum = 0;

for(let d8 = 1; d8 <= n; d8++) {
    if(n % d8 == 0) {
    sum ++;
    }
}
if(sum == 2) {
    console.log(`Broj ${n} je prost broj`);
} else {
    console.log(`Broj ${n} nije prost broj`);
}


//dodatni zadatak sa sleka 7.12.2023.
/*
Napisati program koji unetom broju N:
a) Sabira sve cifre
b) Određuje aritmetičku sredinu cifara
c) Ispisuje cifre u obrnutom redosledu
*/

// a 

let N = 1567;
i = N;
let cifra;
sum = 0;

while(i >= 1) {
    cifra = i % 10;
    sum += cifra;
    i = Math.floor(i / 10);
}
console.log(`Suma cifara broja ${N} iznosi ${sum}`);

//b

i = N;
sum = 0;
let ukupnoCifara = 0;

while(i >= 1) {
    cifra = i % 10;
    sum += cifra;
    ukupnoCifara ++;
    i = Math.floor(i / 10);
}
let aritmetickaSredina = sum / ukupnoCifara;
console.log(`Aritmeticka sredina cifara broja ${N} iznosi ${aritmetickaSredina}`);

//c

N = 783;
i = N;
let obrnutiRedosled = '';

while(i >= 1) {
    cifra = i % 10;
    obrnutiRedosled += cifra;
    i = Math.floor(i / 10);
}
console.log(`Obrnuti redosled cifara broja ${N} je ${obrnutiRedosled}`);