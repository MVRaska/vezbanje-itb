import {Chatroom} from './chat.js';
import {chatUI} from './ui.js';

const chat2 = new Chatroom('#general', 'mmm');
// console.log(chat2.userName);
const chat3 = new Chatroom('#js', 'someone');
const chat4 = new Chatroom('#homeworks', 'nn3');


// chat2.addChat('hi');
// chat3.addChat('promisi');

// chat4.addChat('Hello, everybody!')
// .then(() => {
//     console.log('Uspešno dodat čet!');
// })
// .catch(e => {
//     console.log(`Greska: ${e}`);
// })

/*
//dodat eventListener na index.html jer nismo radili onSnapshot

const spansSoba = document.querySelectorAll('span');
spansSoba.forEach(spanSoba => {
    spanSoba.addEventListener('click', () => {
        let soba = spanSoba.id;  
        
        db.collection('chats')
        .where('room', '==', soba)
        .orderBy('created_at', 'desc')
        .get()
        .then(snapShot => {
            snapShot.forEach(doc => {
                let data = doc.data();
                console.log(data);
            });
        })
        .catch(e => {
            console.log(`Greska: ${e}`);
        })
    });
});
*/

// let chatroom1 = new Chatroom('#homeworks', 'Stefan');

// chatroom1.addChat('Rok za predaju je ponedeljak');
// chatroom1.getChats(data => {
//     console.log(data);
// });

let chatroom2 = new Chatroom('#general', 'Milena');
// chatroom2.addChat('Dobro nam dosli')

/*
ovo je nacin bez try i catch:
// .then(() => {
//     console.log('Uspesno dodat chat');
// })
// .catch(e => {
//     console.log(`Greska: ${e}`);
// })
*/


const ul = document.querySelector('ul');


// chatroom1.getChats(data => {
//     let li = document.createElement('li');
//     li.innerHTML = `${data.username}: ${data.message} <br> ${formatDate(data)}`;
//     ul.appendChild(li);
// });

/*
let formatDate = (date) => {

    //.padStart() funkcija za dodavanje 0 ispred jednocifrenog broja, radi samo sa stringovima

    let datum = new Date();
    let dan = datum.getDate();
    let mesec = datum.getMonth();
    let godina = datum.getFullYear();

    let created_at = date.created_at.toDate();
    let danPoruke = created_at.getDate();
    let mesecPoruke = created_at.getMonth();
    let godinaPoruke = created_at.getFullYear();

    let satPoruke = created_at.getHours();
    let minutPoruke = created_at.getMinutes();

    let datumPoruke;

    if(danPoruke == dan && mesecPoruke == mesec && godinaPoruke == godina) {
        satPoruke = satPoruke < 10 ? `0${satPoruke}` : satPoruke;
        minutPoruke = minutPoruke < 10 ? `0${minutPoruke}` : minutPoruke;
        
        datumPoruke = `${satPoruke}:${minutPoruke}`;
    } else {
        danPoruke = danPoruke < 10 ? `0${danPoruke}` : danPoruke;
        mesecPoruke = mesecPoruke < 9 ? `0${mesecPoruke + 1}` : mesecPoruke + 1;
        godinaPoruke = godinaPoruke;

        satPoruke = satPoruke < 10 ? `0${satPoruke}` : satPoruke;
        minutPoruke = minutPoruke < 10 ? `0${minutPoruke}` : minutPoruke;
        
        datumPoruke = `${danPoruke}.${mesecPoruke}.${godinaPoruke} - ${satPoruke}:${minutPoruke}`;
    }
    return datumPoruke;
}

let templateLI = (data) => {
    let li = document.createElement('li');
    li.innerHTML = `${data.username} : ${data.message} <br> ${formatDate(data)}`;
    // ul.appendChild(li);
    return li;
}
*/

// chatroom1.getChats(data => {
//     templateLI(data);
// });

// chatroom1.getChats(data => {
//     chatUI1.list.appendChild(templateLI(data));
// });

let chatUI1 = new chatUI(ul);

// let chatUI1 = new chatUI(ul);
// chatroom1.getChats(data => {
//     chatUI1.list.append(chatUI1.templateLI(data));
// });


// chat4.getChats(data => {
   
// chatUI1.list.appendChild(templateLI(data));
// });

let inputColor = document.getElementById('picker');
let btnColor = document.getElementById('color');

let inputPoruka = document.getElementById('textPoruka');
let btnSend = document.getElementById('send');

let inputUserName = document.getElementById('textUserName');
let btnUpdate = document.getElementById('update');

let spans = document.querySelectorAll('span');


let noviUsername = 'anonymus';
if(localStorage.getItem('username')) {
    noviUsername = JSON.parse(localStorage.getItem('username'));
}

if(localStorage.getItem('color')) {
    let boja = JSON.parse(localStorage.getItem('color'));
    document.body.style.background = boja;
    inputColor.value = boja;
}

let chatroom = new Chatroom('#general', noviUsername);

chatroom.getChats(data => {  
    chatUI1.list.appendChild(chatUI1.templateLI(data, chatroom.userName));
});

spans.forEach(span => {
    span.addEventListener('click', () => {
        chatUI1.deleteUl();
        spans.forEach(otherSpan => {
            otherSpan.style.background = 'blueviolet';
        });

        span.style.background = 'rgb(96, 4, 182)';
        chatroom.room = span.textContent;
        chatroom.getChats(data => {  
            chatUI1.list.appendChild(chatUI1.templateLI(data, chatroom.userName));
        });
    });
});


btnSend.addEventListener('click', e => {
    e.preventDefault();

    if(inputPoruka.value.trim() != '') {
        chatroom.addChat(inputPoruka.value);
    }
    
    inputPoruka.value = ''; //ili  inputPoruka.reset();  na formi resetuje sva polja 
});


btnUpdate.addEventListener('click', e => {
    e.preventDefault();
    chatroom.userName = inputUserName.value;

    localStorage.setItem('username', JSON.stringify(inputUserName.value));
    
    chatroom.aktivniKorisnik(inputUserName.value);

    chatUI1.deleteUl();
    chatroom.getChats(data => {  
        chatUI1.list.appendChild(chatUI1.templateLI(data, chatroom.userName));
    });

    inputUserName.value = '';
});

btnColor.addEventListener('click', e => {
    e.preventDefault();
    console.log('oboji');
    document.body.style.background = inputColor.value;

    localStorage.setItem('color', JSON.stringify(inputColor.value));
});

ul.addEventListener('click', async e => {
    if(e.target.tagName == 'IMG') {
        let liDelete = e.target.parentNode;
        let docId = liDelete.querySelector('img').getAttribute('id');
        console.log('ID dokumenta:', docId);
        
        try {
            await db.collection('chats').doc(docId).delete();
            
            ul.removeChild(liDelete);
        } catch (err) {
            console.error('Greška prilikom uklanjanja dokumenta iz baze:', err);
        }
    }
});


//*****************************
// onSnapshot()

// db.collection('chats')
// .where('room', '==', this.room)
// .orderBy('created_at')
// .onSnapshot(snapShot => {
//     snapShot.docChanges().forEach(change => {
//         if(change.type == 'added') {
//             // console.log(change);
//             // console.log(change.doc.data());
//             callback(change.doc.data());
//         }
//     });
// });
