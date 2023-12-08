const timeContainer = document.getElementById("timerContatiner");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
let intervalId= null;
let seconds = 0;

function timer(){
    seconds++;

    let sec = seconds % 60;
    let hrs = Math.floor(seconds / 3600);
    let min = Math.floor((seconds - (hrs * 3600))/60);

    if(sec < 10) sec = '0' + sec;
    if(min < 10) min = '0' + min;
    if(hrs < 10) hrs = '0' + hrs;

    timeContainer.innerHTML = `${hrs}:${min}:${sec}`;   
}

function startRunningTime(){
    if(intervalId) return;

    intervalId = setInterval(timer, 1000);
}

startBtn.addEventListener('click', startRunningTime);
stopBtn.addEventListener('click', () => {
    if(intervalId !== null){
        clearInterval(intervalId);
    }
    intervalId = null;
});
resetBtn.addEventListener('click', () => {
    timeContainer.innerHTML = `00:00:00`;
    if(intervalId !== null){
        clearInterval(intervalId);
    }
    intervalId = null;
    seconds = 0;
});

