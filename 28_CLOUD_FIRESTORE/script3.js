let datum1 = new Date('2021-01-26 17:00:00');
let datum2 = new Date('2021-01-26 21:00:00');

//collection('..').add({})
//collection('..').doc('..').set({})

db.collection('task')
.add({
    title: 'Cas ITBootcamp',
    start_date: firebase.firestore.Timestamp.fromDate(datum1),
    due_date: firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,
    description: 'Cas baza podataka'
})
.then(() => {
    console.log(('Uspesno dodat task'));
})
.catch(e => {
    console.log(`Greska: ${e}`);
});


// doc('...').set({}) -> menja ceo dokument('gazi')
// doc('...').update({}) -> menja sadrzaj postojeceg polja

db.collection('users').doc('cust4')
.update({
    age: 28
})
.then(() => {
    console.log('Uspesno promenjene godine');
})
.catch(e => {
    console.log(`Greska: ${e}`);
});


class Film {
    constructor(n, o, niz, br) {
        this.name = n;
        this.director = o;
        this.genres = niz;
        this.rating = br;
    }
}

let film1 = new Film('Nesto', {ime: 'Milan', prezime: 'Milic'}, ['komedija'], 7.2);
let film2 = new Film('Nesto Nesto', {ime: 'Mila', prezime: 'Jovic'}, ['drama'], 7.4);
let film3 = new Film('Nesto', {ime: 'Milka', prezime: 'Ilic'}, ['horor'], 8.0);

db.collection('filmovi').doc('film1')
.set(Object.assign({}, film1))
.then(() => {
    console.log('Uspesno dodat film1');
})
.catch(e => {
    console.log(`Greska: ${e}`);
});


db.collection('filmovi').doc('film2')
.set(Object.assign({}, film2))
.then(() => {
    console.log('Uspesno dodat film2');
})
.catch(e => {
    console.log(`Greska: ${e}`);
});


db.collection('filmovi').doc('film3')
.set(Object.assign({}, film3))
.then(() => {
    console.log('Uspesno dodat film3');
})
.catch(e => {
    console.log(`Greska: ${e}`);
});


db.collection('filmovi').doc('film1')
.update({
    name: 'Sat'
})
.then(() => {
    console.log('Uspesno promenjen naziv');
})
.catch(e => {
    console.log(`Greska: ${e}`);
});

db.collection('filmovi').doc('film1')
.set({
    genres: ['komedija', 'romansa']
}, {merge: true})
.then(() => {
    console.log('Uspesno promenjen zanr');
})
.catch(e => {
    console.log(`Greska: ${e}`);
});

// ili

db.collection('movies').doc('m1')
.set({
    name: 'Something',
    direstor: {
        name: 'Nikolo',
        surname: 'Alegri'
    },
    release_year: 1988,
    genres: ['drama', 'comedy'],
    rating: 8.3
})
.then(() => {
    console.log('Uspesno dodat film m1');

    return db.collection('movies').doc('m1')
    .update({
        rating: 8.4
    });
})
.then(() => {
    console.log('Uspesno izmenjen zanr filma m1');
})
.catch(e => {
    console.log(`Greska: ${e}`);
})


// dohvatanje dokumenta get()

db.collection('movies').doc('m1')
.get()
.then(doc => {
    if(doc.exists) {
        let data = doc.data();
        console.log('Uspesno skinut dokument' + doc.id);
        console.log(data);
    } else {
        console.log('Ne postoji ovaj dokument');
    }
})
.catch(e => {
    console.log(`Greska: ${e}`);
});


/*
sinhronizovanje set() i get()
db.collection('movies').doc('m1')
.set({
    name: 'Something',
    direstor: {
        name: 'Nikolo',
        surname: 'Alegri'
    },
    release_year: 1988,
    genres: ['drama', 'comedy'],
    rating: 8.3
})
.then(() => {
    console.log('Uspesno dodat film m1');

    return db.collection('movies').doc('m1')
    .update({
        rating: 8.4
    });
})
.then(() => {
    console.log('Uspesno izmenjen zanr filma m1');

    return db.collection('movies').doc('m1')
    .get()
})
.then(doc => {
    if(doc.exists) {
        let data = doc.data();
        console.log('Uspesno skinut dokument' + doc.id);
        console.log(data);
    } else {
        console.log('Ne postoji ovaj dokument');
    }
})
.catch(e => {
    console.log(`Greska: ${e}`);
})
*/

// dohvatanje svih dokumenata iz kolekcije

db.collection('filmovi')
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(doc.id, '=>', data);
    });
})
.catch(e => {
    console.log(`Greska: ${e}`);
})