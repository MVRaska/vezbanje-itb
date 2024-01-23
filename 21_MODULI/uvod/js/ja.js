// "use strict";

let x = 4; // pomocna promenljiva;
let y = 8; // pomocna promenljiva

// ........

let rezultat = x + y; // promenljiva koja pamti rezultat

let racunaj = () => { // funkcija koja se trazi od mene
    document.body.innerHTML += `<p>${rezultat}</p>`;
}
