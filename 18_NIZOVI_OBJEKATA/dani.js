/***  1. Napraviti niz dan objekata (podsetiti se objekta dan sa 14. slajda i kreirati nekoliko takvih objekata)

2. Napraviti arrow funksiju koja ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma:
a/ Ispisati prvi od njih
b/ Ispisati poslednji od njih

 3. Napraviti arrow funksiju koja prebrojava i ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana

4. Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom
***/


let dan1 = {
    datum: "2023/12/22",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [-3, -4, -6, -7, -6, -4, -10, 0]
};
let dan2 = {
    datum: "2023/12/24",
    kisa: false,
    sunce: true,
    oblacno: false,
    temperature: [3, 4, 6, 7, 9, 8, 5, 3]
};
let dan3 = {
    datum: "2023/12/25",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperature: [3, 4, 6, 6, 7, 5, 4, 3]
};

// 1.

let dani = [dan1, dan2, dan3];

// 2.


let maxBrMerenja = dani[0].temperature.length;
let indexPrvog = 0;
let indexPoslednjeg = 0;
dani.forEach((dan, i) => {
    if(dan.temperature.length > maxBrMerenja) {
        maxBrMerenja = dan.temperature.length;
        indexPrvog = i;
    }

    if(dan.temperature.length >= maxBrMerenja) {
        maxBrMerenja = dan.temperature.length;
        indexPoslednjeg = i;
    }
});


dani.forEach(d => {
    if(d.temperature.length == maxBrMerenja) {
        console.log(d.datum);
    }
});


// a/
// 1. nacin

console.log(dani[indexPrvog].datum);

// 2. nacin

for(let i = 0; i <dani.length; i++) {
    if(maxBrMerenja == dani[i].temperature.length) {
        console.log(dani[i].datum);
        break;
    }
}

// b/
// 1. nacin

console.log(dani[indexPoslednjeg].datum);

// 2. nacin

// for(let i = dani.length; i >= 0; i--) {
//     if(maxBrMerenja == dan[i].temperature.length) {
//         console.log(dani[i].datum);
//     }
// }

// zadatak 3
//Napraviti arrow funksiju koja prebrojava i ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana

let brSuncanihIKisnih = niz => {
    let kisni = 0;
    let suncani = 0;
    niz.forEach(dan => {
        if(dan.kisa) {
            kisni++;
        }
        if(dan.sunce) {
            suncani++;
        }
    });
    console.log(`Kisnih dana je bilo: ${kisni}, a suncanih je bilo: ${suncani}`);
}
brSuncanihIKisnih(dani);

// zadatav 4
//Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom

let brNatprosecnihDana = niz => {
    let zbirTemp = 0;
    let brTemp = 0;
    let brDana = 0;
    niz.forEach(dan => {
        dan.temperature.forEach(t => {
            zbirTemp += t;
            brTemp++;
        });
    });
    let prosekUkupno = zbirTemp / brTemp;
    console.log(prosekUkupno);

    niz.forEach(dan => {
        let zbirLok = 0;
        let brLok = 0;
        dan.temperature.forEach(t => {
            zbirLok+= t;
            brLok++;
        });
        let prosLok = zbirLok / brLok;
        console.log(prosLok);

        if(prosLok > prosekUkupno) {
            brDana++;
        }
    });
    return brDana;
}
console.log(`Broj dana sa natprosecnom temperaturom: ${brNatprosecnihDana(dani)}`);


 

