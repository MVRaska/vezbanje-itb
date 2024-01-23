class Auto {
    constructor(m, b, k) {
        this.marka = m;
        this.boja = b;
        this.imaKrov = k;
    }

    //kostruktor radi 2 stvari:
    //1. kaze koliko svojstava ce imati svaki obj te klase
    //(polja je potrebno da se nazivaju sa pocetnom donjom crtom _)
    //2. postavlja vrednosti za ta svojstva

    sviraj() {
        console.log(`Auto marke ${this.marka} svira: Beep! Beep!`);
    }

    //geteri i seteri
    //za svako polje moze da ima po jedan geter i po jedan seter
    //geter dohvata vrednost polja
    //seter postavlja vrednost polja

    //setter
    set marka(m) {
        if(m.length > 0) {
            this._marka = m;
        } else {
            this._marka = 'skoda';
        }
        console.log('Pozvan je seter za polje _marka');
    }

    set boja(b) {
        if(b.length > 0) {
            this._boja = b;
        } else {
            this._boja = 'crna';
        }
    }

    set imaKrov(k) {
        if(k === true || k === false) {
            this._imaKrov = k
        } else {
            this._imaKrov = false;
        }
    }

    //geter

    get marka() {
            return this._marka;
    }

    get boja() {
            return this._boja;
    }

    get imaKrov() {
            return this._imaKrov;
    }
}

export default Auto;