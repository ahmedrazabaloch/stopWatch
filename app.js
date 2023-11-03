var getMinutes = document.getElementById("min"),
  getSeconds = document.getElementById("sec"),
  getMiliSeconds = document.getElementById("mSec");

var startBtn = document.getElementById("start").style,
  stopBtn = document.getElementById("stop").style,
  container = document.querySelector(".container").style,
  resetBtn = document.getElementById("reset");

var minutes = 0,
  seconds = 0,
  miliSeconds = 0,
  timer;

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
    } else if (seconds >= 60) {
      minutes++;
      getMinutes.innerHTML = minutes + `<span>m</span>`;
      seconds = 0;
    }
  }, 10);
}

function stopTimer() {
  startBtn.display = "inline-block";
  stopBtn.display = "none";
  clearInterval(timer);
}
function resetTimer() {
  stopTimer();
  seconds = 0;
  minutes = 0;
  miliSeconds = 0;
  getMinutes.innerHTML = minutes + "0" + `<span>m</span>`;
  getSeconds.innerHTML = seconds + "0" + `<span>s</span>`;
  getMiliSeconds.innerHTML = miliSeconds + "0" + `<span>ms</span>`;
}

var full = document.getElementById("full").style;
var exit = document.getElementById("exit").style;

function fullScreen() {
  document.documentElement.requestFullscreen();
  container.marginTop = "16%";

  full.display = "none";
  exit.display = "inline-block";
}
function exitScreen() {
  document.exitFullscreen();
  container.marginTop = "8%";
  full.display = "inline-block";
  exit.display = "none";
}
