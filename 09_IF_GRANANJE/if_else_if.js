//osmi zadatak

let datum = new Date();
let sati = datum.getHours();

if(sati < 9) {
    console.log('Firma trenutno ne radi');
}
else if(sati >= 17) {
    console.log('Firma trenutno ne radi'); 
}
else {
    console.log('Firma trenutno radi');
}

//sesti zadatak

let dat = new Date();
let dan = dat.getDay();

if(dan == 6) {
    console.log('Danas je vikend');
}
else if(dan == 0) {
    console.log('Danas je vikend');
}
else {
    console.log('Danas je radni dan');
}

//sedmi zadatak

let sat = dat.getHours();

if(sat < 12) {
    console.log('Dobro jutro!');
}
else if(sat < 18) {
    console.log('Dobar dan!');
}
else {
    console.log('Dobro vece!');
}

//deveti zadatak
//Ne - k1<p2 ili k2<p1

let p1 = 8;
let k1 = 16;
let p2 = 3;
let k2 = 5;

if(k1 <= p2) {
    console.log('NE');
} else if(k2 <= p1) {
    console.log('NE');
} else {
    console.log('DA');
}

//deseti zadatak

let prvi = 15;
let drugi = 8;

if(prvi > drugi) {
    console.log(prvi + 1, drugi - 1);
}
else if(drugi > prvi) {
    console.log(prvi - 1, drugi + 1);
}
else {
    console.log('Brojevi su jednaki');
}

//jedanaesti zadatak

let broj = 16.2;
 if (broj - Math.floor(broj) == 0) {
    document.write('ceo broj');
 }
 else {
    document.write('nije ceo broj');
 }


