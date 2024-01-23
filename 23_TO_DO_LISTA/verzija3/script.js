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

inputObaveze.addEventListener('keypress', e => {

    // console.log(e.keyCode);

    //taster enter => keyCode == 13
    if(e.keyCode == 13) {
        e.preventDefault();
        
        if(inputObaveze.value != '') {
            let inRadio = document.querySelectorAll('input[type=radio]');
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
        
    }
});

/*
Izbrisati dugme Dodaj i realizovati dodavanje elemenata klikom na taster enter u input polju
*/







