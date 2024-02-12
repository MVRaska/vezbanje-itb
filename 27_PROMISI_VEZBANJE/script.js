const form = document.querySelector('#order');
const capacity = document.querySelector('#capacity');
const div = document.querySelector('#result');


function getItems(resource, resolve, reject) {
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function() {
        if(request.readyState == 4 && request.status == 200) {
            let data = JSON.parse(request.responseText);
            resolve(data);  //resolve radi nesto sa podacima koji su stigli sa servera
        } else if(request.readyState == 4) {
            reject('Desila se greska');
        }
    });
    request.open('GET', resource);
    request.send();
}

function submitFormVarijanta1(e) {
    e.preventDefault();
    //1. Odrediti artikle koji vise nisu na stanju  

    let nizArtikala = [];

    getItems('JSON/stock.json', (data)=> {
        data.forEach(artikl => {
            if(artikl.stock == 0) {
                nizArtikala.push(artikl.id)
            }
        });
        //2. Odredit ukupnu tezinu svih artikala
        getItems('JSON/weights.json', data => {
            let totalWeight = 0;
            data.forEach(artikl => {
                if(nizArtikala.includes(artikl.id)) {
                    totalWeight += artikl.weight;
                }
            });
            //3. Ako je tezina svih artikala manja od kapaciteta kamiona

            if(totalWeight <= Number(capacity.value)) {
                //3.1. Odrediti i ispisati ukupnu cenu svih tih artikala
                getItems('JSON/prices.json', data => {
                    let totalPrice = 0;
                    data.forEach(artikl => {
                        if(nizArtikala.includes(artikl.id)) {
                            totalPrice += artikl.price;
                        }
                    });
                    div.innerHTML = `Total price of articles: ${totalPrice}`;
                }, msg => {
                    div.innerHTML = msg;
                });
            } else {
                //3.2. U suprotnom, ispisati poruku da kamion nema kapacitet.
                div.innerHTML = 'Not enough capacity in truck!';
            }

        }, msg => {
            div.innerHTML = msg;
        });

    }, (msg) => {
        div.innerHTML = msg;
    });
}

form.addEventListener('submit', submitFormVarijanta1);







