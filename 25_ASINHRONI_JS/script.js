// const request = new XMLHttpRequest();
// request.addEventListener('readystatechange', function() {
//     console.log(request.readyState);
//     console.log(request.responseText);
// });
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
// request.send();

const request = new XMLHttpRequest();
request.addEventListener('readystatechange', function() {
    if(request.readyState == 4 && request.status == 200) {
        let data = JSON.parse(request.responseText);
        console.log(data);
        console.log(data[5]);
        console.log(data[5].title);
    } else if(request.readyState == 4) {
        console.log('Desila se greska');
    }
});
request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();

// VEZBA - slad 16
/*
Uspostaviti konekciju ka endpointu za users resurs: https://jsonplaceholder.typicode.com/users
Ispisati u konzoli one korisnike čiji website ima domen „.com“.
Ispisati korisnike čije ime sadrži reč „Clementin“.
Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“. 
Ispisati sve različite gradove u kojima rade ovi korisnici.
Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.
*/

let request1 = new XMLHttpRequest();
request1.addEventListener('readystatechange', () => {
    if(request1.readyState == 4 && request1.status == 200) {
        let data = JSON.parse(request1.responseText);
        data.forEach(user => {
            if(user.website.includes('.com')) {
                console.log(user);
            }
        });
    } else if(request1.readyState == 4) {
        console.log('Greska');
    }
});
request1.open('GET', 'https://jsonplaceholder.typicode.com/users');
request1.send();

let request2 = new XMLHttpRequest();
request2.addEventListener('readystatechange', () => {
    if(request2.readyState == 4 && request2.status == 200) {
        let data = JSON.parse(request2.responseText);
        data.forEach(user => {
            if(user.name.includes('Clementin')) {
                console.log(user);
            }
        });

    } else if(request2.readyState == 4) {
        console.log('Greska');
    }
});
request2.open('GET', 'https://jsonplaceholder.typicode.com/users');
request2.send();

let request3 = new XMLHttpRequest();
request3.addEventListener('readystatechange', () => {
    if(request3.readyState == 4 && request3.status == 200) {
        let data = JSON.parse(request3.responseText);
        data.forEach(user => {
            if(user.company.name.includes('Group') || user.company.name.includes('LLC')) {
                console.log(user);
            }
        });
    } else if(request3.readyState == 4) {
        console.log('Greska');
    }
});
request3.open('GET', 'https://jsonplaceholder.typicode.com/users');
request3.send();

let request4 = new XMLHttpRequest();
request4.addEventListener('readystatechange', function() {
    if(request4.readyState == 4 && request4.status == 200) {
        let data = JSON.parse(request4.responseText);
        let nizGradova =[];
        data.forEach(user => {
            if(!nizGradova.includes(user.address.city)) {
                nizGradova.push(user.address.city);
            }
        });
        console.log(nizGradova);
    } else if(request4.readyState == 4) {
        console.log('Greska');
    }
});
request4.open('GET', 'https://jsonplaceholder.typicode.com/users');
request4.send();

let request5 = new XMLHttpRequest();
request5.addEventListener('readystatechange', function() {
    if(request5.readyState == 4 && request5.status == 200) {
        let data = JSON.parse(request5.responseText);
        let br = 0;
        data.forEach(user => {
            if(user.address.geo.lat < 0 && user.address.geo.lng < 0) {
                br++;
            }
        });
        console.log(`Broj korisnika koji zive na geografskoj sirini i duzini koje su negativne je: ${br}`);
    } else if(request5.readyState == 4) {
        console.log('Greska');
    }
});
request5.open('GET', 'https://jsonplaceholder.typicode.com/users');
request5.send();