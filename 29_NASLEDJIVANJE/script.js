console.log('nasledjivanje');

import { Vozilo } from "./klase/vozilo.js";
import { Automobil } from "./klase/automobil.js";
import { Kamion } from "./klase/kamion.js";

let v1 = new Vozilo('vazdusno', 'bela');
v1.ispisiVozilo();
v1.vozi();

let a1 = new Automobil('drumsko', 'teget', 'RA-036-RA');
a1.ispisiVozilo();
a1.ispisiAutomobil();

//v1.ispisiAutomobil(); //ovde se javlja greska jer roditelj ne moze pristupiti poljima i metodama deteta (on ne nasledjuje dete)

let k1 = new Kamion('drumsko', 'crvena', 70);
console.log(k1.boja);
k1.vozi();
k1.voziKamion();