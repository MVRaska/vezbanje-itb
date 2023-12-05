document.getElementById('d1').innerHTML = 'Ja sam Mary!'
console.log('Pera');
console.log('It \'s ok.')
// literali
console.log(5);
console.log(-5.186);
console.log(3+4);  //7
console.log('3'+'4');  //kontakenacija
console.log('3+4'); //'3+4'
console.log('3+4=', 3+4);
console.log('3+4=' + (3+4));
console.log('3+4=' + 3 + 4);
console.log(true);
console.log(false);

// Promenljive
let x; // deklaracija promenljive (uvodjenje promenljive u program)

console.log(x);

x = 5;
console.log(x);

x = 'Lazar';
console.log(x);

let y = true; // definicija promenljive (deklaracija + dodela vrednosti)
console.log(y);

// const z; //ovo je greska, mora da se inicijalizuje

// z = 8; //ne moze ni ovo

const z = -7.8;

console.log(z);

let age;
console.log(age, age+3); // undefined, NaN-Not a Number

age = null;
console.log(age, age+3); //null, 3

let broj = 3 + 4 * 2; //11
console.log(broj);

broj = (3 + 4) * 2; //14
console.log(broj);

// broj += 6; //20
// console.log(broj);

broj = broj + 6;
console.log(broj);

broj *= 5;  // broj = broj * 5;
console.log(broj);

x = 6;
x++;
console.log(x);

++x;
console.log(x);

x = 6;
console.log(x++); //6 post-increment(prvo se iskoristi se stara vrednost promenljive x, pa se tek onda uveca za 1)
console.log(x); //7
console.log(++x)// 8 pre-increment (prvo se uveca stara vrednost za 1 promenljive x, pa se onda koristi)

// console.log(28/12);
console.log(Math.floor(25 / 12)); //2 (% se cita - po modulu)
console.log(28 % 12); // 4

console.log(24 % 18); //6

x = 5;
y = 3;
console.log(x**y); //125