console.log(db);

const customers = 'customers';
let users = db.collection('users');
console.log(users);

let d1 = users.doc('marym');
console.log(d1);
let d2 = db.doc('users/marym');
console.log(d1);

/*
CRUD - create, read, update, delete
za pristup dokumentu:
let doc = db.collection('...').doc('...');
kod dokumenta imamo sledece operacije:
-doc.set(...) -> create
-doc.get(...) -> read
-doc.update(...) -> update
doc.delete(...) -> delete

sve 4 metode vracaju promise
nakon ovih poziva lancaju se .then() i .catch()
*/

/* 1. Create (set)  */
let cust1 = {
    name: 'Mika',
    age: 38,
    addresses: ['Loznica', 'Valjevo'],
    salary: 460
};   //javascript objekat na osnovu kojeg formiramo dokument u bazi

db.collection(customers).doc('cust1')
.set(cust1)
.then(() => {
    document.body.innerHTML += 'Korisnik dodat u bazu';
})
.catch(err => {
    document.body.innerHTML += `Greska: ${err}`;
})

db.collection(customers).doc()
.set({
    name: 'Zika',
    ade: 22,
    addresses: ['Nis'],
    salary: 600
})
.then(() => {
    document.body.innerHTML += 'Korisnik dodat u bazu';
})
.catch(err => {
    document.body.innerHTML += `Greska: ${err}`;
})
