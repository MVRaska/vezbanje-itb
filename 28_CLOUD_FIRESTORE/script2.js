db.collection('users').doc('cust4')
.set({
    name: 'Ivan',
    surname: 'Ivic',
    age: 38
})
.then(() => {
    console.log('Uspesno dodat korisnik');
})
.catch(e => {
    console.log(`Greska: ${e}`);
})

// JS poziva set metodu kojoj se prosledjuje OBJEKAT
// na osnovu tog objekta se u bazi kreira novi DOKUMENT


class User {
    constructor(n, s, a) {
        this.name = n;
        this.surname = s;
        this.age = a;
    }
}   

let branko = new User('Branko', 'Milivojevic', '26');
branko.grad = 'Paracin';

/*
ne moze da se posalje u firebase objekat sa metodom

branko.potpis = function() {
    console.log(this.name, this.surname);
}      //dodavanje metode - u console-i radi, ne dodaje se u set() objekat koji ima metode. izbacuje gresku i ne upisuje u bazu podataka
branko.potpis();
*/

/* ovako ne moze:
db.collection('users').doc('cust4')
.set(branko)
.then(() => {
    console.log('Uspesno dodat korisnik');
})
.catch(e => {
    console.log(`Greska: ${e}`);
})
*/

//ili

db.collection('users').doc('cust4')
.set({
    name: branko.name,
    surname: branko.surname,
    age: branko.age
})
.then(() => {
    console.log('Uspesno dodat korisnik');
})
.catch(e => {
    console.log(`Greska: ${e}`);
})

//ili

db.collection('users').doc('cust4')
.set(Object.assign({}, branko))
.then(() => {
    console.log('Uspesno dodat korisnik');
})
.catch(e => {
    console.log(`Greska: ${e}`);
})

// Branko.potpis = function() {
//     console.log(this.name, this.surname);
// }
// Branko.potpis();

let ivan = new User('Ivan', 'Stanimirovic', 37);
ivan.poreklo = 'Leskovac';

User.prototype.bojakose = 'crna';  //sluzi da se naknadno dodaju polja i metode u klasi
console.log(branko);
db.collection('users').doc('istani')
.set(Object.assign({}, ivan))
.then(() => {
    console.log('Uspesno dodat korisnik');
})
.catch(e => {
    console.log(`Greska: ${e}`);
})


/*
JS OBJEKAT:
1. Mogu da se za poseban objekat dodaju polja i metode (kao i za dokument u bazi)
2. Moguce je klasi kojoj pripada objekat da se dodaju poljai metode
3. Moguce je nasledjivanje klasa (User -> userCreditCart(nova klasa, izvedena od klase User))


primer:
HTML: forma gde se unose korisnici
za sve korisnike: ime, prezime, godine, pretplata
Ako korisnik odabere karticu kao nacin pretplate, za njega pamtiti i br kartice
*/
