//DOM

let liElementi = document.querySelectorAll('li');
console.log(liElementi);
let btnDodaj = document.querySelector('#submit');
let inputObaveze = document.querySelector('#task');
let ulObaveze = document.querySelector('ul');
let poslednjiLi = document.querySelector('li:last-child');

ulObaveze.addEventListener('click', (e) => {
    // console.log('klik na ul');
    // console.log(e);
    // console.log(e.target);  //ceo element na koji je kliknuto
    // console.log(e.target.tagName); //tag na koji je kliknuto

    if(e.target.tagName == 'LI') {
        // e.target.classList.toggle('precrtaj');
        ulObaveze.removeChild(e.target);
    }
});

btnDodaj.addEventListener('click', e => {
    e.preventDefault();

    let inRadio = document.querySelectorAll('input[type=radio]');

    if(inputObaveze.value.trim() != '') {
        let tekstObaveze = inputObaveze.value;
        let newLi = document.createElement('li');
        newLi.textContent = tekstObaveze; // ili .textContent ili .innerHTML ili .innerText
        ulObaveze.appendChild(newLi);

        inRadio.forEach(radio => {
            if(radio.value == 'pocetak' && radio.checked) {
                ulObaveze.prepend(newLi);
            }
        });
    }
    inputObaveze.value = '';
});


/*
Kada korisnik unese tekstualni sadržaj u input polje, 
klikom na dugme dodaj, na kraj liste zadataka dodati novi <li> sa tekstualnim sadržajem preuzetim iz input polja:	
Nakon dodavanja zadatka, isprazniti input polje
Onemogućiti korisniku da listi zadataka pošalje prazan string
*/

/*
Kada se klikne na odgovarajući <li>, taj element treba da nestane sa stranice 
Hint: Posmatrati elemente kao u DOM stablu (dodavanje u DOM stablo i brisanje iz DOM stabla).
*/

/*
Dodati dva radio dugmeta:
Dodaj na početak – Dodaje sadržaj iz input polja na početak liste zadataka
Dodaj na kraj – Dodaje sadržaj iz input polja na kraj liste zadataka
*/





