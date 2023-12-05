// prvi zadatak

let sati = 19;
let min = 39;

let odPonoci = sati * 60 + min;
console.log('Minuta od ponoci:' + odPonoci);

let doPonoci = 24 * 60 - odPonoci;
console.log('Minuta do ponoci:' + doPonoci);

//drugi zadatak


let satiOdPonoci = Math.floor(odPonoci/ 60);
let minOdPonoci = odPonoci % satiOdPonoci;
console.log(satiOdPonoci);
console.log(minOdPonoci);

//treci zadatak

let cena = 586;
let novcanica = 2000;
let kusur = novcanica - cena;
console.log(kusur);

//sesti zadatak
//eur u din

let eur = 70;
let kursEur = 117.29;
let dinara = eur * kursEur;

console.log(dinara);

//din u eur

let novacDinara = 5000;
let novacEur = novacDinara / kursEur;
console.log(novacEur);

//sedmi zadatak
//prvi deo

let brojEur = 100;
let kursDolar = 106.79;
let brDolara = brojEur * kursEur / kursDolar;
console.log('Kad razmenim ' + brojEur + ' eura dobijem' + brDolara + ' dolara.');

//drugi deo

let ukupnoDolara = 368;
let ukupnoEur = ukupnoDolara * kursDolar / kursEur;
console.log(ukupnoEur);

//osmi zadatak
let tempCelzius = 89;
let tempFarenhajt = tempCelzius * 1.8 +32;
console.log('Temperatura u farenhajtima: ' + tempFarenhajt);

let farenh = 66;
let celz = (farenh -  32) / 1.8;
console.log('Temperatura u celzijusima: ' + celz);

//deveti zadatak
 let kelvin =  tempCelzius + 273.15;
 console.log('Temperatura u kelvinima: ' + kelvin);

 let tempKelvin = 296;
 let celzijus = tempKelvin - 273.15;
 console.log('Temperatura u celzijusima: ' + celzijus);

let datum = new Date(); //promenljiva koja sadrzi info o trenutnom datumu i vremenu
let god = datum.getFullYear();
let mes = datum.getMonth();
let dan = datum.getDate();
console.log(god, mes + 1, dan);

//cetvrti zadatak
let trenutno = new Date();
let sat = trenutno.getHours();
let minuti = trenutno.getMinutes();
let minutaOdPonoci = sat * 60 + minuti;
console.log(minutaOdPonoci);

//peti zadatak
// console.log(new Date(30.11.2023.));
console.log(new Date(2023/11/30));