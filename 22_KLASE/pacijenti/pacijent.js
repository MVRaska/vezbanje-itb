class Pacijent {
    constructor(i, v, t) {
        this.ime = i;
        this.visina = v;
        this.tezina = t;
    }

    set ime(i) {
        this._ime = i;
    }

    set visina(v) {
        if(v > 0 && v < 250) {
            this._visina = v;
        } else {
            this._visina = 170;
        }
    }

    set tezina(tez) {
        if(tez > 0 && tez < 550) {
            this._tezina = tez;
        } else {
            this._tezina = 70;
        }
    }

    get ime() {
        return this._ime;
    }

    get visina() {
        return this._visina;
    }

    get tezina() {
        return this._tezina;
    }
    stampaj() {
        console.log(`Pacijent je: ${this.ime}, ${this.visina}, ${this.tezina}`);
    }

    bmi() {
        return this.tezina / (this.visina / 100) ** 2;
    }

    kritican() {
        return (this.bmi() < 15 || this.bmi() > 40)
    }
}

export default Pacijent;