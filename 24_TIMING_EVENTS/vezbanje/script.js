const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');
let input = document.querySelector('input');

let timer;
let sum = 0;

btnStart.addEventListener('click', (e) => {
    if(timer == undefined) {    
        timer = setInterval(() => {
            sum ++;
            input.value = sum;
        }, 1000);
    }
});

btnStop.addEventListener('click', (e) => {
    clearInterval(timer);
    timer = undefined;
});

