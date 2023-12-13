console.log('Funkcije');

//funkcija za ispis u konzoli

function zdravo() {
    console.log('Hello world!');
}
zdravo();   //poziv funkcije
zdravo();   

////////////////////////////////////////
//funkcija za ispis prosledjenog texta (prosledjuje se 1 parametar)
////////////////////////////////////////

function ispisiText(text) {
    console.log(text);
}
ispisiText('Cao!');  //Poziv kada prosledjujemo neku vrednost
ispisiText('Hej!');

let t = 'Moj text';
ispisiText(t);

//////////////////////////////////////////////
//funkcija kojoj se prosledjuju dva parametra
/////////////////////////////////////////////
 function imePrezime(ime, prezime) {
    console.log(`Ulogovana osaoba je ${ime} ${prezime}.`);
 }
 imePrezime('Milan', 'Milic');
 let imeOsobe = 'Stefan';
 let prezimeOsobe = 'Ilic';
 imePrezime(imeOsobe, prezimeOsobe);

 //////////////////////////////////////////////
//funkcija koja vrsi sabiranje dva broja
/////////////////////////////////////////////

function zbir(br1, br2) {
    let rezultat = br1 + br2;
    console.log(`${br1} + ${br2} = ${rezultat}`);
}
zbir(10, 21);

let b1 = -5;
let b2 = 13;
zbir(b1, b2);
zbir(5+4, 50);
zbir(zbir(1, 4), zbir(-4, 5));

//////////////////////////////////////
//funkcija koja vraca vrednost
//////////////////////////////////////

function razlika(umanjenik, umanjilac) {
    let razlikaRezultat = umanjenik - umanjilac;
    return razlikaRezultat;
}
console.log(`Razlika je: ${razlika(15, 3)}`);
let r = razlika(100, 4);
console.log(`Funkcija vraca ${r}`);

let r1 = razlika(6, 3);
let r2 = razlika(17, 7);
let r3 = razlika(r1, r2);
console.log(`Promenljiva r3 iznosi ${r3}.`);
let r4 = razlika(razlika(40, 60), razlika(10, 4));
console.log(`Promenljia r4 iznosi ${r4}`);

//////////////////////////////////////
//funkcija sa vise return - a
//////////////////////////////////////

function temperaturaVode(temp) {
    if(temp <= 0) {
        return 'Voda se ledi';
    } else if(temp >= 100) {
        return 'Voda isparava';
    }
    else {
        return 'Voda je u tecnom agregatnom stanju';
    }
}
console.log(temperaturaVode(-5));
let rezTempVode = temperaturaVode(114);
console.log(rezTempVode);

//////////////////////////////////
//Drugi nacin
/////////////////////////////////

function temperaturaVode1(temp) {
    let textZaIspis ='';
    if(temp <= 0) {
        textZaIspis = 'Voda se ledi';
    } else if(temp >= 100) {
        textZaIspis = 'Voda isparava';
    }
    else {
        textZaIspis = 'Voda je u tecnom agregatnom stanju';
    }
    return textZaIspis;
}
console.log(temperaturaVode1(50));

function temperaturaVode2(temp) {
    let textZaIspis = 'Voda je u tecnom agregatnom stanju';
    if(temp <= 0) {
        textZaIspis = 'Voda se ledi';
    } else if(temp >= 100) {
        textZaIspis = 'Voda isparava';
    }
    return textZaIspis;
}
console.log(temperaturaVode2(90));

let pTempVode = document.getElementById('tempVode');
pTempVode.innerHTML = temperaturaVode2(100);



//zadatak 3

function neparan(n) {
    if(n % 2 != 0) {
        return 'Broj je neparan';
    } else {
        return "Broj je paran";
    }
}

console.log(neparan(6));


//zadatak 4

function maks2(n1, n2) {
    let veci = n1;
    if(n2 > n1) {
        veci = n2;
    }
    return veci;
}
console.log( maks2(6, 60));

function maks4(a, b, c, d) {
    let max = a;
    if(b > a) {
        max = b;
        if(c > b) {
            max = c;
            if(d > c) {
                max = d;
            }
        }
    }      
    return max;
}
console.log(maks4(-1, 2, 16, 4));

function maks41(k, l, m, o) {
    let prviMax = maks2(k, l);
    let drugiMax = maks2(m, o);
    
    return max2(prviMax, drugiMax)  
}
console.log(maks4(5, 6, 10, 2));

function maks42(x, y, z, w) {
    return maks2(maks2(x, y), maks2(z, w));
}
console.log(maks42(16, 12, 3, -1));

//zadatak 5

function prikaziSliku(adresa) {
    document.write(`<img src='${adresa}'>`);
}
prikaziSliku('https://th.bing.com/th/id/OIP.RLa15AN_Znnd6NUZ8YgI9QHaFj?rs=1&pid=ImgDetMain');
prikaziSliku('1.jpg');

//zadatak 5. sa elementom u kojem slika treba da se prikaze

function prikaziSlikuUElementu(putanja, id) {
    let element = document.getElementById(id);
    element.innerHTML = `<img src='${putanja}'>`;
}
prikaziSlikuUElementu('1.jpg', 'slika1');


//zadatak 6

function oboji(boja) {
    let paragraf = document.getElementById('parag');
    paragraf.style.color = boja;
}
oboji('red');

//zadatak 7

function sedmiDan(n){
    if(n % 7 == 0) {
        console.log('Nedelja');
    } else if(n % 7 == 1) {
        console.log('Ponedeljak');
    } else if(n % 7 == 2) {
        console.log('Utorak');
    } else if(n % 7 == 3) {
        console.log('Sreda');
    } else if(n % 7== 4) {
        console.log('Cetvrak');
    } else if(n % 7 == 5) {
        console.log('Petak');
    } else {
        console.log('Subota');
    }
}
sedmiDan(11);




//vezba - zadatak 1

function suma(n, m) {
    let sum = 0;
    for(let i = n; i <= m; i++) {
        sum += i ** 3;
    }
    return sum;
}
console.log(suma(2, 5));

//vezba - zadatak 2

function godine(godRodjenja) {
    let datum = new Date();
    let trenutnaGod = datum.getFullYear();
    return trenutnaGod - godRodjenja;
}
console.log(godine(1994));

//vezba - zadatak 3

function deljiv(n, m, k) {
    let bro = 0;
    for(i = n; i <= m; i++) {
        if(i % k == 0) {
            bro ++;
        }
    }
    return bro;
}
deljiv(2, 10, 2);
console.log(deljiv(2, 10, 2));

//vezba - zadatak 4

function pilot(poletanjeSati, poletanjeMinuti, sletanjeSati, sletanjeMinuti) {
    let poletanje = poletanjeSati * 60 + poletanjeMinuti;
    let sletanje = sletanjeSati * 60 + sletanjeMinuti;
    let trajanjeLeta = sletanje - poletanje;
    return `${Math.floor(trajanjeLeta / 60)} : ${trajanjeLeta % 60}`;
}
console.log(pilot(10, 56, 16, 10));

//vezba - zadatak 5

function jaban(jabuka, banana) {
    let jab = Math.round(0.8 * jabuka);
    let porcijaOdJab = Math.floor(jab / 2);
    let porcijaOdBan = Math.floor(banana / 3);
    let porcija  = porcijaOdJab;
    if(porcijaOdJab > porcijaOdBan) {
        porcija = porcijaOdBan;
    }
    return porcija;
}
console.log(jaban(20, 21));

//vezba - zadatak 6

function praksa(n, a, d) {
    let plata = a;
    let ukupno = a;
    for(i = 2; i <= n; i++) {
        plata *= d;
        ukupno += plata;
    }
    return ukupno;
}
console.log(praksa(4, 50000, 1.2));
