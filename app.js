var getMinutes = document.getElementById("min");
var getSeconds = document.getElementById("sec");
var getMiliSeconds = document.getElementById("mSec");

var minutes = 0 ;
var seconds = 0 ;
var miliSeconds = 0 ;
var timer;

function startTimer() {
  timer = setInterval(() => {
    miliSeconds++;
    getMiliSeconds.innerHTML = miliSeconds;
    if (miliSeconds >= 100) {
      seconds++;
      getSeconds.innerHTML = seconds;
      miliSeconds = 0;
    } else if (seconds > 5) {
      minutes++;
      getMinutes.innerHTML = minutes;
      seconds = 0;
    }
  }, 10);
}

function stopTimer() {
  clearInterval(timer);
}
function resetTimer() {
  minutes = 0;
  seconds = 0;
  miliSeconds = 0;
  getMinutes.innerHTML = minutes;
  getSeconds.innerHTML = seconds;
  getMiliSeconds.innerHTML = miliSeconds;
}
