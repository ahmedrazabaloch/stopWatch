var getMinutes = document.getElementById("min"),
  getSeconds = document.getElementById("sec"),
  getMiliSeconds = document.getElementById("mSec");

var startBtn = document.getElementById("start").style;
var stopBtn = document.getElementById("stop").style;
var resetBtn = document.getElementById("reset");

var minutes = 0;
var seconds = 0;
var miliSeconds = 0;
var timer;

function startTimer() {
  startBtn.display = "none";
  stopBtn.display = "inline-block";
  timer = setInterval(() => {
    miliSeconds++;
    getMiliSeconds.innerHTML = miliSeconds + `<span>ms</span>`;
    if (miliSeconds >= 100) {
      seconds++;
      getSeconds.innerHTML = seconds + `<span>s</span>`;
      miliSeconds = 0;
    } else if (seconds > 5) {
      minutes++;
      getMinutes.innerHTML = minutes + `<span>m</span>`;
      seconds = 0;
    }
  }, 10);
}

function stopTimer() {
  resetBtn.disabled = false;
  startBtn.display = "inline-block";
  stopBtn.display = "none";
  clearInterval(timer);
}
function resetTimer() {
  seconds = 0;
  minutes = 0;
  miliSeconds = 0;
  getMinutes.innerHTML = minutes + `<span>m</span>`;
  getSeconds.innerHTML = seconds + `<span>s</span>`;
  getMiliSeconds.innerHTML = miliSeconds + `<span>ms</span>`;
  resetBtn.disabled = true;
}
function fullScreen() {
  document.documentElement.requestFullscreen();
}
