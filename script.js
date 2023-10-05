let timerdisplay = document.querySelector('.timerdisplay');
let stopbtn = document.getElementById('stop');  
let startbtn = document.getElementById('start');
let resetbtn = document.getElementById('reset');

let msec = 0;
let secs = 0;
let mins = 0;
let running = false;
let timerId = null;

startbtn.addEventListener('click', function () {
    if (!running) {
        timerId = setInterval(startTimer, 10);
        running = true;
    }
});

stopbtn.addEventListener('click', function () {
    clearInterval(timerId);
    running = false;
});

resetbtn.addEventListener('click', function () {
    clearInterval(timerId);
    running = false;
    timerdisplay.innerHTML = '00 : 00 : 00';
    msec = 0;
    secs = 0;
    mins = 0;
});

function startTimer() {
    msec++;
    if (msec === 100) {
        msec = 0;
        secs++;
        if (secs === 60) {
            secs = 0;
            mins++;
        }
    }
    let msecString = msec < 10 ? `0${msec}` : `${msec}`;
    let secString = secs < 10 ? `0${secs}` : `${secs}`;
    let minsString = mins < 10 ? `0${mins}` : `${mins}`;
    timerdisplay.innerHTML = `${minsString} : ${secString} : ${msecString}`;
}
