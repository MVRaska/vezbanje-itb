
const form = document.querySelector('#order');
const capacity = document.querySelector('#capacity');
const div = document.querySelector('#result');


function getItemsReturnPromis(resource) {
    
    return new Promise((resolve, reject) => {
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
    });  
}

function submitFormVarijanta2(e) {
    e.preventDefault();
    let nizArtikala = [];
    getItemsReturnPromis('JSON/stock.json')
    .then(data => {
        data.forEach(artikl => {
            if(artikl.stock == 0) {
                nizArtikala.push(artikl.id);
            }
        });
        return getItemsReturnPromis('JSON/weights.json');
    })
    .then(data => {
        let totalWeight = 0;
        data.forEach(artikl => {
            if(nizArtikala.includes(artikl.id)) {
                totalWeight += artikl.weight;
            }
        });
        if(totalWeight <= Number(capacity.value)) {
            return getItemsReturnPromis('JSON/prices.json');
        } else {
            div.innerHTML = 'Not enough capacitu in truck!';
        }
    })
    .then(data => {
        if(data !== undefined) {
            let totalPrice = 0;
            let tabela = document.createElement('table');
            div.appendChild(tabela);
            data.forEach(artikl => {
                if(nizArtikala.includes(artikl.id)) {
                    totalPrice += artikl. price;
                    //3.3. Ne ispisati samo ukupnu cenu svih artikala, već tabelu sa dve kolone: U prvoj koloni je ispisan naziv artikla koji se poručuje, u sledećoj je njegova cena. U poslednjem redu tabele, u prvoj ćeliji stoji tekst “UKUPNO”, a u drugoj ćeliji ukupna cena svih artikala.

                    let red= document.createElement('tr'); 
                    let celija1 = document.createElement('td');
                    celija1.innerHTML = artikl.item;
                    let celija2 = document.createElement('td');
                    celija2.innerHTML = artikl.price;
                    celija2.style.textAlign = 'right';
                    red.append(celija1, celija2);
                    tabela.appendChild(red);
                }
            });
            let red= document.createElement('tr'); 
            let celija1 = document.createElement('td');
            celija1.innerHTML = 'Ukupno';
            let celija2 = document.createElement('td');
            celija2.innerHTML = totalPrice;
            red.append(celija1, celija2);
            tabela.appendChild(red);


            div.innerHTML += `<br>Total price of artikles is: ${totalPrice}`;
        }
    })
    .catch(msg => {
        div.innerHTML = msg;
    });
}

form.addEventListener('submit', submitFormVarijanta2);


/*
2.	Jedna forma u kojoj se nalazi jedan tekstualni input (gde se unosi deo naziva proizvoda), kao i dva numerička inputa (gde se unose neke cene). Pored njih nalazi se i dugme. Klikom na dugme potrebno je uraditi sledeće:
a.	Odrediti sve proizvode koji su na stanju.
b.	Naći takve proizvode koji u nazivu sadrže reč koju je korisnik uneo.
c. 	Kao i one čija je cena između dve vrednosti zadate u dva numerička inputa.
d.	Korisniku prikazati u listi nazive tih artikala.
e.	BONUS VARIJANTA: Ne ispisati samo nazive artikala, već ispis izvršiti u tabeli sa tri kolone: U prvoj koloni staviti naziv artikla, u drugoj stanje u magacinu, u trećoj cenu artikla.
*/

let zad2Forma = document.getElementById('zad2');
const recIzNaziva = document.getElementById('naziv');
const inputCena1 = document.getElementById('cena1');
const inputCena2 = document.getElementById('cena2');
const ispis = document.getElementById('naStanju');

let returnPromise = url => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener('readystatechange', e => {
            e.preventDefault();
            if(request.readyState == 4 && request.status == 200) {
                let data = JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState == 4) {
                reject('Greska');
            }
        });
        request.open('GET', url);
        request.send();
    })
}

zad2Forma.addEventListener('submit', e => {
    e.preventDefault();
    
    let proizNaStanju = [];
    let proizvodiNaStnjuCena = [];
    let proizvodiNaStanjuSadrzeRec = [];
    

    returnPromise('JSON/stock.json')
    .then(data => {
        data.forEach(proizvod => {
            if(proizvod.stock != 0) {
                proizNaStanju.push(proizvod);
            }
        });

        return proizNaStanju;
    })
    .then(data => {
        if(recIzNaziva.value) {
            let ul1 = document.createElement('ul');
            ul1.innerHTML = `Proizvodi na stanju koji sadrze rec ${recIzNaziva.value} su:`;

            data.forEach(proizvod => {
                if(proizvod.item.includes(recIzNaziva.value)) {
                    proizvodiNaStanjuSadrzeRec.push(proizvod);
                    let li = document.createElement('li');
                    li.innerHTML = proizvod.item;
                    ul1.appendChild(li);
                }
            });
            ispis.appendChild(ul1);
        }
        
        return returnPromise('JSON/prices.json');
    })
    .then(data => {

        let cena1 = Number(inputCena1.value);
        let cena2 = Number(inputCena2.value);
        if(cena1 > cena2) {
            let pomocna = cena1;
            cena1 = cena2;
            cena2 = pomocna;
        }

       if(cena1 && cena2) {
            let ul2 = document.createElement('ul');
            ul2.innerHTML = `Proizvodi na stanju ciji je raspon cene od ${cena1} do ${cena2} su:`;

            data.forEach(proizvod => {
                for(let i = 0; i < proizNaStanju.length; i++) {
                    if(proizNaStanju[i].item.includes(proizvod.item)) {
                        proizvodiNaStnjuCena.push(proizvod);
                        if(proizvod.price > cena1 && proizvod.price < cena2) {
                            let li = document.createElement('li');
                            li.innerHTML = proizvod.item;
                            ul2.appendChild(li);
                        }
                    }
                }
            });
            ispis.appendChild(ul2);
        }
    })
    .catch(poruka => {
        ispis.innerHTML = poruka;
    })

    let tabela = document.createElement('table');
    // tabela.innerHTML = `Proizvodi koji sadrze rec ${recIzNaziva.value} su:`
    ispis.appendChild(tabela);
    proizvodiNaStanjuSadrzeRec.forEach(proizvod => {
        let tr = document.createElement('tr');
        tabela.appendChild(tr);
        let td1 = document.createElement('td');
        td1.innerHTML = proizvod.item;
        tr.appendChild(td1);
        let td2 = document.createElement('td');
        td2.innerHTML = proizvod.stock;
        tr.appendChild(td2);

        let td3 = document.createElement('td');

        proizvodiNaStnjuCena.forEach(proizv => {
            if(proizv.item == proizvod.item) {
                td3.innerHTML = proizv.price;
            }
        });
        tr.appendChild(td3);
    });

    ispis.innerHTML = ''
});

