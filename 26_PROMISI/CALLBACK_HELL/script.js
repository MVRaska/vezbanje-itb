let getJSON = (resource, callback) => {
    // 1. Kreiranje XML objekta
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if(request.readyState == 4 && request.status == 200) {
            // Sve OK
            let data = JSON.parse(request.responseText);
            callback(data, undefined);
        }
        else if(request.readyState == 4) {
            // Nešto nije OK
            callback(undefined, "Desila se greska");
        }
    });

    // 2. Otvaramo kreirani zahtev
    request.open("GET", resource);

    // 3. Slanje zahteva
    request.send();
}
/*
getJSON('../JSON/prvi.json', (parametar) => {
    console.log(parametar);
});
*/
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



console.log('Kraj fajla');