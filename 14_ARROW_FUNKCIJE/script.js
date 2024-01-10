// klasicne (imenovane) funkcije

function sum(a, b) {
    return a + b;
}
let rez = sum(1, 2);
console.log(rez);


// anonimne funkcije

let suma = function(a, b) {
    return a + b;
}
console.log(suma(1, 2));


// arrow funkcije - anonimne funkcije sa 2 specificna svojstva koja ih razdvajaju od anonimnih funkcija: skracen zapis i znacenje kljucne reci this

let suma2 = (a, b) => {
    return a + b;
}
console.log(suma2(2, 6));


let hello = () => {
    console.log('Hello!');
}
hello();


let echo = (s1, s2) => {
    let result = s1 + ', ' + s2;
    console.log(result);
}
echo('Ja', 'jesam');

// zadatak 1

function neparan(n) {
    if(n % 2 == 1) {
        return true;
    } else {
        return false;
    }
}

// zadatak 1, nacin 2

function neparan(n) {
    let x;   //vazi u bloku u kojem je definisana
    if(n % 2 == 1) {
        x = true;
    } else {
        x = false;
    }
    return x;
}


function neparan2(n) {
    if(n % 2 == 1) {
        var x = true;    //vazi unutar funkcije u kojoj je deklarisana
    } else {
        var x = true;
    }
    var x;  //tacno, ali besmisleno
    return x;;
}

let p = 5;
console.log(neparan(p));
console.log(neparan2(p));

// zadatak 1, nacin 3

let neparan3 = (n) => {
    let x = false;
    if(n % 2 == 1) {
        x = true;
    }
    return x;
}
console.log(neparan(6));

let neparan4 = (n) => {
    return (n % 2 == 1) ?  true : false;  // ? : - ternarni operator(tri operatora)
}
console.log(neparan4(6));

// zadatak 1, nacin 4

let neparan5 = (n) => {
    return (n % 2 == 1);
}
console.log(neparan5(6));

// zadatak 1, nacin 5

let neparan6 = n => n % 2 == 1;

console.log(neparan6(6));

let uvecajZaDva = n => (n += 2);
console.log(uvecajZaDva(5));

// zadatak sa sleka 
//1. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja. U oba slučaja, brojevi su međusobno različiti. 
//2. Napisati funkciju koja vraća sliku za prosledjenu adresu slike.
//Rezultat poziva iskoristiti da sliku prikažete u browseru. 
// U html fajlu, unutar body taga, dodajte div sa pozadinskom plavom bojom, i neka sadrži neki tekst. Onda u javascriptu pozovite ovu funkciju, i njen rezultat dodatje u div tag (znači da u div tagu ostane tekst, samo da se doda sličica posle teksta)

//zadatak 1

let maks2 = (a, b) => (a > b) ? a : b;
console.log(maks2(-16.06, 5.36));

let maks4 = (x, y, z, s) => maks2(maks2(x, y), maks2(z, s));
console.log(maks4(1.58, -18, 0, -10));


//zadatak 2

let slika = adresa => `<img src='${adresa}'>`;
let d = document.getElementById('d');
d.innerHTML += slika('https://th.bing.com/th/id/OIP.G2ljjpFbGrnpFfzLGXmvYwHaLI?rs=1&pid=ImgDetMain');
