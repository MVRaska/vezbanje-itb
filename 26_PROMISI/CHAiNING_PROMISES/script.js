let getJSON = resource => {
    // 1. Kreiranje XML objekta
    const request = new XMLHttpRequest();

    // 2. Otvaramo kreirani zahtev
     request.open("GET", resource);

    // 3. Slanje zahteva
     request.send();

    /*let promise = new Promise((resolve, reject) => {
        request.addEventListener("readystatechange", () => {
            if(request.readyState == 4 && request.status == 200) {
                // Sve OK
                let data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if(request.readyState == 4) {
                // Nešto nije OK
                reject("Desila se greska");
            }
        });
    });

    return promise;
    */

    return new Promise((resolve, reject) => {
        request.addEventListener("readystatechange", () => {
            if(request.readyState == 4 && request.status == 200) {
                // Sve OK
                let data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if(request.readyState == 4) {
                // Nešto nije OK
                reject("Desila se greska");
            }
        });
    });
}

getJSON('../JSON/prvi.json').then(sadrzaj => {
    console.log('prvi.json', sadrzaj);
    return getJSON('../JSON/drugi.json'); // vraca instancu promise, koja moze imati.then i .catch
    
}).then(sadrzaj2 => {
    console.log('drugi.json', sadrzaj2);  // ako je drugi.json resolved onda ispisuje njegove podatke
    return getJSON('../JSON/treci.json');
}).then(sadrzaj3 => {
    console.log('treci.json', sadrzaj3);  //ako je treci.json resolved ispisuje njegove podatke
})
.catch(greska => {
    console.log(('Rejected:', greska));  //ako je makoji fajl rejected upada u catch granu
});

/*
getJSON('../JSON/prvi.json', (parametar) => {
    console.log(parametar);
});
*/
/*
getJSON('../JSON/prvi.json', (data, err) => {
    if(data) {
        console.log(data);  //sve ok u prvi.json fajli, vraca podatke data iz prvi.json fajla
        //Ako je sve ok u prvom fajlu onda uzmi drugi.json fajl
        getJSON('../JSON/drugi.json', (data, err) => {
            if(data) {
                console.log(data);  //sve oku drugi.json fajlu, vraca podatke data iz drugi.json fajla
                getJSON('../JSON/treci.json', (data, err) => {
                    if(data) {
                        console.log(data);  //sve ok u treci.json, vraca podatke data iz treci.json fajla
                    } else {
                        console.log(err);  //ispisuje gresku iz treci.json fajla
                    }
                });
            } else {
                console.log(err);  //ispisuje gresku iz drugi.json fajla
            }
        });
    } else {
        console.log(err);  //ispisuje gresku iz prvi.json fajla
    }
});
*/


console.log('Kraj fajla');