const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const div = document.querySelector('#ispis');

let timer;

function uradi() {
    const datum = new Date();
    let h = datum.getHours();
    let m = datum.getMinutes();
    let s = datum.getSeconds();
    s = (s < 10) ? "0" + s : "" + s;
    m = (m < 10) ? "0" + m : "" + m;
    h = (h < 10) ? "0" + h : "" + h;
    div.innerHTML += `${h}:${m}:${s}`;
    timer  = undefined;
}

btn1.addEventListener('click', function(e) {
    e.preventDefault();
    if(timer == undefined) {
        timer = setTimeout(uradi, 2000);
    }
});

btn2.addEventListener('click', function(e) {
    e.preventDefault();
    clearTimeout(timer);
    timer = undefined;
});




function prikaziSat() {
    const datum = new Date();
    let h = datum.getHours();
    let m = datum.getMinutes();
    let s = datum.getSeconds();
    s = (s < 10) ? "0" + s : "" + s;
    m = (m < 10) ? "0" + m : "" + m;
    h = (h < 10) ? "0" + h : "" + h;
    div.innerHTML = `${h}:${m}:${s}`;
    timer  = undefined;
}

let clock;

btn3.addEventListener('click', function(e) {
    e.preventDefault();
    if(clock == undefined) {
        clock = setInterval(prikaziSat, 1000 / 2);
    }
});

btn4.addEventListener('click', function(e) {
    e.preventDefault();
    clearInterval(clock);
    clock = undefined;
});