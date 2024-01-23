/*  zadatak 1
Kreirati klasu Boja koja ima talasnu dužinu u nm, zasićenje i intenzitet.
Napraviti konstruktor kome se prosleđuju tri vrednosti koje treba postaviti.
Napraviti odgovarajuće getere i setere.
Napraviti funkciju ispitajSličnost koja za dve prosleđene boje vraća true ukoliko su te dve boje iste, u suprotnom vraća false.
Napraviti funkciju srednjaTalasnaDuzina koja za niz boja vraća vrednost srednje talasne dužine.
*/

class Boja {
    constructor(td, z, i) {
        this.talasnaDuzina = td;
        this.zasicenje = z;
        this.intenzitet = i;
    }

    set talasnaDuzina(td) {
        this._talasnaDuzina = td;
    }

    set zasicenje(z) {
        this._zasicenje = z;
    }

    set intenzitet(i) {
        this._intenzitet = i;
    }

    get talasnaDuzina() {
        return this._talasnaDuzina;
    }

    get zasicenje() {
        return this._zasicenje;
    }

    get intenzitet() {
        return this._intenzitet;
    }
}

let boja1 = new Boja(420, 62, 20);
let boja2 = new Boja(466, 50, 33);
let boja3 = new Boja(466, 50, 33);

let boje = [boja1, boja2, boja3];

let  ispitajSličnost = (b1, b2) => {
    return (b1.talasnaDuzina == b2.talasnaDuzina &&
        b1.zasicenje == b2.zasicenje &&
        b1.intenzitet == b2.intenzitet);
}
console.log( ispitajSličnost(boja3, boja2));

let srednjaTalasnaDuzina = niz => {
    let sumTalasDuz = 0;
    niz.forEach(boja => {
        sumTalasDuz += boja.talasnaDuzina;
    });
    return sumTalasDuz / niz.length;
}
console.log(srednjaTalasnaDuzina(boje));

/* zadatak 2
Kreirati klasu Datum koja sadrži tri atributa - dan, mesec i godina.
Napraviti konstruktor kome se prosleđuju tri vrednosti koje treba postaviti.
Napraviti odgovarajuće getere i setere.
Napraviti funkciju ranijiDatum koja za dva prosleđena datuma ispisuje raniji od ta dva datuma. Ukoliko su datumi jednaki onda na ekranu ispisati “Datumi su jednaki”.
*/

class Datum {
    constructor(d, m, g) {
        this.dan = d;
        this.mesec = m;
        this.godina = g;
    }
    set dan(d) {
        this._dan = d;
    }
    set mesec(m) {
        this._mesec = m;
    }
    set godina(g) {
        this._godina = g;
    }
    get dan () {
        return this._dan;
    }
    get mesec() {
        return this._mesec;
    }
    get godina() {
        return this._godina;
    }
}

let datum1 = new Datum(2, 11, 1981);
let datum2 = new Datum(26, 7, 2006);
let datum3 = new Datum(26, 7, 2006);

let ranijiDatum = (dat1, dat2) => {
    let raniji = dat2;
    if(dat1.godina < dat2.godina ||
        dat1.godina == dat2.godina && dat1.mesec < dat2.mesec ||
        dat1.godina == dat2.godina && dat1.mesec == dat2.mesec && dat1.dan < dat2.dan) {
            raniji = dat1;
    }

    if(dat1.godina == dat2.godina && dat1.mesec == dat2.mesec && dat1.dan == dat2.dan) {
        console.log('Datumi su jednaki');
    } else {
        console.log(`Raniji datum je: ${raniji.dan}-${raniji.mesec}-${raniji.godina}`);
    }
}
ranijiDatum(datum1, datum3);

/* zadatak 3
Kreirati klasu Radnik koja sadrži dva atributa - ime i plata ranika.
Napraviti konstruktor kome se prosleđuju dve vrednosti koje treba postaviti.
Napraviti odgovarajuće getere i setere.
Napraviti funkciju maksPlata kojoj se prosleđuje niz radnika, a ona vraća najveću platu ranika.
Napraviti funkciju maksPlataOsoba kojoj se prosleđuje niz ranika, a ona ispisuje sve podatke za svakom od radnika sa maksimalnom platom.
*/

class Radnik {
    constructor(i, p) {
        this.ime = i;
        this.plata = p;
    }

    set ime(ime) {
        this._ime = ime;
    }
    set plata(plata) {
        this._plata = plata;
    }
    get ime() {
        return this._ime;
    }
    get plata() {
        return this._plata;
    }
}

let radnik1 = new Radnik('Marko', 89000);
let radnik2 = new Radnik('Milena', 96000);
let radnik3 = new Radnik('Bojan', 96000);

let radnici = [radnik1, radnik2, radnik3];

let maksPlata = niz => {
    let maxP = niz[0].plata;
    niz.forEach(radnik => {
        if(radnik.plata > maxP) {
            maxP = radnik.plata;
        }
    });
    return maxP;
}
console.log(maksPlata(radnici));

let maksPlataOsoba = niz => {
    let maxPl = maksPlata(niz);
    niz.forEach(radnik => {
        if(radnik.plata == maxPl) {
            console.log(`Radnik sa najvecom platom je: ${radnik.ime}, ${radnik.plata}`);
        }
    });
}
maksPlataOsoba(radnici);


/* zadatak 4
Kreirati kalsu Autobus koja ima podatke o registarskom broju autobusa i o broju sedišta u autobusu.
Napraviti konstruktor kome se prosleđujeu odgovarajuće vrednosti.
Napraviti odgovarajuće getere i setere.
Napraviti metodu koja ispisuje podatke o autobusu.
Napraviti niz autobusa.
Napraviti funkciju ukupnoSedista kojoj se prosleđuje niz autobusa a koja određuje i vraća koliko ukupno sedišta sadrže svi autobusi koji se nalaze u nizu autobusa.
Napraviti funkciju maksSedista koja ispisuje podatke o autobusu koji ima najveći broj sedišta.
Napraviti funkciju ljudi kojoj se prosleđuje broj ljudi i niz autobusa a funkcija vraća true ukoliko je moguće toliko ljudi smestiti u autobuse, u suprotnom vraća false.
*/

class Autobus {
    constructor(rb, bs) {
        this.registarskiBroj = rb;
        this.brSedista = bs;
    }

    set registarskiBroj(regBr) {
        this._registarskiBroj = regBr;
    }
    set brSedista(brSed) {
        this._brSedista = brSed;
    }
    get registarskiBroj() {
        return this._registarskiBroj;
    }
    get brSedista() {
        return this._brSedista;
    }

    ispisPodataka() {
        console.log(`Autobus: ${this.registarskiBroj}, ${this.brSedista}`);
    }
}

let autobus1 = new Autobus('12345', 49);
let autobus2 = new Autobus('100-200', 70);
let autobus3 = new Autobus('13-579', 25);

let autobusi = [autobus1, autobus2, autobus3];

let ukupnoSedista = niz => {
    let ukupnoSed = 0;
    niz.forEach(autobus => {
        ukupnoSed += autobus.brSedista;
    });
    return ukupnoSed;
}
console.log(ukupnoSedista(autobusi));

let maksSedista = niz => {
    let maxBrSed = niz[0].brSedista;
    let bus = niz[0];
    niz.forEach(autobus => {
        if(autobus.brSedista > maxBrSed) {
            maxBrSed = autobus.brSedista;
            bus = autobus;
        }
    });
    console.log(`Najveci broj sedista ima autobus: ${bus.registarskiBroj}, ${bus.brSedista}`);
}
maksSedista(autobusi);

let ljudi = (brLjudi, niz) => {
    let ukSedista = ukupnoSedista(niz);
    return brLjudi <= ukSedista;
}
console.log(ljudi(145, autobusi));


/* zadatak 5
Kreirati klasu FMRadio koja sadrži atribute - stanica, frekvencija i jačina tona.
Klasa treba da sedrži odgovarajući konstruktor, getere i setere koji zadovoljavaju uslov da se frekvencija nalazi u opsegu od 87.5MHz do 108MHz. Jačina zvuka treba da se nalazi u opsegu od 0 do 20.
Napraviti metodu promeniZvuk kojoj se prosleđuje simbol plus ili minus i koja  po pozivu jačinu zvuka menja isključivo za 1 stupanj. Ukoliko je prosleđen simbol + povećati jačinu zvuka za 1, u suprotnom smanjiti jačinu zvuka za 1. Voditi računa o tome da jačina zvuka ne sme biti manja od 0 i veća od 20 (Ova metoda ništa ne vraća, samo promeni vrednost zvuka).
Napraviti metodu frekvencijaIskljuci koja vrednost funkcije postavlja na najmanju moguću frekvenciju (na 87.5MHz).
(I ova metoda takođe ništa ne vraća, samo postavi vrednost frekvencije)
Napisati funkciju srednjaFrekvencija kojoj se prosleđuje niz radio stanica, a ona vraća koja je prosečna frekvencija prosleđenih radio stanica.
Napisati funkciju najbliziMaks kojoj se prosleđuje niz radio stanica, a funkcija vraća onu radio stanicu čija je frekvencija najbliža maksimalnoj frekvenciji.
Testirati rad napravljenih metoda.
*/

class FMRadio {
    constructor(s, f, jt) {
        this.stanica = s;
        this.frekvencija = f;
        this.jacinaTona = jt;
    }
    set stanica(st) {
        this._stanica = st;
    }
    set frekvencija(fr) {
        if(fr >= 87.5 && fr <= 108) {
            this._frekvencija = fr;
        }
    }
    set jacinaTona(jtona) {
        if(jtona >= 0 && jtona <= 20) {
            this._jacinaTona = jtona;
        }
    }
    get stanica() {
        return this._stanica;
    }
    get frekvencija() {
        return this._frekvencija;
    }
    get jacinaTona() {
        return this._jacinaTona;
    }

    promeniZvuk(plusIliMinus) {
        if(plusIliMinus == '+') {
            this.jacinaTona ++;
        } else if(plusIliMinus == '-') {
            this.jacinaTona --;
        }
    }

    frekvencijaIskljuci() {
        this.frekvencija = 87.5;
    } 
}

let stanica1 = new FMRadio('SKY', 90, 11);
let stanica2 = new FMRadio('MAX', 102.3, 10);
let stanica3 = new FMRadio('SUN', 100.7, 15);

let stanice = [stanica1, stanica2, stanica3];

stanica1.promeniZvuk('-');
console.log(stanica1.jacinaTona);

// stanica2.frekvencijaIskljuci();
// console.log(stanica2.frekvencija);

let srednjaFrekvencija = niz => {
    let ukFr = 0;
    niz.forEach(stanica => {
        ukFr += stanica.frekvencija;
    });
    return ukFr / niz.length;
}
console.log(srednjaFrekvencija(stanice));

let najbliziMaks = niz => {
    let najblize = 108 - niz[0].frekvencija;
    najblizaStanica = niz[0];
    niz.forEach(stanica => {
        if(108 - stanica.frekvencija < najblize) {
            najblize = 108 - stanica.frekvencija;
            najblizaStanica = stanica;
        }
    });
    return najblizaStanica;
}
console.log(najbliziMaks(stanice));


/* zadatak 6
Kreirati klasu Krug koja ima atribut za poluprečnik kruga.
Napraviti odgovarajući konstruktor, getere i setere.
Napraviti metodu obimKruga koja izračunava i vraća obim kruga.
Napraviti metodu povrsinaKruga koja izračunava i vraća površinu kruga.
Napraviti funkciju upisaniKrug kojoj se prosleđuju dva objekta tipa krug, a ona vraća true ukoliko je u prvi prosleđeni krug moguće upisati drugi prosleđeni krug. U suprotnom funkcija vraća false.
* Napisati funkciju rastuci koja vraća true ukoliko se svaki krug može upisati u svog sledbenika. Ukoliko ma jedan krug ne može da se upiše u sledeći krug, vratiti false. 
*/

class Krug {
    constructor(r) {
        this.poluprecnik = r;
    }
    set poluprecnik(r) {
        this._poluprecnik = r;
    }
    get poluprecnik() {
        return this._poluprecnik;
    }

    obimKruga() {
        return 2 * this.poluprecnik * Math.PI;
    }

    povrsinaKruga() {
        return Math.PI * this.poluprecnik ** 2;
    }
}

let krug1 = new Krug(15);
let krug2 = new Krug(16);
let krug3 = new Krug(20);

let krugovi = [krug1, krug2, krug3];

console.log(krug2.povrsinaKruga());

let upisaniKrug = (kr1, kr2) => {
    return kr1.poluprecnik > kr2.poluprecnik;
}
console.log(upisaniKrug(krug3, krug1));

let rastuci = niz => {
    let br = 0;
    for(let i = 0; i < niz.length - 1; i++) {
        if(niz[i].poluprecnik < niz[i + 1].poluprecnik) {
            br++;
        }
    }
    return br == niz.length - 1;
}
console.log(rastuci(krugovi));


/* zadatak 7
Napraviti klasu Cipela koja sadrži atribute: naziv, broj cipele i niz prepravki koje treba obaviti na cipeli.
Napraviti odgovarajući konstruktor, getere i setere.
Napraviti metodu zalepi koja po pozivu na ekranu ispisuje “Zalepljena cipela”.
Napraviti metodu prosiri koja po pozivu na ekranu ispisuje “Prosirena cipela”.
Napraviti metodu usij koja po pozivu na ekranu ispisuje “Usivena cipela”.
Napraviti funkciju radi kojoj se prosledjuje jedna cipela (jedna instanca klase Cipela) i koja proverava da li je neka u nizu prepravki sadrži string zalepi, proširi ili ušij. Svaki put kada naiđe na prepravku (element u nizu prepravki) zalepi poziva se metoda zalepi, kada naiđe na prepravku prosiri poziva se metoda prosiri, kada naiđe na prepravku usij poziva se metoda usij, u suprotno se na ekranu ispisuje “Nepoznata prepravka”.
Napraviti niz cipela.
Napraviti funkciju najvisePrepravki kojoj se prosleđuje niz cipela, a funkcija na ekranu ispisuje podatke o onoj cipeli koja je imala najviše prepravki (ukoliko je bilo više cipela koje imaju najveći broj prepravki, ispisati sve podatke o tim cipelama).
Napraviti funkciju brojPrepravki kojoj se prosleđuje niz cipela i string koji predstavlja jednu od prepravki (zalepi, prosiri ili usij). Fukcija vraća broj cipela u kojima je trebalo uraditi prosleđenu prepravku. Pozvati funkciju i rezultat ispisati na ekranu.
*/

class Cipela {
    constructor(n, brC, prepr) {
        this.naziv = n; 
        this.brojCipele = brC;
        this.prepravke = prepr;
    }
    set naziv(naz) {
        this._naziv = naz;
    }
    set brojCipele(br) {
        this._brojCipele = br;
    }
    set prepravke(prepr) {
        this._prepravke = prepr;
    }
    get naziv(){
        return this._naziv;
    }
    get brojCipele() {
        return this._brojCipele;
    }
    get prepravke () {
        return this._prepravke;
    }

    zalepi() {
        console.log('Zalepljena cipela');
    }
    
    prosiri() {
        console.log('Prosirena cipela');
    }

    usij() {
        console.log('Usivena cipela');
    }
}

let cipela1 = new Cipela('patika', 42, ['usij', 'zalepi']);
let cipela2 = new Cipela('cizma', 39, ['usij', 'zalepi', 'prosiri']);
let cipela3 = new Cipela('sandala', 38, ['usij', 'zalepi', 'prosiri', 'nalepi']);

let cipele = [cipela1, cipela2, cipela3];

let radi = cipela => {
    cipela.prepravke.forEach(prepravka => {
        if(prepravka == 'usij') {
            cipela.usij();
        } else if(prepravka == 'zalepi') {
            cipela.zalepi();
        } else if(prepravka == 'prosiri') {
            cipela.prosiri();
        } else {
            console.log('Nepoznata prepravka');
        }
    });
}
radi(cipela3);

let najvisePrepravki = niz => {
    let maxPrepravki = niz[0].prepravke.length;
    niz.forEach(cipela => {
        if(cipela.prepravke.length > maxPrepravki) {
            maxPrepravki = cipela.prepravke.length;
        }
    });
    niz.forEach(cipela => {
        if(cipela.prepravke.length == maxPrepravki) {
            document.body.innerHTML = `Cipela sa najvise prepravki je: ${cipela.naziv}, ${cipela.brojCipele}, ${cipela.prepravke}`;
        }
    });
}
najvisePrepravki(cipele);

let brojPrepravki = (niz, prepravka) => {
    let br = 0;
    niz.forEach(cipela => {
        if(cipela.prepravke.includes(prepravka)) {
            br++;
        }
    });
    return br;
}
brojPrepravki(cipele, 'usij');
console.log(brojPrepravki(cipele, 'prosiri'));

/* zadatak 8
Kreirati klasu Student koja ima atribute: jmbg, ime, prezime, nizOcena i presecnaOcena.
Prilikom kreiranja konstruktora, prosledjuje se jmbg, ime, prezime i nizOcena, a automatski se izračuna prosečna ocena ovog studenta. 
Takođe, voditi računa o tome da svaka od unetih ocena može biti isključivo ceo broj i to 6, 7, 8, 9 ili 10.
JMBG studenta mora biti string koji sadrži 13 karaktera.
Izračunata prosečna ocena se dodeli atributu prosecna ocena.
Napraviti i odgovarajuće getere i setere.
Napraviti metodu ispis koja ispisuje sve podatke o jednom studentu.
Napraviti niz studenata i koristiti ga u predstojećim funkcijama.
-Napraviti funkciju imePrezime kojoj se prosleđuje ime i prezime, a funkcija vraća broj studenata sa tim imenom i prezimenom.
-Napraviti funkciju srednjaOcena koja ispisuje koja je preosečna ocena svih ocena studenata.
-Napraviti funkciju osrednji koja ispisuje studenta koji ima prosek najbliži srednjoj oceni svih studenata.
-Napraviti ocenu najmanjaOcenaNajboljeg koja određuje najboljeg studenta i na ekranu ispisuje njegovu najslabiju ocenu.
-Napisati funkciju najmanjaOcena koja vraća koja je najmanja ocena, uzimajući u obzir ocene svih ocena koje su studenti dobijali.
-Napisati funkciju najcescaOcena koja vraća ocenu koju su studenti najčešće dobijali. 
-Napisati funiciju rodjeniGodine kojoj se prosleđuje godina, a funkcija na ekranu ispisuje sve studente koji su rodjeni te godine. Godinu rođenja preuzeti (odrediti) iz JMBG-a studenta.
*/

class Student {
    constructor(jmbg, i, p, o) {
        this.jmbg = jmbg;
        this.ime = i;
        this.prezime = p;
        this.nizOcena = o;
        this.prosecnaOcena = this.nizOcena;
    }
    set jmbg(jmbg) {
        let unos = false;
        jmbg.split('').forEach(karakter => {
            let k = Number(karakter);
            if(!isNaN(k)) {
                unos = true;
            }
        });
        if(jmbg.length == 13 && unos) {
            this._jmbg = jmbg;
        }
    }
    set ime(i) {
        this._ime = i;
    }
    set prezime(p) {
        this._prezime = p;
    }
    set nizOcena(ocene) {
        let moguceOcene = [6, 7, 8, 9, 10];
        let br = 0;
        ocene.forEach(o => {
            if(moguceOcene.includes(o)) {
                br++;
            }
        });
        if(br == ocene.length) {
            this._nizOcena = ocene;
        } else {
            this._nizOcena = [];
        }
    }
    set prosecnaOcena(o) {
        let sum = 0;
        o.forEach(ocena => {
            sum += ocena;
        });

        this._prosecnaOcena = sum / o.length;
    }

    get jmbg() {
        return this._jmbg;
    }
    get ime() {
        return this._ime;
    }
    get prezime() {
        return this._prezime;
    }
    get nizOcena() {
        return this._nizOcena;
    }
    get prosecnaOcena() {
        return this._prosecnaOcena;
    }

    ispis() {
        console.log(`Ime i prezime studenta: ${this.ime} ${this.prezime}, jmbg: ${this.jmbg}, ocene: ${this.nizOcena}, prosecna ocena: ${this.prosecnaOcena}`);
    }
}

let student1 = new Student('1506000586931', 'Mirko', 'Mirkovic', [7, 7, 10, 10, 9, 9, 8]);
let student2 = new Student('0501999394027', 'Milica', 'Jovic', [7, 9, 10, 10, 6, 8, 8, 9, 10]);
let student3 = new Student('2612000935764', 'Petar', 'Glisic', [8, 8, 10, 9, 7]);

let studenti = [student1, student2, student3];

console.log(student1);

let imePrezime = (ime, prezime) => {
    let br = 0;
    studenti.forEach(student => {
        if(student.ime == ime && student.prezime == prezime) {
            br++;
        }
    });
    return br;
}
console.log(imePrezime('Petar', 'Glisic'));

let srednjaOcena = niz => {
    let sum = 0;
    let br = 0;
    niz.forEach(student => {
        student.nizOcena.forEach(o => {
            sum += o;
        });
        br += student.nizOcena.length;
    });
    return sum / br;
}
console.log(`Srednja ocena svih ocena studenata je: ${srednjaOcena(studenti)}`);

let osrednji = niz => {
    let ukSrOcena = srednjaOcena(niz);
    let minRazlika = 11;
    let prosStudent = niz[0];
    niz.forEach(student => {
        let sum = 0;
        student.nizOcena.forEach(o => {
            sum += o;
        });
        let srOcena = sum / student.nizOcena.length;
        if(Math.abs(ukSrOcena - srOcena) < minRazlika) {
            minRazlika = Math.abs(ukSrOcena - srOcena);
            prosStudent = student;
        }
    });
    prosStudent.ispis();
}
osrednji(studenti);

let najmanjaOcenaNajboljeg = niz => {
    let maxPrOcena = niz[0].prosecnaOcena;
    let studentMaxPrOcena = niz[0];
    let minOcena  = 11;
    niz.forEach(student => {
        if(student.prosecnaOcena > maxPrOcena) {
            maxPrOcena = student.prosecnaOcena;
            studentMaxPrOcena = student;
        }
    });
    studentMaxPrOcena.nizOcena.forEach(o => {
        if(o < minOcena) {
            minOcena = o;
        }
    });
    console.log(`Student sa najboljom prosecnom ocenom je ${studentMaxPrOcena.ime} ${studentMaxPrOcena.prezime}, a njegova najniza ocena je ${minOcena}`);
}
najmanjaOcenaNajboljeg(studenti);

let najmanjaOcena = niz => {
    let minO = niz[0].nizOcena[0];
    niz.forEach(student => {
        student.nizOcena.forEach(o => {
            if(o < minO) {
                minO = o;
            }
        });
    });
    return minO;
}
console.log(`Najmanja ocena medju svim ocenama koje su dobili studenti je: ${najmanjaOcena(studenti)}`);

let najcescaOcena = niz => {
    let br6 = 0;
    let br7 = 0;
    let br8 = 0;
    let br9 = 0;
    let br10 = 0;
    niz.forEach(student => { 
        student.nizOcena.forEach(o => {
            switch (o) {
                case 6: br6++;
                        break;
                case 7: br7++;
                        break;
                case 8: br8++;
                        break;
                case 9: br9++;
                        break;
                case 10: br10++;
                        break;
            }
        });
    });
    let brOcena = [br6, br7, br8, br9, br10];
    let maxbr = br6;
    let indexNajcesce = 0;
    let najcesca = niz[0].nizOcena[0];
    brOcena.forEach((br, i) => {
        if(br > maxbr) {
            maxbr = br;
            indexNajcesce = i;
        }
    });
    return indexNajcesce + 6;
}
console.log(`Najcesca ocena je: ${najcescaOcena(studenti)}`);

let rodjeniGodine = (godina, niz) => {
    let godinaRodjenja = godina.toString().split('').slice(1).join('');
    console.log(godinaRodjenja);
    niz.forEach(student => {
        let godinaJmbg = student.jmbg.toString().split('').slice(4, 7).join('');
        console.log(godinaJmbg);
        if(godinaRodjenja == godinaJmbg) {
            console.log(`Student rodjen ${godina} je : ${student.ime} ${student.prezime}`);
        }
    });
}
rodjeniGodine(2000, studenti);


/* zadatak 9
Kreirati klasu Plivac koja sadrži polja: ime, godina rođenjai najbolji rezultat ove godine.
Napraviti odovarajuće konstruktore, getere i setere.
-Napraviti metodu ispisi koja ispisuje sve podatke o plivaču.
-Napraviti funkciju topTen koja kao rezultat vraća niz od 10 najboljih rezultata ove godine.
-Napraviti funkciju norma kojoj se prosleđuje norma i niz plivača, a funkcija vraća niz onih plivača koji ispunjavaju ovu normu.
-Napisati funkciju normaNajmladji koja treba da na ekranu ispiše sve podatke o najmlađem igraču koji zadovoljava normu koja je zadata prethodnom funkcijom.
*/

class Plivac {
    constructor(i, g, r) {
        this.ime = i; 
        this.godRođenja = g; 
        this.najboljiRezultat = r;
    }
    set ime(i) {
        this._ime = i;
    }
    set godRođenja(god) {
        this._godRodjenja = god;
    }
    set najboljiRezultat(rez) {
        this._najboljiRezultat = rez;
    }
    get ime() {
        return this._ime;
    }
    get godRođenja() {
        return this._godRodjenja;
    }
    get najboljiRezultat() {
        return this._najboljiRezultat;
    }

    ispisi() {
        console.log(`${this.ime}, ${this.godRođenja}, ${this.najboljiRezultat}`);
    }
}

let plivac1 = new Plivac('Milan Milanovic', 1997, '3:26');
let plivac2 = new Plivac('Milena Minic', 2000, '2:56');
let plivac3 = new Plivac('Nevena Ilic', 1999, '3:09');
let plivac4 = new Plivac('Janko Delic', 2003, '2:47');
let plivac5 = new Plivac('Veselin Golubovic', 2005, '2:36');
let plivac6 = new Plivac('Radoje Milic', 2007, '2:58');
let plivac7 = new Plivac('Boris Cvijic', 1998, '2:58');
let plivac8 = new Plivac('Neda Stakic', 1996, '3:27');
let plivac9 = new Plivac('Milenko Beric', 2001, '2:11');
let plivac10 = new Plivac('Sonja Radic', 2002, '2:45');
let plivac11 = new Plivac('Sinisa Peric', 2008, '3:33');
let plivac12 = new Plivac('Dana Belic', 2007, '2:39');

let plivaci = [plivac1, plivac2, plivac3, plivac4, plivac5, plivac6, plivac7, plivac8, plivac9, plivac10, plivac11, plivac12];

let topTen = niz => {
    let nizRezultata = [];
    niz.forEach(plivac => {
        let rez = plivac.najboljiRezultat.split(':');
        let rezSek = Number(rez[0]) * 60 + Number(rez[1]);
        nizRezultata.push(rezSek);
    });
    for(let i = 0; i < nizRezultata.length - 1; i++) {
        for(let j = i + 1; j < nizRezultata.length; j++) {
            if(nizRezultata[i] > nizRezultata[j]) {
                let pomocna  = nizRezultata[i];
                nizRezultata[i] = nizRezultata[j];
                nizRezultata[j] = pomocna;
            }
        }
    }
    return nizRezultata.slice(0, 10);
}
console.log(`Deset najboljih rezultata su: ${topTen(plivaci)}`);

let norma = (norma, niz) => {
    let prekoNorme = [];
    let n = norma.split(':');
    let normaSek = Number(n[0]) * 60 + Number(n[1]);
    niz.forEach(plivac => {
        let rez = plivac.najboljiRezultat.split(':');
        let rezSek = Number(rez[0]) * 60 + Number(rez[1]);
        if(rezSek <= normaSek) {
            prekoNorme.push(plivac);
        }
    });
    return prekoNorme;
}
console.log(norma('3:00', plivaci));

let normaNajmladji = niz => {
    let uNormi = norma('3:05', niz);
    let najmladjiGodiste = uNormi[0].godRođenja;
    let najmladji = uNormi[0];
    uNormi.forEach(plivac => {
        if(plivac.godRođenja > najmladjiGodiste) {
            najmladjiGodiste = plivac.godRođenja;
            najmladji = plivac;
        }
    });
    return najmladji.ispisi();
}
normaNajmladji(plivaci);


/* zadatak 10
Kreirati kalsu Automobil koji ima podatke o maksimalnoj brzini, minimalnoj brzini i trenutnoj brzini. 
Pri stvaranju novog automobila (u konstruktoru) zadajete minimalnu vrednost brzine, maksimalnu vrednost brzine i trenutnu vrednost brzine.
Napraviti odgovarajuće setere i getere.
-Napraviti metodu  ubrzaj kojoj se prosledjuje vrednost za koliko treba uvećati trenutnu brzinu. Ukoliko nije moguće izvršiti toliko ubrzanje, trenutnu brzinu postaviti na maksimalnu vrednost brzine, u suprotnom uvećati za traženu vrednost.
-Napraviti metodu uspori kojoj se prosledjuje vrednost za koliko treba smanjiti trenutnu brzinu. Ukoliko nije moguće izvršiti toliko usporenje, trenutnu brzinu postaviti na minimalnu vrednost brzine, u suprotnom umanjiti brzinu za traženu vrednost.
*/