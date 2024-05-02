class Osoba {
    constructor(i, p, g) {
        this.ime = i;
        this.prezime = p;
        this.godinaRodjenja = g;
    }

    set ime(i) {
        this._ime = i;
    }
    set prezime(p) {
        this._prezime = p;
    }
    set godinaRodjenja(g) {
        this._godinaRodjenja = g;
    }

    get ime() {
        return this._ime;
    }
    get prezime() {
        return this._prezime;
    }
    get godinaRodjenja() {
        return this._godinaRodjenja;
    }

    ispisiOsoba() {
        console.log(`Osoba je: ${this.ime} ${this.prezime} ${godinaRodjenja}`);
    }
}


class Zaposleni extends Osoba {
    constructor(i, p, g, pl, poz) {
        super(i, p, g);
        this.plata = pl;
        this.pozicija = poz;
    }

    set plata(pl) {
        this._plata = pl;
    }
    set pozicija(poz) {
        this._pozicija = poz;
    }

    get plata() {
        return this._plata;
    }
    get pozicija() {
        return this._pozicija;
    }

    ispisiZaposleni() {
        console.log(`Zaposleni ${this.ime} ${this.prezime} ima platu ${this.plata}din i radi na poziciji ${this.pozicija}`);
    }
}

let z1 = new Zaposleni('Mika', 'Mikic', 1965, 60000, 'ekonomista');

function ekonomista(z) {
    if(z.pozicija == 'ekonomista') {
        console.log('Zaposleni je ekonomista');
    }
}
ekonomista(z1);

let z2 = new Zaposleni('Pera', 'Peric', 1974, 60000, 'dizajner');
let z3 = new Zaposleni('Mara', 'Maric', 1966, 178650, 'inzenjer');
let radnici = [z1, z2, z3];

function prosekPlate(niz) {
    let sum = 0;
    for(let i = 0; i < niz.length; i++) {
        sum += niz[i].plata;
    }
    return sum / niz.length;
}
console.log(prosekPlate(radnici));

function natprosecnaPlata(z) {
    if(z.plata > prosekPlate(radnici)) {
        return true;
    }
    return false;
}
console.log(natprosecnaPlata(z3));