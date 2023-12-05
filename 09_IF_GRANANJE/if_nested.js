// dvanaesti zadatak

let br1 = 5;
let br2 = 6;

if(br1 > br2) {
    console.log(`Veci broj je ${br1}, a manji broj je ${br2}`);

    if(br1 % 2 == 0) {
        console.log(`Veci broj je paran`);
    } else {
        console.log('Veci broj nije paran');
    }

    if(br2 % 3 == 0) {
        console.log('Manji broj je deljiv sa ');
    } else {
        console.log('Manj broj nije deljiv sa 3');
    }

} else {
    console.log(`Veci broj je ${br2}, a manji broj je ${br1}`);

    if(br2 % 2 == 0) {
        console.log(`Veci broj je paran`);
    } else {
        console.log('Veci broj nije paran');
    }

    if(br1 % 3 == 0) {
        console.log('Manji broj je deljiv sa ');
    } else {
        console.log('Manj broj nije deljiv sa 3');
    }
}

// dvanaesti zadatak - drugi nacin

br1 = 15;
br2 = 19;
let veci = br1;

if(br2 > veci) {
    veci = br2;
}
let manji = br1 + br2 - veci;

if(veci % 2 == 0) {
    console.log(`Veci broj je deljiv sa 2`);
} else {
    console.log(`Veci broj nije deljiv sa 2`);
}

if(manji % 3 == 0) {
    console.log(`Manji broj je deljiv sa 2`);
} else {
    console.log(`Manji broj nije deljiv sa 2`);
}


// trinaesti zadatak

let g1 = 2000;
let m1 = 5;
let d1 = 19;
let g2 = 2000;
let m2 = 5;
let d2 = 19;

if(g1 < g2) {
    console.log(`Ranjiji datum je ${g1} ${m1} ${d1}`);
}
else if(g2 < g1) {
    console.log(`Ranjiji datum je ${g2} ${m2} ${d2}`);
}
else {
    if(m1 < m2) {
        console.log(`Ranjiji datum je ${g1} ${m1} ${d1}`);
    }
    else if(m2 < m1) {
        console.log(`Ranjiji datum je ${g2} ${m2} ${d2}`);
    }
    else {
        if(d1 < d2) {
            console.log(`Ranjiji datum je ${g1} ${m1} ${d1}`);
        }
        else if(d2 < d1) {
            console.log(`Ranjiji datum je ${g2} ${m2} ${d2}`);
        }
        else {
            console.log(`Datumi su isti`);
        }
    }
}


// cetrnaesti zadatak

let pol = 'm';
let god = 16;

if(god >= 18) {
    if(pol === 'm') {
        console.log(`Korisnik je punoletna osoba muskog pola`);
    } else {
        console.log(`Korisnik je punoletna osoba zenskog pola`);
    }
} else {
    if(pol === 'm') {
        console.log(`Korisnik je maloletna osoba muskog pola`);
    } else {
        console.log(`Korisnik je maloletna osoba zenskog pola`);
    }
}