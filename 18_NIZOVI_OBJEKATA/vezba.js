// zadatak 1
/*
Objekat Student sadrži njegovo ime (string), prezime (string), godinu studija (ceo broj između 1 i 5), kao i niz ocena do sada položenih ispita (niz celih brojeva, gde je svaki od brojeva u intervalu od 6 do 10).
Kreirati niz od barem 4 studenta tj. barem 4 objekta.
Napisati sledeće arrow funkcije:
*/

let Student1 = {
    ime: 'Milan',
    prezime: 'Ilic',
    godStudija: 3,
    ocene: [10, 10, 9, 9, 10, 10, 10, 10, 10, 10, 10],
    prosek: function() {
        let sum = 0;
        let br = 0;
        this.ocene.forEach(o => {
            sum += o;
            br++;
        });
        return sum / br;
    }
};

let Student2 = {
    ime: 'Marija',
    prezime: 'Ilic',
    godStudija: 2,
    ocene: [6, 7, 6, 6, 7, 7, 6, 7, 7, 7],
    prosek: function() {
        let sum = 0;
        let br = 0;
        this.ocene.forEach(o => {
            sum += o;
            br++;
        });
        return sum / br;
    }
};

let Student3 = {
    ime: 'Marijana',
    prezime: 'Jovic',
    godStudija: 4,
    ocene: [7, 7, 6, 6, 7, 7, 6, 7],
    prosek: function() {
        let sum = 0;
        let br = 0;
        this.ocene.forEach(o => {
            sum += o;
            br++;
        });
        return sum / br;
    }
};

let Student4 = {
    ime: 'Mladen',
    prezime: 'Peric',
    godStudija: 2,
    ocene: [7, 6],
    prosek: function() {
        let sum = 0;
        let br = 0;
        this.ocene.forEach(o => {
            sum += o;
            br++;
        });
        return sum / br;
    }
};

let studenti = [Student1, Student2, Student3, Student4];

// 1.
//Funkciji se prosleđuje niz studenata i string koji sadrži jedan karakter, a štampa imena i prezimena svih studenata čije prezime počinje na zadato slovo.

let pocetnoPrezimena = (niz, a) => {
    niz.forEach(e => {
        if(e.prezime[0] == a || e.prezime[0].toLowerCase() == a) {
            document.body.innerHTML += e.prezime;
        }
    });
}
console.log(pocetnoPrezimena(studenti, 'i'));

// 2.
//Funkciji se prosleđuje niz studenata i dva stringa, a štampa imena i prezimena svih studenata čije ime sadrži prvi string, a prezime sadrži drugi string.

let imenaIPrezimena = (niz, a, b) => {
    niz.forEach(student => {
        if(student.ime.includes(a) && student.prezime.includes(b) || student.ime.toLowerCase().includes(a) && student.prezime.toLowerCase().includes(b)) {
            document.body.innerHTML += `<br>Ime koej sadrzi ${a}, a prezime sadrzi ${b} je ${student.ime} ${student.prezime}<br>`;
        }
    });
}
console.log(imenaIPrezimena(studenti, 'ma', 'c'));

// 3.
//Funkciji se prosleđuje niz studenata i ceo broj između 1 i 5 koji predstavlja godinu studija, a vraća broj studenata koji se nalaze na prosleđenoj godini studija.

let brStudenata = (niz, br) => {
    let brojac = 0;
    niz.forEach(student => {
        if(student.godStudija == br) {
            brojac++;
        }
    });
    return brojac;
}
console.log(`Broj studenata na unetoj godini je: ${brStudenata(studenti, 5)}`);

// 4.
//Funkciji se prosleđuje niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom. Ukoliko ima više takvih studenata, ispisati ime i prezime bilo kog takvog studenta.

let studentNajvisiProsek = niz => {
    let najvisiProsek = 0;
    let studentNajvisiPr = 0;
    niz.forEach(student => {
        let sum = 0;
        let broj = 0;
        student.ocene.forEach(o => {
            sum += o;
            broj++;
        });
        console.log(sum / broj);
        if(sum / broj > najvisiProsek) {
            najvisiProsek = sum / broj;
            studentNajvisiPr = student;
        }
    });
    document.body.innerHTML += `Student sa najvecim prosekom je ${studentNajvisiPr.ime} ${studentNajvisiPr.prezime} <br>`
}
studentNajvisiProsek(studenti);

// 5.
//Funkciji se prosleđuje jedan broj u intervalu od 1 do 5 i niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom, koji je na prosleđenoj godini studija. Ukoliko ima više takvih studenata, ispisati ime i prezime svih takvih studenata.

let maxProsekPoGodini = (niz, x) => {
    let maxPros = 0;
    niz.forEach(student => {
        if(student.godStudija == x) {
            if(student.prosek() > maxPros) {
                maxPros = student.prosek();
            }
        }
    });
    niz.forEach(student => {
       if(student.godStudija == x && student.prosek() == maxPros) {
        document.body.innerHTML += `Student sa najvisim prosekom na godini je: ${student.ime} ${student.prezime}<br>`;
       }
    });
}
maxProsekPoGodini(studenti, 2);

// 6.
//Student je prosečan ako nema nijednu šesticu i nijednu desetku. Funkciji se prosleđuje niz studenata, a ona ispisuje sve prosečne studente.

let prosecan = niz => {
    niz.forEach(student => {
        let ocene = 0;
        student.ocene.forEach(o => {
            if(o == 6 || o == 10) {
                ocene++;
            }
        });
        if(ocene == 0) {
            document.body.innerHTML += `Student je prosecan: ${student.ime} ${student.prezime}<br>`;
        }
    });
}
prosecan(studenti);

// 7.
//Student je “ekstra” ako je polagao ispite samo sa devetkama i desetkama, i pri tome je broj desetki barem duplo veći od broja devetki. Funkciji se prosleđuje niz studenata, a ona ispisuje sve ekstra studente.

let extra = niz => {
    niz.forEach(student => {
        let br9 = 0;
        let br10 = 0;
        student.ocene.forEach(o => {
            if(o == 9) {
                br9++;
            } else if(o == 10) {
                br10++;
            }
        });
        if(br9 + br10 == student.ocene.length &&
            br9 < br10) {
                document.body.innerHTML += `Student je ekstra: ${student.ime} ${student.prezime} <br>`;
            }
    });
}
extra(studenti);

// 8.
//Student “kida” ako je polagao ispite samo samo sa devetkama i desetkama, a broj devetki je manji od godine studije na kojoj se student nalazi. Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji kidaju.

let kida = niz => {
    niz.forEach(student => {
        let br9 = 0;
        let br10 = 0;
        student.ocene.forEach(o => {
            if(o == 9) {
                br9++;
            } else if(o == 10) {
                br10++;
            }
        });
        if(br9 + br10 == student.ocene.length && br9 < student.godStudija) {
            document.body.innerHTML += `Student kida: ${student.ime} ${student.prezime} <br>`;
        }
    });
}
kida(studenti);

// 9.
//Student “razbija” ako je sve ispite položio sa ocenom deset. Pri tome, broj desetki ne sme biti manji od broja 5 * (godina_studija - 1). (Dakle, ne može student na trećoj godini da razbija ako je položio jedan ispit, kao što nijedan student prve godine još ne može da razbija, jer još nije položio sve ispite iz tekuće godine). Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji razbijaju.

let razbija = niz => {
    niz.forEach(student => {
        let br10 = 0;
        student.ocene.forEach(o => {
            if(o == 10) {
                br10++;
            }
        });
        if(br10 == student.ocene.length && br10 >= 5 * (student.godStudija - 1) && student.godStudija != 1) {
            document.body.innerHTML += `Student razbija: ${student.ime} ${student.prezime} <br><br>`;
        }
    });
}
razbija(studenti);

// 10.
//Student je “aljkav” ako nijedan ispit nije položio sa ocenom većom od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve aljkave studente.

let aljkav = niz => {
    let br = 0;
    niz.forEach(student => {
        let br6i7 = 0;
        student.ocene.forEach(o => {
            if(o == 6 || o == 7) 
            br6i7++;
        });
        if(br6i7 == student.ocene.length) {
            br++;
        }
    });
    return br;
}
console.log(aljkav(studenti));

// 11.
//Student se “bruka” ako nije student prve godine, a broj položenih ispita je manji od broja 3 * (godina_studija - 1), i pri tome nijedna ocena nije veća od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve studente koji se brukaju.

let bruka = niz => {
    let br = 0;
    niz.forEach(student => {
        let ocenaVecaOd7 = false;
        student.ocene.forEach(o => {
            if(o > 7) {
                ocenaVecaOd7 = true;
            }
        });
        if(student.godStudija != 1 && student.ocene.length < 3 * (student.godStudija - 1) && !ocenaVecaOd7) {
            br++;
        }
    });
    return br;
}
console.log(bruka(studenti));


// zadatak 2
/* 
Objekat Polaznik sadrži ime (string), prezime (string), kao i ocena (ceo broj između 0 i 100, što zapravo predstavlja broj bodova na završnom testu).
Objekat Kurs (naravno, neki iz ITBootcamp-a) sadrži naziv (string), grad u kojem se održava (string), kao i niz polaznici (elementi niza su objekti tipa Polaznik).
Kreirati niz od barem 4 kursa. Svaki kurs može imati proizvoljan broj polaznika, i staviti barem tri polaznika za svaki kurs. Voditi se sledećim pravilima prilikom kreiranja svakog objekta:
Naziv kursa može biti “Razvoj veb stranica: JS”, “Razvoj veb stranica: PHP”, “Testiranje softvera: QA”, “Osnove programiranja: Java”.
Grad može biti “Beograd”, “Niš”, “Novi Sad” ili “Kosovska Mitrovica”.
Imena polaznika za svaki kurs su proizvoljni, kao i ocene, dokle god je svaka ocena ceo broj između 0 i 100.
Napisati sledeće arrow funkcije:
*/

let Polaznik1 = {
    ime: 'Nikola',
    prezime: 'Peric',
    bodoviZavrsTest: 99
};

let Polaznik2 = {
    ime: 'Milan',
    prezime: 'Lalic',
    bodoviZavrsTest: 65
};

let Polaznik3 = {
    ime: 'Milena',
    prezime: 'Jankovic',
    bodoviZavrsTest: 88
};

let Polaznik4 = {
    ime: 'Mila',
    prezime: 'Petrovic',
    bodoviZavrsTest: 66
};


let Kurs1 = {
    naziv: 'Razvoj veb stranica: JS',
    grad: 'Nis',
    polaznici: [Polaznik1, Polaznik4, Polaznik3]
};

let Kurs2 = {
    naziv: 'Razvoj veb stranica: PHP',
    grad: 'Novi Sad',
    polaznici: [ Polaznik1, Polaznik3]
};

let Kurs3 = {
    naziv: 'Testiranje softvera: QA',
    grad: 'Beograd',
    polaznici: [Polaznik1, Polaznik3, Polaznik4]
};

let Kurs4 = {
    naziv: 'Testiranje softvera: QA',
    grad: 'Beograd',
    polaznici: [Polaznik1, Polaznik3, Polaznik3, Polaznik4]
};

let kursevi = [Kurs1, Kurs2, Kurs3, Kurs4];

// 1.
//Funkciji se prosleđuje niz kurseva i string koji predstavlja grad, a vraća broj kurseva koji se održavaju u tom gradu.



let kurseviUGradu = (niz, a) => {
    let br = 0;
    let kurseviUGradu = [];
    niz.forEach(kurs => {
        if(kurs.grad == a && !kurseviUGradu.includes(kurs.naziv) ) {
            kurseviUGradu.push(kurs.naziv);
            br++
        }
    });
    return br;
}
console.log(kurseviUGradu(kursevi, 'Beograd'));

// 2.
//Funkciji se prosleđuje niz kurseva i string koji predstavlja naziv, a vraća broj kurseva koji sadrže dati naziv.

let nazivKurseva = (niz, a) => {
    let br = 0;
    niz.forEach(kurs => {
        if(kurs.naziv == a) {
            br++;
        }
    });
    return br;
}
console.log(nazivKurseva(kursevi, 'Testiranje softvera: QA'));

// 3.
//Funkciji se prosleđuje niz kurseva, a ona ispisuje naziv kursa i grad u kojem se nalazi maksimalan broj polaznika. Ukoliko postoji više takvih kurseva, ispisati bilo koji takav kurs.

let kursNajvisePolaznika = niz => {
    let max = 0;
    let kursMaxPolaznika = 0;
    niz.forEach(kurs => {
        if(kurs.polaznici.length > max) {
            max = kurs.polaznici.length;
            kursMaxPolaznika = kurs;
        }
    });
    document.body.innerHTML += `<br>Kurs sa najvise polaznika je: ${kursMaxPolaznika.naziv}, ${kursMaxPolaznika.grad} <br>`;
}
kursNajvisePolaznika(kursevi);

// 4.
//Funkciji se prosleđuje niz kurseva i string koji predstavlja prezime, a ispisuje sve polaznike (ime i prezime polaznika, kao i naziv kursa i grad gde pohađaju kurs) čije ime sadrži dati parametar.

let prezimeIKurs = (niz, a) => {
    niz.forEach(kurs => {
        kurs.polaznici.forEach(polaznik => {
            if(polaznik.prezime == a) {
                document.body.innerHTML += `Polaznici sa prezimenom ${a} su: ${polaznik.ime} ${polaznik.prezime}, ${kurs.naziv}, ${kurs.grad} <br>`
            }
        });
    });
}
prezimeIKurs(kursevi, 'Lalic');

// 5.
//Funkciji se prosleđuje niz kurseva, a ispisuje naziv kursa i grad gde je ostvarena najbolja prosečna ocena na završnom testu. Ukoliko ima više takvih kurseva, ispisati bilo koji.

let najboljiProsek = niz => {
    let max = 0;
    let kursMaxProsek = 0;
    niz.forEach(kurs => {
        let sum = 0;
        kurs.polaznici.forEach(polaznik => {
            sum += polaznik.bodoviZavrsTest;
        });
        if(sum / kurs.polaznici.length > max) {
            max = sum / kurs.polaznici.length;
            kursMaxProsek = kurs;
        }
    });
    document.body.innerHTML += `Najbolja prosecna ocena na zavrsnom testu ostvarena je na kursu: ${kursMaxProsek.naziv}, ${kursMaxProsek.grad}<br>`;
}
najboljiProsek(kursevi);

// 6.
//Kurs je uspešan ako su svi polaznici položili završni test (svi polaznici ostvarili iznad 65%). Funkciji se prosleđuje niz kurseva, a vraća broj uspešnih kurseva.

let brUspesnihKurseva = niz => {
    let br = 0;
    niz.forEach(kurs => {
        let polozio = true;
        kurs.polaznici.forEach(polaznik => {
            if(polaznik.bodoviZavrsTest <= 65) {
                polozio = false;
            }
        });
        if(polozio) {
            br++;
        }
    });
    return br;
}

console.log(brUspesnihKurseva(kursevi));

// 7.
//Grad “kida” ukoliko je svaki kurs koji se održava u tom gradu uspešan. Funkciji se prosleđuje niz kurseva i grad, a vraća da li dati grad kida (funkcija vraća true ili false).

let gradKida = (niz, grad) => {
    let kida = true;
    niz.forEach(kurs => {
        if(kurs.grad.includes(grad)) {
            polozili = true;
            kurs.polaznici.forEach(polaznik => {
                if(polaznik.bodoviZavrsTest <= 65) {
                    polozili = false;
                }
            });
        }
    });
}

// 8.
//Polaznici na nekom kursu su “pokidali” na završnom testu ako nijedan polaznik nije osvojio manje od 80% na završnom testu. Funkciji se prosleđuje niz kurseva i naziv nekog kursa, a ona ispituje da li su polaznici pokidali na tom kursu (funkcija vraća true ili false).

let pokidaliKurs = (niz, nazivKursa) => {
    let pokidali = true;

    niz.forEach(kurs => {
        if(kurs.naziv == nazivKursa) {
            kurs.polaznici.forEach(polaznik => {
                if(polaznik.bodoviZavrsTest < 80) {
                    pokidali = false;
                }
            });
        }
    });
    return pokidali;
}
console.log(pokidaliKurs(kursevi, 'Razvoj veb stranica: PHP'));


// zadatak 3
/* Sa niškog aerodroma u toku jednog dana polaze letovi ka različitim gradovima. 
Napraviti objekat Let koji sadrži destinaciju letenja (string), broj putnika na letu (ceo broj), mesta na letu (ceo broj).

Kreirati niz letova i napisati funkcije:
*/

let LetNis1 = {
    destinacija: 'Lisabon',
    brPutnika: 129,
    brMesta: 150
};

let LetNis2 = {
    destinacija: 'Peking',
    brPutnika: 329,
    brMesta: 350
};

let LetNis3 = {
    destinacija: 'Lisabon',
    brPutnika: 296,
    brMesta: 350
};

let LetNis4 = {
    destinacija: 'Atina',
    brPutnika: 146,
    brMesta: 150
};

let LetNis5 = {
    destinacija: 'Valeta',
    brPutnika: 75,
    brMesta: 150
};

let letovi = [LetNis1, LetNis2, LetNis3, LetNis4, LetNis5];

// 1.
//maxBrojPutnika kojoj se prosleđuje niz letova, a funkcija vraća maksimalan broj putnika na nekom od letova.

let maxBrojPutnika = niz => {
    let max = 0;
    niz.forEach(l => {
        if(l.brPutnika > max) {
            max = l.brPutnika;
        }
    });
    return max;
}
console.log(maxBrojPutnika(letovi));

// 2.
//Napisati funkciju brojMax kojoj se prosleđuje niz letova, a funkcija vraća broj letova na kojima je leteo maksimalan broj putnika.

let brojMax = niz => {
    let br = 0;
    niz.forEach(l => {
        if(l.brPutnika == l.brMesta) {
            br++
        }
    });
    return br;
}
console.log(brojMax(letovi));

// 3.
//Napisati funkciju prosek kojoj se prosleđuje niz letova, a funkcija vraća prosečan broj putnika po letu sa niškog aerodroma tog dana.

let prosek = niz => {
    let sum = 0;
    niz.forEach(l => {
        sum += l.brPutnika;
    });
    return sum / niz.length;
}
console.log(prosek(letovi));

// 4.
//Dan je bio isplativ za niški aerodrom, ukoliko je više od polovine svakog leta bilo popunjeno (broj putnika na letu bio je veći od polovine mesta na letu).

let isplativ = niz => {
    let isplativo = true;
    niz.forEach(l => {
        if(l.brPutnika <= l.brMesta / 2) {
            isplativo = false;
        }
    });
    return isplativo;
}
console.log(isplativ(letovi));

//5.
//Dan je bio iznadGranice ukoliko je u većini letova broj putnika bio veći od zadate granice. Napisati funkciju kojoj se prosleđuju niz letova, kao i granica (ceo broj), a funkcija ispituje da li je dan bio isplativ (vraća true ako jeste i false ako nije).

let iznadGranice = (niz, granica) => {
    let br = 0;
    niz.forEach(l => {
        if(l.brPutnika > granica) {
            br++;
        }
    });
    return br > niz.length / 2;
}
console.log(iznadGranice(letovi, 180));

// 6.
//Napisati funkciju dobreDestinacije kojoj se prosleđuje niz letova, a funkcija ispisuje letove sa natprosečnim brojem putnika.

let dobreDestinacije = niz => {
    let destinacije = [];
    niz.forEach(l => {
        if(l.brPutnika > prosek(niz)) {
           destinacije.push(l.destinacija);  
        }
    });
    document.body.innerHTML += `Destinacije sa natprosecnim brojem putnika su: ${destinacije}`;
}
dobreDestinacije(letovi);

// 7.
//Napisati funkciju ukupanBrojPutnikaDestinacije kojoj se prosleđuju string koji predstavlja naziv destinacije i niz letova, a funkcija vraća broj putnika koji je danas leteo na tu destinaciju.

let ukupanBrojPutnikaDestinacije = (destinacija, niz) => {
    let brPut = 0;
    niz.forEach(l => {
        if(l.destinacija == destinacija) {
            brPut += l.brPutnika;
        }
    });
    return brPut;
}
console.log(ukupanBrojPutnikaDestinacije('Lisabon', letovi));

// 8.
//Napisati funkciju slabaProdaja kojoj se prosleđuje niz letova, a funkcija vraća onaj let koji je imao najveću razliku između broja putnika na letu i broja mesta na letu.

let slabaProdaja = niz => {
    let maxRazlika = 0;
    let Let = 0;
    niz.forEach(l => {
        if(l.brMesta - l.brPutnika > maxRazlika) {
            maxRazlika = l.brMesta - l.brPutnika;
            Let = l.destinacija;
        }
    });
    return Let;
}
console.log(slabaProdaja(letovi));


// zadatak 4
//Dat je niz u kojem su smešteni odgovarajući letovi koji polaze sa nekog aerodroma u toku jednog dana. Svaki element tog niza odgovara jednom letu, pri čemu se za svaki let pamti destinacija (string, grad u koji avion sleće), država u kojoj se taj grad nalazi (takođe string), kao i vreme poletanja aviona sa aerodroma (string u formatu “hh:mm”), vreme sletanja aviona na destinaciju (string u formatu “hh:mm”). U ovom zadatku, može se desiti da sa aerodroma poleće više letova ka istoj destinaciji.

let Let1 = {
    destinacija: 'Toronto',
    drzava: 'Kanada',
    vremePoletanja: '12:00',
    vremeSletanja: '18:05'
};

let Let2 = {
    destinacija: 'Frankfurt',
    drzava: 'Nemacka',
    vremePoletanja: '09:00',
    vremeSletanja: '10:45'
};

let Let3 = {
    destinacija: 'Rim',
    drzava: 'Italija',
    vremePoletanja: '13:10',
    vremeSletanja: '14:38'
};

let Let4 = {
    destinacija: 'Cirih',
    drzava: 'Svajcarska',
    vremePoletanja: '10:30',
    vremeSletanja: '12:05'
};

let Let5 = {
    destinacija: 'Frankfurt',
    drzava: 'Nemacka',
    vremePoletanja: '00:50',
    vremeSletanja: '02:25'
};

//Kreirati niz letova, pri čemu je svaki element tog niza jedan objekat. 

let Letovi = [Let1, Let2, Let3, Let4, Let5];

// 1.
//Napisati funkciju brojLetovaZaZemlju kojoj se prosleđuju niz letova, kao i zemlja, a funkcija vraća broj letova do date zemlje.

let brojLetovaZaZemlju = (niz, zemlja) => {
    let br = 0;
    niz.forEach(l => {
        if(l.drzava == zemlja) {
            br++;
        }
    });
    return br;
}
console.log(brojLetovaZaZemlju(Letovi, 'Kanada'));

// 2.
//Napisati funkciju visePrePodne kojoj se prosleđuje niz letova, a određuje da li je bilo više letova pre podne ili posle podne. Ukoliko je bilo više letova pre podne, vratiti true, a u suportnom, vratiti false.

let visePrePodne = niz => {
    let br = 0;
    niz.forEach(l => {
        let cifra1 = l.vremePoletanja[0];
        let cifra2 = l.vremePoletanja[1];
        let sati = Number(cifra1 + cifra2);
        console.log(sati);
        if(sati < 12) {
            br++;
        }
    });
    return br > niz.length / 2;
}
console.log(visePrePodne(Letovi));

// 3.
//Napisati funkciju ispisLetovaDoSada kojoj se prosleđuje niz letova, kao i zemlja, a koja ispisuje sve letove koji su poleteli do trenutnog vremena (vreme preuzeti sa računara).

let ispisLetovaDoSada = (niz, zemlja) => {
    let datum = new Date();
    let sat = datum.getHours();
    let min = datum.getMinutes();

    niz.forEach(l => {
        let cas = Number(l.vremePoletanja.split(':')[0]);
        let m = Number(l.vremePoletanja.split(':')[1]);

       if(l.drzava == zemlja) {
        if(cas < sat) {
            document.body.innerHTML += `<br>Do ovog trenutka poleteli su avioni ka sledecim destinacijama: ${l.destinacija}`;
        } else if(cas == sat && m < min) {
            document.body.innerHTML += `<br>Do ovog trenutka poleteli su avioni ka sledecim destinacijama: ${l.destinacija}`;
        }
       }
    });
}
ispisLetovaDoSada(Letovi, 'Nemacka');

// 4.
//Neke zemlje su označene kao crvene, jer je u njima nepovoljna epidemiološka situacija. Napisati funkciju rizicniLetovi kojoj se prosleđuju niz letova, kao i niz zemalja, a koja ispisuje u paragrafima čiji je tekst obojen crvenom bojom. U svakom paragrafu ispisati informacije o onim letovima koji kao destinaciju imaju zemlju iz crvene zone.

let zemljeCrvene = ['Kanada', 'Italija', 'Svajcarska'];

let rizicniLetovi = (niz, nizZemlje) => {
    niz.forEach(l => {
        nizZemlje.forEach(z => {
            if(l.drzava == z) {
                document.body.innerHTML += `<p style="color: red;">Let prema zemlji u crvenoj zoni je: ${l.destinacija}, vreme poletanja: ${l.vremePoletanja}</p>`;
            }
        });
    });
}
rizicniLetovi(Letovi, zemljeCrvene);

// 5.
//Neka destinacija je tražena ukoliko postoji više letova u toku dana za tu destinaciju. Napisati funkciju trazeneDestinacije kojoj se prosleđuje niz letova, a koja ispisuje sve tražene destinacije (ukoliko postoje).

let trazeneDestinacije = niz => {
    let trazeneDest = [];
    niz.forEach(l => {
        let br = 0;
        let dest = l.destinacija;
        niz.forEach(l1 => {
            if(l1.destinacija == dest && trazeneDest.indexOf(dest) == -1) {
                br++;
            }
        });
        if(br > 1) {
            trazeneDest.push(dest);
        }
    });
    document.body.innerHTML += `<br>Trazene destinacije su: ${trazeneDest}`;
}
trazeneDestinacije(Letovi);

// 6.
//Napisati funkciju prosecanBrojLetovaZaZemlju kojoj se prosleđuje niz letova, a koja vraća prosečan broj letova ka svekoj od zemalja koje se pojavljuju u prosleđenom nizu.

let prosecanBrojLetovaZaZemlju = niz => {
    let zemlja = [];
    let prBrLetova = [];
    niz.forEach(l => {
        let br = 0;
        let dest = l.destinacija;
        if(zemlja.indexOf(dest) == -1) {
            niz.forEach(l1 => {
                if(l1.destinacija == dest) {
                    br++;
                }
            });
            zemlja.push(dest);
            prBrLetova.push(`${dest}-${br / niz.length}`);
        }
    });
    return prBrLetova;
}
console.log(prosecanBrojLetovaZaZemlju(Letovi));

// zadatak 5.
/*U toku jednog dana vršenja su merenja vremenskih prilika. Konkretno, jedan dan se formira kao asocijativni niz koji od ključeva i vrednosti sadrži:
Datum (string u formatu YYYY/MM/DD),
Kiša (true/false),
Sunce (true/false),
Oblačno (true/false),
Vrednosti temperature (Niz temperatura tog dana).

Napisati funkcije:
*/

let dan1 = {
    datum: '2024/01/05',
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [5, 6, 6, 4, 1]
};

let dan2 = {
    datum: '2024/01/06',
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [-1, -1, 0, 0, -1]
};

let dan3 = {
    datum: '2023/07/07',
    kisa: false,
    sunce: false,
    oblacno: true,
    temperature: [22, 30, 32, 31, 31]
};

let dan4 = {
    datum: '2024/01/08',
    kisa: true,
    sunce: true,
    oblacno: true,
    temperature: [-2, 0, 3, 1, -1]
};

// 1.
//prosecnaTemp kojoj se prosleđuje dan, a koja određuje i vraća prosečnu temperaturu izmerenu tog dana.

let prosecnaTemp = obj => {
    let sum = 0;
    obj.temperature.forEach(t => {
        sum += t;
    });
    return sum / obj.temperature.length;
}
console.log(prosecnaTemp(dan1));

// 2.
//brojNatprosecnoMerenja kojoj se prosleđuje dan, a koja prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.

let brojNatprosecnoMerenja = obj => {
    let prosecna = prosecnaTemp(obj);
    let br = 0;

    obj.temperature.forEach(t => {
        if(t > prosecna) {
            br++;
        }
    });
    return br;
}
console.log(brojNatprosecnoMerenja(dan1));

// 3.
//Napisati funkciju brojMaxMerenja kojoj se prosleđuje dan, a koja prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.

let brojMaxMerenja = obj => {
    let max = obj.temperature[0];
    let br = 0;
    obj.temperature.forEach(t => {
        if(t > max) {
            max = t;
        }
    });
    obj.temperature.forEach(t => {
        if(t == max) {
            br++;
        }
    });
    return br;
}
console.log(brojMaxMerenja(dan2));

// 4.
//Napisati funkciju brojMerenjaIzmedju kojoj se prosleđuje dan, kao i dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).

let brojMerenjaIzmedju = (obj, a, b) => {
    if(a > b) {
        let pomocna = a;
        a = b;
        b = pomocna;
    }
    let br = 0;
    
    obj.temperature.forEach(t => {
        if(t > a && t < b) {
            br++;
        }
    });
    return br;
}
console.log(brojMerenjaIzmedju(dan1, 0, 5));

// 5.
//Napisati funkciju natprosecnoTopao kojoj se prosleđuje dan, a koja vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 

let natprosecnoTopao = obj => {
    let prosek = prosecnaTemp(obj);
    let br = 0;

    obj.temperature.forEach(t => {
        if(t > prosek) {
            br++;
        }
    });
    return br > obj.temperature.length / 2;
}
console.log(natprosecnoTopao(dan3));

// 6.
//Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Napisati funkciju leden kojoj se prosleđuje dan, a koja vraća true ukoliko je dan bio leden, u suprotnom vraća false.

let leden = obj => {
    let ledeno = true;
    obj.temperature.forEach(t => {
        if(t > 0) {
            ledeno =false;
        }
    });
    return ledeno;
}
console.log(leden(dan2));

// 7.
//Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Napisati funkciju tropski($dan) kojoj se prosleđuje dan, a koja vraća true ukoliko je dan bio tropski, u suprotnom vraća false.

let tropski = obj => {
    let tropi = true;
    obj.temperature.forEach(t => {
        if(t < 24) {
            tropi = false;
        }
    });
    return tropi;
}
console.log(tropski(dan3));

// 8.
//Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Napisati funkciju nepovoljan($dan) kojoj se prosleđuje dan, a koja vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.

let nepovoljan = obj => {
    let nepovolji = true;
    for(let i = 0; i < obj.temperature.length - 1; i++) {
        if(Math.abs(obj.temperature[i] - obj.temperature[i + 1]) > 8) {
            nepovolji = false;
        }
    }
    return nepovolji;
}
console.log(nepovoljan(dan3));

// 9.
//Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Napisati funkciju neuobicajen($dan) kojoj se prosleđuje dan, a koja vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.

let neuobičajen = obj => {
    let neuobicaj = false;
    obj.temperature.forEach(t => {
        if(obj.kisa && t < -5 ||
            obj.oblacno && t > 25 ||
            obj.kisa && obj.oblacno && obj.sunce) {
                neuobicaj = true;
            }
    });
    return neuobicaj ;
}
console.log(neuobičajen(dan1));


// zadatak 6.
/*Dat je niz u kojem su smešteni podaci o blogovima nekog korisnika. Svaki element tog niza odgovara jednom blogu, pri čemu se za svaki blog pamti naslov (string), broj lajkova (ceo broj), kao i broj dislajkova (ceo broj).
Kreirati niz blogova, pri čemu je svaki element tog niza jedan objekat tj. po jedan blog.
*/

let blog1 = {
    naslov: 'Zdravlje',
    brLajk: 123,
    brDislajk: 11
};

let blog2 = {
    naslov: 'Lepota',
    brLajk: 150,
    brDislajk: 150
};

let blog3 = {
    naslov: 'Moda',
    brLajk: 116,
    brDislajk: 70
};

let blog4 = {
    naslov: 'Knjige',
    brLajk: 251,
    brDislajk: 36
};

let blogovi = [blog1, blog2, blog3, blog4];

//Napisati funkciju:

// 1.
//Kojoj se prosleđuje niz blogova, a ona vraća ukupan broj lajkova.

let ukupanBrLajkova = niz => {
    let br = 0;
    niz.forEach(blog => {
        br += blog.brLajk;
    });
    return br;
}
console.log(ukupanBrLajkova(blogovi));

// 2.
//Kojoj se prosleđuje niz blogova, a ona vraća prosečan broj lajkova.

let prosecanBrLajk = niz => {
    let br = 0;
    niz.forEach(blog => {
        br += blog.brLajk;
    });
    return br / niz.length;
}
console.log(prosecanBrLajk(blogovi));

// 3.
//Kojoj se prosleđuje niz blogova, a ona ispisuje sve one naslove blogova koji imaju više lajkova nego dislajkova.

let lajkNaslovi = niz => {
    niz.forEach(blog => {
        if(blog.brLajk > blog.brDislajk) {
            document.body.innerHTML += `<br>Naslov koji ima vise lajkova od dislajkova je: ${blog.naslov}`;
        }
    });
}
lajkNaslovi(blogovi);

// 4.
//Kojoj se prosleđuje niz blogova, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više lajkova nego dislajkova.

let duploLajkova = niz => {
    niz.forEach(blog => {
        if(blog.brLajk >= 2 * blog.brDislajk) {
            document.body.innerHTML += `<br>Blog koji ima najmanje duplo vise lajkova od dislajkova je: ${blog.naslov}`;
        }
    });
}
duploLajkova(blogovi);

// 5.
//Kojoj se prosleđuje niz blogova, a ona ispisuje sve one naslove blogova koji se završavaju uzvičnikom.


// 6.
//Kojoj se prosleđuje niz blogova, kao i $granica, a ona vraća broj blogova čiji je broj lajkova veći od granice.


// 7.
//Kojoj se prosleđuje niz blogova, kao i neka reč, a ona vraća prosečan broj lajkova za one blogove koji u naslovu sadrže prosleđenu reč.


// 8.
//Kojoj se prosleđuje niz blogova, a ona ispisuje blogove koji imaju iznadprosečan broj lakova.


// 9.
//Kojoj se prosleđuje niz blogova, a ona ispisuje blogove koji imaju ispodprosečan broj dislakova.
