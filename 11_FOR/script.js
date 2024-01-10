// zadatak 1

//while petlja
let i = 1;

while(i <= 20) {
    console.log(`Broj ${i}`);
    i++;
}

//for petlja

for(let j = 1; j <= 20; j++) {
    console.log(`Ovo je broj ${j}`);
}

// zadatak 2

for(let k = 20; k >= 1; k--) {
    console.log(`Ovo je k ${k}`);
}

// zadatak 3
//Ispisati parne brojeve od 1 do 20

for(let a = 2; a <= 20; a += 2) {
    console.log(a);
}

// zadatak 4
//Ispisati dvostruku vrednost brojeva od 5 do 15 

for(let a1 = 5; a1 <= 15; a1++) {
    let a2 = 2 * a1;
    console.log(a2);
}

// zadatak 5

let n = 6;
let suma = 0;

for(let p = 1; p <= n; p++) {
    suma += p;
}
console.log(`Suma brojeva od 1 do ${n} je ${suma}`);

// zadatak 6
//Odrediti sumu brojeva od n do m 

n = 6;
m = 10;
let sum = 0;

for(let a3 = n; a3 <= m; a3++) {
    sum += a3;
}
console.log(`Suma brojeva od ${n} do ${m} iznosi ${sum}`);

// zadatak 7
//Odrediti proizvod brojeva od n do m

n = 3;
m = 6;
let proizvod = 1;

for(let a4 = n; a4 <= m; a4++) {
    proizvod *= a4;
}
console.log(`Proizvod brojeva od ${n} do ${m} iznosi ${proizvod}`);

// zadatak 8
//Odrediti sumu kvadrata brojeva od n do m

n = 4;
m = 6;
sum = 0;

for(let a5 = n; a5 <= m; a5++) {
    sum += a5 ** 2;
}
console.log(`Suma kvadrata brojeva od ${n} do ${m} iznosi ${sum}`);

// zadatak 9
//Preuzeti proizvoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora)

for(i = 1; i <= 3; i++) {
    document.write(`<img src='${i}.jpg'>`);
} 

// zadatak 10
//Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100.

proizvod = 1;

for(i = 20; i <= 100; i++) {
    if(i % 11 == 0) {
        proizvod *= i;
    }
}
console.log(`Proizvod brojeva od 20 do 100 deljivih sa 11 iznosi ${proizvod}`);

// zadatak 11
//Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.

let broj = 0;

for(i = 5; i <= 150; i++) {
    if(i % 13 == 0) {
        broj++;
    }
}
console.log(`U intervalu od 5 do 150 ima brojeva deljivih sa 13: ${broj}`);

// zadatak 12
//Ispisati aritmetičku sredinu brojeva od n do m

n = 3;
m = 6;
sum = 0;
let br = 0;

for(i = n; i <= m; i++) {
    sum += i;
    br ++;
}
let aritmet = sum / br;
console.log(`Aritmeticka sredina brojeva od ${n} do ${m} iznosi ${aritmet}`);

// zadatak 13
//Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno.

n = -16;
m = 5;
let brojpoz = 0;
let brojneg = 0;

for(i = n; i <= m; i++) {
    if(i > 0) {
        brojpoz ++;
    } else if (i < 0) {
        brojneg ++;
    }
}
console.log(`Izmedju brojeva ${n} i ${m} ima negativnih brojeva ${brojneg} i pozitivnih brojeva ${brojpoz}`);

// zadatak 14
//Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5.

sum = 0;

for(i =5; i <= 50; i++) {
    if(i % 3 ==0 || i % 5 == 0) {
        sum ++;
    }
}
console.log(`Brojeva deljivih sa 3 ili sa 5, izmedju brojeva 5 i 50, ima ${sum}`);

// zadatak 15
//Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.

n = 221;
m = 656;
broj = 0;
sum = 0;

for(i = n; i <= m; i++) {
    if(i % 10 == 4) {
        sum += i;
        broj ++;
    }
}
console.log(`Izmedju brojeva ${n} i ${m} ima ${broj} brojeva cija je poslednja cifra 4 i njihova suma iznosi ${sum}`);

// zadatak 16
//Odrediti sumu brojeva od n do m koji nisu deljivi brojem a

n = 5;
m = 15;
a = 4;
sum = 0;
for(i =n; i <= m; i++) {
    if(i % a != 0) {
        sum += i;
    }
}
console.log(`Suma brojeva od ${n} do ${m} koji nisu deljivi sa ${a} iznosi ${sum}`);

// zadatak 17
//Odrediti proizvod brojeva od n do m koji su deljivi brojem a

n = 15;
m = 22;
a = 5;
proizvod = 1;

for(i = n; i <= m; i++) {
    if(i % a == 0) {
        proizvod *= i;
    }
}
console.log(`Proizvod brojeva izmedju ${n} i ${m} koji su deljivi sa ${a} iznosi ${proizvod}`);

//  zadatak 17, drugi nacin

n = 3;
m = 9;
a = 4;
prod = 1;
let n1 = n;
while (n1 % a != 0) {
  n1++;
}
for (let i = n1; i <= m; i += a) {
  prod *= i;
}
console.log(
  `Proizvod brojeva od ${n} do ${m} koji su deljivi brojem ${a} je ${prod}`
);

// zadatak 18
//Odrediti sa koliko brojeva je deljiv uneti broj k

k = 15;
broj = 0;

for(i = 1; i <= k; i++) {
    if(k % i == 0) {
        broj++;
    }
}
console.log(`Broj ${k} ima ukupno delilaca : ${broj}`);

// zadatak 18, drugi nacin

k = 12;
if(k == 1) {
    broj = 1;
} else {
    broj = 2;
    for(i = 2; i <= k / 2 ; i++) {
        if(k % i == 0) {
            broj++;
        }
    }
}
console.log(`Broj delilaca broja ${k} iznosi ${broj}`);

// zadatak 19
//Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom

n = 16;
broj = 0;

for(i = 1; i <= n; i++) {
    if(n % i == 0) {
        broj++;
    }
}
if(broj > 2) {
    console.log(`Broj ${n} nije prost broj`);
} else {
    console.log(`Broj ${n} je prost broj`);
}

// zadatak 19, drugi nacin

n = 13;
let prost = true;

for(i = 2; i <= n / 2; i++) {
    if(n % i == 0) {
        prost = false;
        break;
    }
}
if (prost) {
    console.log(`Broj ${n} je prost broj`);
} else {
    console.log(`Broj ${n} nije prost broj`);
}

// zadatak 20

let divTabel = document.getElementById('tabela');
let tabela = '<table>';
for(i = 1; i <= 6; i++){
    let obojen = 'belo';
    if(i % 2 == 0) {
        obojen = 'roze';
    }
    tabela +=
    `<tr class='${obojen}'>
        <td>Tekst</td>
        <td>Tekst</td>
    </tr>`;
}
tabela +='</table>'

divTabel.innerHTML = tabela;