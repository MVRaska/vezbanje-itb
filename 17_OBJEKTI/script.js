let blog1 = {
    title: 'HTML',
    content: 'Osnovni HTML tagovi',
    author: 'Jelena',
    like: 10,
    comment: true
};
console.log(blog1);
console.log(typeof blog1);
console.log(typeof 'N');


// ispis odredjene osobine

console.log(blog1.title);
console.log(blog1.author);
console.log(blog1['content']);  // bitno! . ili ['']


// izmena odredjene osobine

blog1.content = 'HTML tabele';
console.log(blog1.content);
console.log(blog1);
blog1['content'] = 'HTML liste';
console.log(blog1.content);
blog1.like = 7;
blog1.comment = false;

/////////////////////////

let user1 = {
    user: 'Pera ilic',
    age: 40,
    nextAge: this.age + 1,
    blog: ['Naredba grananja', 'Nizovi', 'Objekti'],
    login: function() {
        console.log('Ulogovani ste');
    },
    logBlogs: function() {
        this.blog.forEach(el => {
            console.log(el);
        })
    },
    hello: function() {
        return `Hello ${this.user}`;
    }
};
user1.login();
user1.logBlogs();
console.log(user1.hello());
console.log(user1);

user1.blog.forEach(blog => {
    document.write(`<p>${blog}</p>`)
});

//////////////////////////////

let dan1 = {
    datum: '2023/12/22',
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [3, 4, 6, 7, 6, 4],
    //1.
    prosecna: function() {
        let sum = 0;
        this.temperature.forEach(t => {
            sum += t;
        });
        return sum / this.temperature.length;
    },
    //2.
    brNatprosecnih: function() {
        let br =0;
        let pros = this.prosecna();
        // this.temperature.forEach(t => {
        //     if(t > pros) {
        //         br++;
        //     }
        // });
        for(let i = 0; i < this.temperature.length; i++) {
            if(this.temperature[i] > pros) {
                br++;
            }
        }
        return br;
    },

    // 3.
    brMaxTemp: function() {
        let max = this.temperature[0];
        let br = 0;
        for(let i = 1; i < this.temperature.length; i++) {
            if(this.temperature[i] > max) {
                max = this.temperature[i];
            }
        }
        this.temperature.forEach(t => {
            if(t == max) {
                br++;
            }
        });
        return br;
    },

    // 4.
    tempIzmedju: function(t1, t2) {
        let br = 0;
        for(let i = 0; i < this.temperature.length; i++) {
            if(t1 > t2 && this.temperature[i] > t2 && this.temperature[i] < t1) {
                br++;
            } else if(t2 > t1 && this.temperature[i] > t1 && this.temperature[i] < t2) {
                br++;
            } else if(t1 == t2 && this.temperature[i] == t1) {
                br++;
            }
        }
        return br;
    },

    //     let brMerenja = 0;

    //     if(t1 > t2) {
    //         let pom = t1;
    //         t1 = t2;
    //         t2 = pom;
    //     }

    //     this.temperature.forEach(e => {
    //         if(t1 < e && e < t2) {
    //             brMerenja++;
    //         }
    //     });   
    //     return brMerenja;
    // }

    // 5.
    iznadProseka: function() {
        let br1 = 0;
        let br2 = 0;
        let prosek = this.prosecna();
        for(let i = 0; i < this.temperature.length; i++) {
            if(this.temperature[i] > prosek) {
                br1++;
            } else {
                br2++;
            }
        };
        return br1 > br2 ? true : false;

        // drugi nacin
        /*
        let brDana = this.brNatprosecnih();
        return (brDana > this.temperature.length/2) ? true : false;
        */
    },

    // 6.
    leden: function() {
        let br = 0;
        for(let i = 0; i < this.temperature.length; i++) {
            if(this.temperature[i] > 0) {
                break;
            } else if(this.temperature[i] < 0) {
                br++;
            }
        }
        return br == this.temperature.length ? true : false;
    },

    /*
        let br = 0;
        for(let i = 0; i < this.temperature.length; i++) {
            if(this.temperature[i] > 0) {
                return false;
            }
        }
        return true;
    }
    */

    //drugi nacin
    /*let ledenDan = true;
    this.temperature.forEach(t => {
        if(t > 0) {
            ledenDan = false;
        }
    })
    return ledenDan;
    */

    // 8.
    nepovoljan: function() {
        for(let i = 0; i < this.temperature.length - 1; i++) {
            if(this.temperature[i] - this.temperature[i + 1] > 8) {
                return true;
            }
        }
        return false;
    }
};
console.log(`Prosecna temperatura je : ${dan1.prosecna()}`);
console.log(`Broj natprosecnih merenja u danu je: ${dan1.brNatprosecnih()}`);

console.log(`Broj merenja sa maksimalnom temperaturom je: ${dan1.brMaxTemp()}`);

console.log(`Broj merenja koja su izmedju 3 i 7 stepeni je: ${dan1.tempIzmedju(7, 4)}`);

//Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 
//Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.

console.log(`Broj merenja u toku dana vecinom je bio iznad proseka: ${dan1.iznadProseka()}`);
console.log(`Dan je bio leden: ${dan1.leden()}`);
console.log(`Dan je nepovoljan: ${dan1.nepovoljan()}`);


//////////////////////////////////////////////////

// vezba

// zadatak 1
//Objekat Student sadrži njegovo ime (string), prezime (string), godinu studija (ceo broj između 1 i 5), kao i niz ocena do sada položenih ispita (niz celih brojeva, gde je svaki od brojeva u intervalu od 6 do 10).

let student = {
    ime: 'Milan',
    prezime: 'Peric',
    godStudija: 3,
    ocene: [10, 6, 6, 10, 10, 10, 6, 10, 9],

    // 1.
    prosecan: function() {
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] == 6 || this.ocene[i] == 10) {
                return  false;
            }
        }
        return ture;
    },

    // 2.
    //Napisati metodu koja vraća true ukoliko je student ekstra, u suprotnm vraća false. Student je “ekstra” ako je polagao ispite samo sa devetkama i desetkama, i pri tome je broj desetki barem duplo veći od broja devetki. 

    extra: function() {
        let ekstra;
        let brOcena = this.ocene.length;
        let br9 = 0;
        let br10 = 0;
        this.ocene.forEach(o => {
            if(o != 9 && o != 10) {
                ekstra = false;
            } else if(o == 9) {
                br9++;
            } else if(o == 10) {
                br10++;
            }
        });
        if(br9 + br10 == brOcena && 2 * br9 < br10) {
            ekstra = true;
        }
        return ekstra;
    },

    // 3.
    //Napisati metodu koja vraća true ukoliko student kida, u suprotnm vraća false. Student “kida” ako je polagao ispite samo sa devetkama i desetkama, a broj devetki je manji od godine studije na kojoj se student nalazi. 

    kida: function() {
        let k = true;
        let br9 = 0;
        this.ocene.forEach(o => {
            if(o != 9 && o != 10) {
                k = false;
            } else if(o == 9) {
                br9++;
            }
        });
        if(br9 >= this.godStudija) {
            k = false;
        }
        return k;
    },
    
    // 4.
    //Napisati metodu koja vraća true ukoliko student razbija, u suprotnm vraća false.  Student “razbija” ako je sve ispite položio sa ocenom deset. Pri tome, broj desetki ne sme biti manji od broja 5 * (godina_studija - 1). (Dakle, ne može student na trećoj godini da razbija ako je položio jedan ispit, kao što nijedan student prve godine još ne može da razbija, jer još nije položio sve ispite iz tekuće godine)

    razbija: function() {
        let razb = true;
        let brOcena = this.ocene.length;
        this.ocene.forEach(o => {
            if(o != 10) {
                razb = false;
            } else if(brOcena < 5 * student.godStudija) {
                razb = false;
            } 
        });
        if(student.godStudija == 1) {
            razb = false;
        }
        return razb;
    },

    // 5.
    //Napisati metodu koja vraća true ukoliko je student aljkav, u suprotnm vraća false.  Student je “aljkav” ako nijedan ispit nije položio sa ocenom većom od 7.

    aljkav: function() {
        let aljk = true;
        this.ocene.forEach(o => {
            if(o > 7) {
                aljk = false;
            }
        });
        return aljk;
    },

    // 6.
    //Napisati metodu koja vraća true ukoliko se student bruka, u suprotnom vraća false.   Student se “bruka” ako nije student prve godine, a broj položenih ispita je manji od broja 3 * (godina_studija - 1), i pri tome nijedna ocena nije veća od 7. 

    bruka: function() {
        let brPolozenih = this. ocene.length;
        let bruk = false;
        let veceOd7 = false;
        this.ocene.forEach(o => {
            if(o > 7) {
                veceOd7 = true;
            }
        });
        if(student.godStudija != 1 && brPolozenih < 3 * (this.godStudija - 1) && veceOd7 == false) {
            bruk = true;
        }
        return bruk;
    },

    // 7.
    //Napisati metodu koja vraća true ukoliko je student kolekcionar, u suprotnm vraća false. Student je kolekcionar ocena, ukoliko ima svaku od ocena bar jednom upisanu (bar jednu šesticu, sedmicu, osmicu, devetku i desetku).

    kolekcionar: function() {
        let kolekt6 = false;
        let kolekt7 = false;
        let kolekt8 = false;
        let kolekt9 = false;
        let kolekt10 = false;

        this.ocene.forEach(o => {
            if(o == 6) {
                kolekt6 = true;
            } else if(o == 7) {
                kolekt7 = true;
            } else if(o == 8) {
                kolekt8 = true;
            } else if(o == 9) {
                kolekt9 = true;
            } else {
                kolekt10 = true;
            }
        });
       
        return kolekt6 && kolekt7 && kolekt8 && kolekt9 && kolekt10;
    },

    // 8.
    //Napisati metodu koja vraća true ukoliko je student skoro pa savršen, u suprotnm vraća false. Student je skoro pa savršen, ukoliko ima više od 90% desetki među svojim ocenama i pri tome ima više od 8 ocena.

    skoroSavrsen: function() {
        let skorosav = false;
        let br10 = 0;
        let brOcena = this.ocene.length;
        this.ocene.forEach(o => {
            if(o == 10) {
                br10++;
            }
        });
        if(br10 > 0.9 * brOcena && brOcena > 8) {
            skorosav = true;
        }
        return skorosav;
    },

    // 9.
    //Napisati metodu koja vraća true ukoliko student napreduje,  u suprotnom vraća false. Student napreduje ukoliko mu je prosek prve polovine ocena niži od proseka druge polovine ocena. Ukoliko student ima neparan broj ocena, računajte da je manje ocena u prvoj polovini niza.

    napredak: function() {
        let napr = false;
        let sum1 = 0;
        let sum2 = 0;
        let br1 = 0;
        let br2 = 0;
        let brOcena = this.ocene.length;
        
        for(let i = 0; i < brOcena; i++) {
            if(i < Math.floor(brOcena / 2)) {
                sum1 += this.ocene[i];
                br1++;
            } else {
                sum2 += this.ocene[i];
                br2++;
            }    
        }
        if(sum1 / br1 < sum2 / br2) {
            napr = true;
        }
        return napr;
    },

    // 9. 
    //Napisati metodu koja vraća najveću razliku između neke dve uzastopne ocene.

    najvecaRazlUzastopnih: function() {
        let najvrazlika = 0;
        for(let i = 1; i < this.ocene.length - 1; i++) {
            if(Math.abs(this.ocene[i] - this.ocene[i + 1]) > najvrazlika) {
                najvrazlika = Math.abs(this.ocene[i] - this.ocene[1]);
            }
        }
        return najvrazlika;
    },

    // 10.
    //Napisati metodu koja vraća najveću razliku između ocena studenta.
    
    // najvecaRazlikaOcena: function() {
    //     let najrazl = 0;
    //     this.ocene.forEach( o => {
    //         this.ocene.forEach(o1 => {
    //             if(Math.abs(o - o1) > najrazl) {
    //                 najrazl = Math.abs(o - o1);
    //             }
    //         });
    //     });
    //     return najrazl;
    // }

    najvecaRazlikaOcena: function() {
        let maxOcena = 6;
        let minOcena = 10;
        this.ocene.forEach(o => {
            if(o > maxOcena) {
                maxOcena = o;
            }
            if(o < minOcena) {
                minOcena = o;
            }
        });
        return maxOcena - minOcena;
    },

    // 10.
    //Napisati metodu koja vraća najčešću ocenu koju je student dobijao.

    najcescaOcena: function() {
        // let br6 = 0;
        // let br7 = 0;
        // let br8 = 0;
        // let br9 = 0;
        // let br10 = 0;
        // let najcesca = 10;
        // this.ocene.forEach(o => {
        //     if(o == 6) {
        //         br6++;
        //     } else if(o == 7) {
        //         br7++;
        //     } else if(o == 8) {
        //         br8++;
        //     } else if(o == 9) {
        //         br9++;
        //     } else {
        //         br10++;
        //     }
        // });

        // if(br6 > br7 && br6 > br8 && br6 > br9 && br6 > br10) {
        //     najcesca = 6;
        // }
        // if(br7 > br7 && br7 > br8 && br7 > br9 && br7 > br10) {
        //     najcesca = 7;
        // }
        // if(br8 > br6 && br8 > br7 && br8 > br9 && br8 > br10) {
        //     najcesca = 8;
        // }
        // if(br9 > br6 && br9 > br7 && br9 > br8 && br9 > br10) {
        //     najcesca = 9;
        // }
        // return najcesca;

        let maxBr = 0;
        let najcesca = 0;

        this.ocene.forEach(o => {
            let brLok = 0;
            this.ocene.forEach(o1 => {
                if(o == o1) {
                    brLok++;
                }
            });
            if(brLok > maxBr) {
                maxBr = brLok;
                najcesca = o;
            }
        });
        return najcesca;
    },

    // 11.
    //Napisati metodu kojoj se prosleđuje broj n, a ona vraća prosečnu ocenu za poslednjih n ispita koje je student položio (podrazumevati da je broj n manji od dužine niza ocena).

    prosecnaPoslednjihN: function(n) {
        let poslednjihN = this.ocene.length - n;
        let sum = 0;
        for(let i = poslednjihN; i < this.ocene.length; i++) {
            sum += this.ocene[i];
        }
        return sum / n;
    },

    // 12.
    //Napisati metodu koja vraća true ukoliko je student nepredvidiv, u suprotnom vraća false. Student je nepredvidiv, ukoliko ima više od 5 ponavljanja situacije da se uzastopne ocene razlikuju za više od 2.

    nepredvidiv: function() {
        let brojac = 0;

        for(let i = 0; i < this.ocene.length - 1; i++) {
            if(Math.abs(this.ocene[i] - this.ocene[i + 1]) > 2) {
                brojac++;
            }
        }
        return brojac > 5;
    },

    // 13.
    //Napisati metodu koja vraća true ukoliko je student veoma nepredvidiv, u suprotnom vraća falase. Student je veoma nepredvidiv, ukoliko mu se sve uzastopne ocene razlikuju za više od 2.

    veomaNepredvidljiv: function() {
        for(let i = 0; i < this.ocene.length; i++) {
            if(Math.abs(this.ocene[i] - this.ocene[i + 1]) <= 2) {
                return false
            }
        }
        return true;
    },

    // 14.
    //Napisati metodu koja vraća true ukoliko je student čudak, u suprotnom vraća false. Student je čudak, ukoliko ima samo desetke i šestice.

    cudak: function() {
        let cudno = true;
        this.ocene.forEach(o => {
            if(o != 6 && o != 10) {
                cudno = false;
            }
        });
        return cudno;
    }   
};
console.log(`Student je prosecan: ${student.prosecan()}`);
console.log(`Student je ekstra: ${student.extra()}`);
console.log(`Student kida: ${student.kida()}`);
console.log(`Student razbija: ${student.razbija()}`);
console.log(`Student je aljkav: ${student.aljkav()}`);
console.log(`Student se bruka: ${student.bruka()}`);
console.log(`Student je kolekcionar: ${student.kolekcionar()}`);
console.log(`Student je skoro pa savrsen: ${student.skoroSavrsen()}`);
console.log(`Student napreduje: ${student.napredak()}`);
console.log(`Najveca razlika izmedju dve uzastopne ocene je: ${student.najvecaRazlUzastopnih()}`);
console.log(`Najveca razlika izmedju dve ocene je: ${student.najvecaRazlikaOcena()}`);
console.log(`Najcesca ocena je: ${student.najcescaOcena()}`);
console.log(`Za uneti broj poslednjih ocena prosek je: ${student.prosecnaPoslednjihN(5)}`);
console.log(`Student je nepredvidljiv: ${student.nepredvidiv()}`);
console.log(`Student je veoma nepredvidljiv: ${student.veomaNepredvidljiv()}`);
console.log(`Student je cudak: ${student.cudak()}`);


// zadatak 2
/*Sa niškog aerodroma u toku jednog dana polaze letovi ka različitim gradovima. 
Napraviti objekat Let koji sadrži destinaciju letenja (string), broj putnika na letu (ceo broj), mesta na letu (ceo broj).
Let je bio isplativ, ukoliko je više od polovine leta bilo popunjeno (broj putnika na letu bio je veći od polovine mesta na letu). Napisati metodu koja vraća true ukoliko je let bio isplativ, u suprotnom vraća false.  */

let Let = {
    destinacija: 'Sidnej',
    brojPutnika: 70,
    brojMesta: 150,
    isplativ: function() {
        return this.brojPutnika > this.brojMesta / 2;
    }

};
console.log(`Let je isplativ: ${Let.isplativ()}`);

