// dohvatanje dokumenata iz kolekcije po redosledu polja (vrednosti polja)
// dokument mora da sadrzi to polje da bi bio dohvacen
//ako sortiramo po vise od jednog polja neophodno je kreirati index za operacju sortiranja ili/i filtriranja


/*
db.collection('users')
.orderBy('name', 'desc')
.orderBy('age','asc')
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
})
*/


//dohvatanje odredjenog broja dokumenata (limitiranje)

/*
db.collection('users')
.orderBy('name', 'desc')
.orderBy('age','asc')
.limit(2)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
})
*/


// dohvatanje dokumenata koji zadovoljavaju odredjene uslove(filtriranje)

//Iz kolekcije customers, pročitati sve klijente koji:
//Imaju platu veću ili jednaku od 500

/*
db.collection('customers')
.where('salary', '>=', 500)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
})
*/

//Imaju platu između 300 i 800

/*
db.collection('customers')
.where('salary', '>=', 300)
.where('salary', '<=', 800)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
})
*/

//Imaju platu manju od 900, i imaju 30 godina

/*
db.collection('customers')
.where('salary', '<=', 900)
.where('age', '==', 30)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
})
*/

// dohvatiti sve klijente koji imaju preko 25 godina i sortirati po imenu

/*
db.collection('customers')
.where('age', '>', 25)
.orderBy('age')
.orderBy('name')
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
})
*/

//Imaju adresu u Nišu ili Beogradu

/*
db.collection('customers')
.where('addresses', 'array-contains-any', ['Nis', 'Beograd'])
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
})
*/

//Imaju 22, 25 ili 28 godina

/*
db.collection('customers')
.where('age', 'in', [22, 25, 28])
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
})
*/

/*
Iz kolekcije tasks, pročitati sve zadatke, sortirane po nazivu.
Iz kolekcije tasks, pročitati sve zadatke, i koji:
Su prioritetni,
Treba da se izvrše u tekućoj godini,
Su završeni,
Tek treba da počnu.
*/

/*
db.collection('tasks')
.orderBy('title')
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
})
*/

/*
db.collection('tasks')
.where('priority', '==', 'true')
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
})
*/

/*
let datum = new Date();
let god = datum.getFullYear();
let dat1 = new Date(god, 0, 1) //1.januar. tekuce godine
let dat2 = new Date(god + 1, 0, 1) // 1. januar sledece godine
let ts1 = firebase.firestore.Timestamp.fromDate(dat1);
let ts2 = firebase.firestore.Timestamp.fromDate(dat2);

db.collection('tasks')
.where('Due Date', '<', ts2)
.where('Due Date', '>=', ts1)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
})
*/

/*
let datum = new Date();

db.collection('tasks')
.where('Due Date', '<=', datum)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
})
*/
let datum = new Date();

db.collection('tasks')
.where('Start Date', '>', datum)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
})


/*
Iz kolekcije movies, pročitati sve filmove:
Koje je režirao George Lucas,
Čija je ocena između 5 i 10,
Kojima je žanr komedija, tragedija ili drama,
Koji su izašli u 21. veku.
Prikazati sve informacije o najbolje rangiranom filmu.
Prikazati sve informacije o najslabije rangiranoj drami.
*/

/*
db.collection('movies')
.where('direstor.name', '==', 'Nikolo')
.where('direstor.surname', '==', 'Alegri')
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data()
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
})
*/

/*
db.collection('movies')
.where('rating', '>', 5)
.where('rating', '<', 10)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data()
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
})
*/

/*
db.collection('movies')
.where('genres', 'array-contains-any', ['comedy', 'tragedy', 'drama'])
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data()
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
})
*/

/*
db.collection('movies')
.where('release_year', '>', 2000)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data()
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
})
*/

/*
db.collection('movies')
.orderBy('rating', 'desc')
.limit(1)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data()
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
})
*/

/*
db.collection('movies')
.where('genres', 'array-contains', ['comedy'])
.orderBy('rating')
.limit(1)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data()
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
})
*/
