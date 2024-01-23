//DOM

let liElementi = document.querySelectorAll('li');
console.log(liElementi);
let btnDodaj = document.querySelector('#submit');
let inputObaveze = document.querySelector('#task');
let ulObaveze = document.querySelector('ul');
let poslednjiLi = document.querySelector('li:last-child');

let nizObaveza = [];
if(localStorage.getItem('obaveze') == null) {
    //ne postoje obaveze jos uvek u memoriji
    localStorage.setItem('obaveze', JSON.stringify(nizObaveza));
} else {
    //postoje obaveze jos uvek u memoriji i treba ih ispisati na stranici
    nizObaveza = JSON.parse(localStorage.getItem('obaveze')); // pretvaram string u niz
    nizObaveza.forEach(obaveza => {
        let liobaveza = document.createElement('li');
        liobaveza.textContent = obaveza;
        ulObaveze.appendChild(liobaveza); //dodajemo <li> na kraju <ul>
    });
}

ulObaveze.addEventListener('click', e => {
    // console.log('klik na ul');
    // console.log(e);
    // console.log(e.target);  //ceo element na koji je kliknuto
    // console.log(e.target.tagName); //tag na koji je kliknuto

    if(e.target.tagName == 'LI') {
        // e.target.classList.toggle('precrtaj');
        // ulObaveze.removeChild(e.target);
        e.target.remove();
        let indexElementa = nizObaveza.indexOf(e.target.textContent);
        nizObaveza.splice(indexElementa, 1);
        localStorage.setItem('obaveze', JSON.stringify(nizObaveza));
    }
});

inputObaveze.addEventListener('keypress', e => {

    // console.log(e.keyCode);

    //taster enter => keyCode == 13
    if(e.keyCode == 13) {
        e.preventDefault();
        
        if(inputObaveze.value != '') {
            
            let tekstObaveze = inputObaveze.value;
            let newLi = document.createElement('li');
            newLi.textContent = tekstObaveze; // ili .textContent ili .innerHTML ili .innerText
            
            let radio = document.querySelector('input[type=radio]:checked');
            if(radio.value == 'pocetak') {
                ulObaveze.prepend(newLi);
                nizObaveza.unshift(tekstObaveze); //dodajemo na pocetak niza
            } else {
                ulObaveze.appendChild(newLi);
                nizObaveza.push(tekstObaveze); //dodajemo na kraj niza
            }

        }
        localStorage.setItem('obaveze', JSON.stringify(nizObaveza));
        inputObaveze.value = '';
        
    }
});

/*
Izbrisati dugme Dodaj i realizovati dodavanje elemenata klikom na taster enter u input polju
*/







