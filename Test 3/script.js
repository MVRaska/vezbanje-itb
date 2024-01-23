/*Jedan auto plac vodi evidenciju o svim automobilima koji se trenutno nalaze na placu.
// Za svaki automobil čuvaju se sledeći podaci:
// ● marka (string - marka automobila),
// ● km (realan broj - broj pređenih kilometara automobila),
// ● godište (ceo broj - godina proizvodnje automobila),
// ● vlasnici (niz stringova - imena svih prethodnih vlasnika. Zbog jednostavnosti,
// pamtiti samo imena, recimo “Pera”, “Mika”, “Laza”).
// ➢ (10 poena)
// Kreirati niz od najmanje tri objekta (najmanje tri automobila koji se nalaze na
// placu). */


let auto1 = {
    marka: 'opel',
    km: 99897,
    godiste: 2024,
    vlasnici: [ 'Pera', 'Mika', 'Laza']
};

let auto2 = {
    marka: 'opel',
    km: 99897,
    godiste: 2023,
    vlasnici: [ 'Jova', 'Nikola', 'Laza']
};

let auto3 = {
    marka: 'opel',
    km: 99897,
    godiste: 2009,
    vlasnici: [ 'Laza', 'Milena', 'Dana']
};

let auto4 = {
    marka: 'opel',
    km: 99897,
    godiste: 2019,
    vlasnici: [ 'Laza', 'Milena', 'Dana']
};

let automobili = [auto1, auto2, auto3, auto4];


/*
➢ (15 poena)
Napisati funkciju prosecnoGodiste kojoj se prosleđuje niz automobila, a koja
vraća prosečno godište proizvodnje automobila.
Ukoliko je prosečno godište automobila realan broj, zaokružiti ga na donji ceo
deo.
Pozvati funkciju i rezultat ispisati u konzoli.
*/

let prosecnoGodiste = niz => {
    let sum = 0;
    niz.forEach(auto => {
        sum += auto.godiste;
    });
    return Math.floor(sum / automobili.length);
}
console.log(prosecnoGodiste(automobili));
console.log((2009+2019+2023)/3);

/*
➢ (20 poena)
Napisati funkciju markaNajmanjeKm kojoj se prosleđuje niz automobila kao i
marka automobila, a koja vraća automobil (objekat) sa zadatom markom, a koji je
prešao najmanje kilometara.
Ukoliko nema automobila sa datom markom, kao rezultat vratiti null.
Ukoliko ima tačno jedan automobil sa datom markom, vratiti taj automobil.
Ukoliko ima više automobila sa datom markom koji su prešli isti broj kilometara,
vratiti najskorije proizveden takav automobil. Ukoliko, pak, ima i više takvih
automobila, vratiti bilo koji od njih.

Pozvati funkciju i rezultat ispisati u konzoli.
*/

let markaNajmanjeKm = (niz, marka) => {
    let minKm = niz[0].km;
    let a = null;
    let br = 0;
    niz.forEach(auto => {
        if(auto.marka == marka) {
            br++;

            if(br == 1) {
                a = auto;
            }
            
            if(br > 1 && auto.km <= minKm) {
                minKm = auto.km;
                a = auto;
                niz.forEach(aut => {
                    if(aut.marka == marka && aut.km == a.km && aut.godiste > a.godiste) {
                        a = aut;
                    }
                });
            }
        }
    });
    return a;
}

// let markaNajmanjeKm = (niz, marka) => {
//     let minKm = niz[0].km;
//     let a = niz[0];
//     let br = 0;
//     niz.forEach(auto => {
//         if(auto.marka == marka) {
//             if(auto.km < minKm) {
//                 minKm = auto.km;
//                 a = auto;
//             }
//         }
//     });
//     // console.log(minKm, a);
//     niz.forEach(auto => {
//         if(auto.marka == marka) {
//             br++;
//         }
//     });
//     // console.log(br);
//     let markaKm = a.km;
//     let markaGod = a.godiste;
//     niz.forEach(auto => {
//         if(auto.marka == marka && br > 1) {
//             if(auto.km = markaKm && auto.godiste > markaGod) {
//                 return auto;
//             }
//         }
//     });
//     console.log(auto);
//     niz.forEach(auto => {
//         let au = auto;
//         if(auto.marka == marka && br == 1) {
//             // console.log(au);
//             return au;
//         } else {
//             return null;
//         }
//     });
// }




// let markaNajmanjeKm = (niz, marka) => {
//     let minKm = niz[0].km;
//     let a = null;
//     let br = 0;
//     niz.forEach(auto => {
//         if(auto.marka == marka) {
//             if(auto.km < minKm) {
//                 minKm = auto.km;
//                 a = auto;
//             }
//         }
//     });
//     // console.log(minKm, a);
//     niz.forEach(auto => {
//         if(auto.marka == marka) {
//             br++;
//         }
//     });
//     // console.log(br);
//     let markaKm = a.km;
//     let markaGod = a.godiste;
//     let aut;
//     niz.forEach(auto => {
//         if(auto.marka == marka && br > 1) {
//             if(auto.km == markaKm && auto.godiste > markaGod) {
//                 aut = auto;
//             }
//         }
//     });
//     console.log(aut);
//     niz.forEach(auto => {
//         let au = auto;
//         if(auto.marka == marka && br == 1) {
//             // console.log(au);
//             au;
//         } else {
//             null;
//         }
//     });
// }
console.log(markaNajmanjeKm(automobili, 'opel'));


/*➢ (15 poena)
Napisati funkciju prosekKm10 kojoj se prosleđuje niz automobila, a koja vraća
prosečnu pređenu kilometražu svih automobila ne starijih od 10 godina.
Pozvati funkciju i rezultat ispisati u konzoli.
*/

let prosekKm10 = niz => {
    let sum = 0;
    let br = 0;
    niz.forEach(auto => {
        let god = 2024 - auto.godiste;
        if(god < 10) {
            sum += auto.km;
            br++;
        }
    });
    return sum / br;
}
console.log(prosekKm10(automobili));

/*➢ (20 poena)
Napisati funkciju rokfeler kojoj se prosleđuje niz automobila kao i ime vlasnika, a
koja vraća true ukoliko postoji vlasnik sa zadatim imenom koji je u svom
vlasništvu posedovao više od dva automobila, a u suprotnom vraća false.
Pozvati funkciju i rezultat ispisati u konzoli.
*/

let rokfeler = (niz, imeVlasnika) => {
    let br = 0;
    niz.forEach(auto => {
        auto.vlasnici.forEach(vlasnik => {
            if(vlasnik == imeVlasnika) {
                br++;
            }
        });
    });
    return br > 2;
}
console.log(rokfeler(automobili, 'Laza'));

/*➢ (20 poena)
Pretpostavimo da su u niz objekata automobili dodavani po redosledu dolaska na
auto plac. Drugim rečima, na početku niza nalaze se automobili koji su ranije
došli na plac, dok se na kraju niza nalaze automobili koji su skorije došli na plac.
Što je veći indeks automobila u nizu, to je skorije došao na plac.
Podelimo niz automobila na dva dela - jednu polovinu čine automobili koji su od
ranije na placu, a drugu polovinu čine automobili koji su skorije došli na plac.
Ukoliko u nizu ima neparan broj elemenata, tada prvi deo ima jedan više
automobil od drugog dela, u suprotnom prva i druga polovina niza imaju jednak
broj automobila.
Napisati funkciju skorije koja vraća true ukoliko je polovina automobila koja je
skorije došla na plac u proseku mlađa (po godini proizvodnje) od polovine
automobila koja je ranije došla na plac.
Pozvati funkciju i rezultat ispisati u konzoli.
*/

let skorije = niz => {
    let sumaPrvi = 0;
    let sumaDrugi = 0;
    for(let i = 0; i < Math.ceil(niz.length / 2); i++) {
        sumaPrvi += niz[i].godiste;
    }
    for(let i = Math.floor(niz.length / 2); i < niz.length; i++) {
        sumaDrugi += niz[i].godiste;
    }
    return (sumaDrugi / Math.floor(niz.length / 2) > sumaPrvi / Math.ceil(niz.length / 2))
}
console.log(skorije(automobili));
console.log((2009+2019)/2)