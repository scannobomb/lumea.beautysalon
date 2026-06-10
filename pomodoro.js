let startBtn = document.getElementById("startBtn")
let pauseBtn = document.getElementById("pauseBtn")
let timerElem = document.getElementById("timer")

let tomato = {
    seconds: 4898443, // 56 giorni 20 ore 30 min 43 sec
    running: false,
    timer: null
}

function showTimer() {

    let days = Math.floor(tomato.seconds / (24 * 3600))
    let hours = Math.floor((tomato.seconds % (24 * 3600)) / 3600)
    let mins = Math.floor((tomato.seconds % 3600) / 60)
    let secs = tomato.seconds % 60

    if (hours < 10) hours = "0" + hours
    if (mins < 10) mins = "0" + mins
    if (secs < 10) secs = "0" + secs

    timerElem.textContent =
        days + "gg " +
        hours + "h " +
        mins + " min " +
        secs + " sec"
}

function tick() {
    tomato.seconds--;
    showTimer();
}

function start() {
    if (!tomato.running) {
        tomato.timer = setInterval(tick, 1000);
        tomato.running = true;
    }
}

function pause() {
    clearInterval(tomato.timer)
    tomato.running = false
    showTimer()
}

pauseBtn.addEventListener("click", pause)
startBtn.addEventListener("click", start)

// mostra subito il timer all'avvio
showTimer();