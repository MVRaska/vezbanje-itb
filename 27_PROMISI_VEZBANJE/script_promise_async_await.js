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

async function clickGetItems() {
    let data1 = await getItemsReturnPromis('JSON/stock.json');
    let nizArtikala = [];
    data1.forEach(artikl => {
        if(artikl.stock == 0) {
            nizArtikala.push(artikl.id);
        }
    });
    let data2 = await getItemsReturnPromis('JSON/weights.json');
    let totalWeight = 0;
    data2.forEach(artikl => {
        if(nizArtikala.includes(artikl.id)) {
            totalWeight += artikl.weight;
        }
    });

    if(totalWeight <= Number(capacity.value)) {
        let data3 = await getItemsReturnPromis('JSON/prices.json');
        let totalPrice = 0;
        data3.forEach (artikl => {
            if(nizArtikala.includes(artikl.id)) {
                totalPrice += artikl.price;
            }
        });
        return totalPrice;
    } else {
        return 'Not enough capacity in truck!'
    }
}

function submitFormVarijanta3(e) {
    e.preventDefault();
    clickGetItems()
        .then(data => {
            div.innerHTML = data;
        })
        .catch(err => {
            div.innerHTML = `Greska: ${err}`;
        }); 
}

form.addEventListener('submit', submitFormVarijanta3);



const firebaseConfig = {
    apiKey: "AIzaSyA_9v7wlpnH1wnIpa9IXAco6nOlRQQKk8Y",
    authDomain: "itb-m-b49ab.firebaseapp.com",
    projectId: "itb-m-b49ab",
    storageBucket: "itb-m-b49ab.appspot.com",
    messagingSenderId: "75519357661",
    appId: "1:75519357661:web:f14bfd92798dc559b62134"
  };