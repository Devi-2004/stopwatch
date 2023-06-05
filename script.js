const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let startTime, intervalid;

//Define the start function that starts Time:

function start(){
    startTime = Date.now();
    intervalid = setInterval(() =>{
        const elapsedTime = Date.now() - startTime;
        const seconds = Math.floor(elapsedTime/1000);
        const minutes = Math.floor(seconds/60);
        const hours = Math.floor(minutes/60);

        //Formate of HH:MM:SS
        const fomattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

        display.textContent = fomattedTime;
    }, 10);
}

function stop(){
    clearInterval(intervalid);
}

function reset(){
    clearInterval(intervalid);
    display.textContent ='00:00:00';
}

 //adding a leading 0 to a number id its less than 10
function pad(number){
    return number < 10 ? '0' + number : number;
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);