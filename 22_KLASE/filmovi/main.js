import Film from "./film.js";

let film1 = new Film('Cuvari formule', 'Dragan Bjelogrlic', 2023, [5, 10, 18, 9, -6]);
let film2 = new Film('Klopka', 'Srdan Golubovic', 2007, [9, 10, 9, 8]);
let film3 = new Film('Maratonci trce pocasni krug', 'Slobodan Sijan', 1982, [1, 10, 9, 10, 19]);

let filmovi = [film1, film2, film3];

film1.stampaj();
filmovi[2].stampaj();

console.log('Ispis for petljom');

for(let i = 0; i < filmovi.length; i++) {
    filmovi[i].stampaj();
}

console.log('Ispis forEach petljom');

filmovi.forEach(film => {
    film.stampaj();
});

console.log(film3);

console.log(`Prosecna ocena filma ${film1.naslov} je: ${film1.prosek()}`);


let vekFilmova = (niz, vek) => {
    filmovi.forEach(f => {
        //1801/100 = 18.01 - Math.ceil 19
        //1900/100 = 19
        let vekFilma = Math.ceil(f.godinaIzdanja / 100);
        if(vekFilma == vek) {
            f.stampaj();
        }
    });
}
vekFilmova(filmovi, 20);

let prosecnaOcena = niz => {
    let sum = 0;
    let br = 0;
    niz.forEach(f => {
        f.ocene.forEach(o => {
            sum += o;
            // br++;
        });
        br+= f.ocene.length;
    });
    return sum / br;
}
console.log(`Prosecna ocena svih filmova je: ${prosecnaOcena(filmovi)}`);

/*
Napisati funkciju najcescaOcena kojoj se prosleđuje niz filmova, a ona vraća ocenu koju su filmovi najčešće dobijali (u opticaju su ocene 5, 6, 7, 8, 9 i 10). 
*/

let najcescaOcena = niz => {
    let najcescaOcena = 5;
    let br5 = 0;
    let br6 = 0;
    let br7 = 0;
    let br8 = 0;
    let br9 = 0;
    let br10 = 0;
    niz.forEach(f => {
        f.ocene.forEach(ocena => {
            // if(ocena == 5) {
            //     br5++;
            // } else if(ocena == 6) {
            //     br6++;
            // } else if(ocena == 7) {
            //     br7++;
            // } else if(ocena == 8) {
            //     br8++;
            // } else if(ocena == 9) {
            //     br9++
            // } else {
            //     br10++;
            // }

            switch(ocena) {
                case 5:
                    br5++;
                    break;
                case 6:
                    br6++;
                    break;
                case 7:
                    br7++;
                    break;
                case 8:
                    br8++;
                    break;
                case 9:
                    br9++;break;
                case 10:
                    br10++;
                    break;
            }
                
        });
    });
    // if(br6 > br5 && br6 > br7 && br6 > br8 && br6 > br9 && br6 > br10) {
    //     najcescaOcena = 6;
    // } else if(br7 > br5 && br7 > br6 && br7 > br8 && b7 > br9 && br7 > br10) {
    //     najcescaOcena = 7;
    // } else if(br8 > br5 && br8 > br6 && br8 > br7 && br8 > br9 && br8 > br10)  {
    //     najcescaOcena = 8;
    // } else if(br9 > br5 && br9 > br6 && br9 > br7 && br9 > br9 && br8 > br10) {
    //     najcescaOcena = 9;
    // } else if(br10 > br5 && br10 > br6 && br10 > br7 && br10 > br8 && br10 > br9) {
    //     najcescaOcena = 10;
    // }
    let brOcena = [br5, br6, br7, br8, br9, br10];
    let maxEl = brOcena[0];
    let maxIndex = 0;

    for(let i = 0; i < brOcena.length; i++) {
        if(brOcena[i] > maxEl) {
            maxEl = brOcena[i];
            maxIndex = i;
        }
    }
    return maxIndex + 5;

    /*let superNizOcene = [];
    nizFilmova.forEach(film => {
       film.ocene.forEach(ocena => {
           superNizOcene.push(ocena);
       });
    });

    let najOcena = null;
    let najOcenaBr = 0;
    superNizOcene.forEach(ocena => {
        let br = 0;
        superNizOcene.forEach(o => {
            if (ocena == o) {
                br++;
            }
        });
        if (br > najOcenaBr) {
            najOcenaBr = br;
            najOcena = ocena;
        }
    });

    return najOcena; */
}

/*
let najcescaOcena = niz =>{
    let el1;
    let brojac = 1;
    let max = 0;
    let velikiNiz = [];
    niz.forEach(el =>{
        el.ocene.forEach(ocena => {
            velikiNiz.push(ocena);
        });
    });
    velikiNiz.sort(function(a, b){return a - b});
    for (let i = 1; i < velikiNiz.length; i++) {
        if (velikiNiz[i] == velikiNiz[i - 1]) {
            brojac++;
        } else {
            brojac = 1;
        }
        if (brojac > max) {
            max = brojac;
            el1 = velikiNiz[i];
        }
    }
    return el1;
}
*/

console.log(`Najcesca ocena je: ${najcescaOcena(filmovi)}`);

/* Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.
*/

let iznadOcene = (ocena, niz) => {
    let filmIznadOcene = [];
    niz.forEach(f => {
        if(f.prosek() > ocena) {
            filmIznadOcene.push(f);
        }
    });
    return filmIznadOcene;
}
console.log(iznadOcene(7, filmovi));

/*Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu.
*/

let iznadOceneNoviji = (ocena, niz) => {
    let nizZadovoljava = iznadOcene(ocena, niz);
    let najnoviji = nizZadovoljava[0];
    nizZadovoljava.forEach(f => {
        if(f.godinaIzdanja > najnoviji) {
            najnoviji = f;
        }
    });
    return najnoviji;
}
console.log(iznadOceneNoviji(8, filmovi));

/*
Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film (film koji ima najveću prosečnu ocenu).
*/
console.log(film1.prosek());
console.log(film2.prosek());
console.log(film3.prosek());

let najboljeOcenjeniFilm = niz => {
   let najboljeOcenjeni = niz[0];
   let najboljaOcena = najboljeOcenjeni.prosek();
   niz.forEach(film => {
    if(film.prosek() > najboljaOcena) {
        najboljaOcena = film.prosek();
        najboljeOcenjeni = film;
    }
   });
   return najboljeOcenjeni;
}
console.log(`Najbolje ocenjeni film: ${najboljeOcenjeniFilm(filmovi).naslov}`);

/*
Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.
*/

let najmanjaOcenaNajboljeg = niz => {
    let najboljiFilm = najboljeOcenjeniFilm(niz);
    let najmanjaOcena = najboljiFilm.ocene[0];

    najboljiFilm.ocene.forEach(o => {
        if(o < najmanjaOcena) {
            najmanjaOcena = o;
        }
    });
    return najmanjaOcena;
}
console.log(`Najmanja ocena najbolje ocenjenog filma je: ${najmanjaOcenaNajboljeg(filmovi)}`);

/*
Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.
*/

let osrednjiFilm = niz => {
    let prosOcena = prosecnaOcena(niz);
    let minRazlikaOcena = Math.abs(prosOcena - niz[0].prosek());
    let filmNajbliziProseku = niz[0];

    niz.forEach(film => {
        if(Math.abs(prosOcena - film.prosek()) < minRazlikaOcena) {
            minRazlikaOcena = prosOcena - film.prosek();
            filmNajbliziProseku = film
        }
    });
    return filmNajbliziProseku;
}
console.log(`Film najblizi prosecnoj oceni svih filmova je: ${osrednjiFilm(filmovi)}`);
console.log(osrednjiFilm(filmovi));

/*
Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.
*/

let najmanjaOcena = niz => {
    let minOcena = 10;
    niz.forEach(film => {
        if(film.ocene.includes(5)) {
            minOcena = 5;
        } else if(film.ocene.includes(6)) {
            minOcena = 6;
        } else if(film.ocene.includes(7)) {
            minOcena = 7;
        } else if(film.ocene.includes(8)) {
            minOcena = 8;
        } else if(film.ocene.includes(9)) {
            minOcena = 9;
        }
    });
    return minOcena;
}
console.log(`Najmanja ocena koju je dobio neki od filmova u nizu je: ${najmanjaOcena(filmovi)}`);

let najmanjaOcena2 = (niz) => {
    let minOcena = niz[0].ocene[0];
    niz.forEach((e) => {
      e.ocene.forEach((o) => {
        if (o < minOcena) {
          minOcena = o;
        }
      });
    });
    console.log(minOcena);
  };
  najmanjaOcena2(filmovi);