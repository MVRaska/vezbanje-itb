let datum = new Date();
let dan = datum.getDay();
let sat = datum.getHours();
let min = datum.getMinutes();

let naslov1 = document.getElementById('naslov1');

if(dan == 0 || dan == 6) {
    naslov1.innerHTML = `Radite?
    ITBootcamp vam nudi mogućnost da se okrenete novoj profesiji! (${sat}:${min})`;
} else {
    naslov1.innerHTML = `Odmarate?
    ITBootcamp vam nudi mogućnost da stičete nove veštine! (${sat}:${min})`;
}



