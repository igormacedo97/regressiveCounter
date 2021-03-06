let minutes, seconds, counterInterval = undefined;

const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const loadingEl = document.getElementById('loading');

resetCounter();


function updateCounterEl(){
  minutesEl.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  secondsEl.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}

function startCounter() {

  loadingEl.classList.add('loading--active');

  if(counterInterval) return;

  counterInterval = setInterval(() => { 

    const timeOver = !seconds && !minutes; // !seconds = true AND !minutes = false;
    const secondsOver = !seconds; //true

    if(timeOver) return destroyInterval();

    if(secondsOver) {
      seconds = 59;
      --minutes;
      updateCounterEl();
      return;
    }

    --seconds; 
    updateCounterEl();

  }, 1000)
}

function pauseCounter() {
  loadingEl.classList.remove('loading--active')
  destroyInterval();
}

function destroyInterval() {
  clearInterval(counterInterval);
  counterInterval = undefined;
}

function resetCounter(){

  loadingEl.classList.remove('loading--active');

  destroyInterval();
  minutes = 25;
  seconds = 00;
  updateCounterEl();
}