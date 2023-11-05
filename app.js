var getMinutes = document.getElementById("min"),
  getSeconds = document.getElementById("sec"),
  getMiliSeconds = document.getElementById("mSec");

var startBtn = document.getElementById("start").style,
  stopBtn = document.getElementById("stop").style,
  container = document.querySelector(".container").style,
  resetBtn = document.getElementById("reset");

var full = document.getElementById("full").style;
var exit = document.getElementById("exit").style;

var stopWatchTimer = document.querySelector(".watch").style;
var CountdownTimer = document.querySelector(".timer").style;

// >>>>>> Redirecting & Stying Heading Start<<<<<<

var timerHeaders = document.getElementById("timerHeader").style;
var watchHeaders = document.getElementById("watchHeader").style;

function timerHeader() {
  stopWatchTimer.display = "none";
  CountdownTimer.display = "block";
  timerHeaders.borderBottom = "2px solid #1a73e8";
  timerHeaders.color = "#1a73e8";
  watchHeaders.borderBottom = "2px solid #fff";
  watchHeaders.color = "#000";
}

function watchHeader() {
  stopWatchTimer.display = "block";
  CountdownTimer.display = "none";
  watchHeaders.borderBottom = "2px solid #1a73e8";
  watchHeaders.color = "#1a73e8";
  timerHeaders.borderBottom = "2px solid #fff";
  timerHeaders.color = "#000";
}

// >>>>>> Stop Watch <<<<<<

var minutes = 0,
  seconds = 0,
  miliSeconds = 0,
  stopWatch;

function startStopWach() {
  startBtn.display = "none";
  stopBtn.display = "inline-block";
  stopWatch = setInterval(() => {
    miliSeconds++;
    getMiliSeconds.innerHTML = miliSeconds;
    if (miliSeconds >= 100) {
      seconds++;
      getSeconds.innerHTML = seconds + `<span>s</span>`;
      miliSeconds = 0;
    } else if (seconds >= 10) {
      seconds = 0;
      minutes++;
      getMinutes.innerHTML = minutes + `<span>m</span>`;
    }
  }, 10);
}

// >>>>>> Stop Watch Pause <<<<<<

function stopStopWatch() {
  startBtn.display = "inline-block";
  stopBtn.display = "none";
  clearInterval(stopWatch);
}

// >>>>>> Stop Watch Reset <<<<<<

function resetStopWatch() {
  stopStopWatch();
  seconds = 0;
  minutes = 0;
  miliSeconds = 0;
  getMinutes.innerHTML = minutes + "0" + `<span>m</span>`;
  getSeconds.innerHTML = seconds + "0" + `<span>s</span>`;
  getMiliSeconds.innerHTML = miliSeconds + "0";
}

// >>>>>> CountDown Timer Start <<<<<<

var TimerDisplay = document.getElementById("timerDisplay");

var timerMinutes = "0" + 5,
  timerSeconds = 59,
  SetTimer;

function startTimer() {
  startBtn.display = "none";
  stopBtn.display = "inline-block";
  SetTimer = setInterval(() => {
    timerSeconds--;
    if (timerSeconds < 10) {
      TimerDisplay.innerHTML = `${timerMinutes}${":"}${0}${timerSeconds}`;
    } else {
      TimerDisplay.innerHTML = `${timerMinutes}${":"}${timerSeconds}`;
    }
    if (timerSeconds == 0) {
      timerSeconds = 59;
      timerMinutes--;
      TimerDisplay.innerHTML = `${timerMinutes}${":"}${timerSeconds}`;
    } else if (timerMinutes === 0) {
      timerSeconds = 0;
      timerMinutes = 0;
      TimerDisplay.innerHTML = `${"0" + timerMinutes}${":"}${
        "0" + timerSeconds
      }`;
      clearInterval(SetTimer);
      console.log("stop");
    }
  }, 1000);
}

// >>>>>> Full Screen <<<<<<

function fullScreen() {
  document.documentElement.requestFullscreen();
  container.marginTop = "16%";
  full.display = "none";
  exit.display = "inline-block";
}

// >>>>>> Exit Full Screen <<<<<<

function exitScreen() {
  document.exitFullscreen();
  container.marginTop = "8%";
  full.display = "inline-block";
  exit.display = "none";
}
