var getTimerMinutes = document.getElementById("minutes"),
  getTimerSeconds = document.getElementById("second");

var timer;

getTimerMinutes.addEventListener("click", () => {
  getTimerMinutes.value = "";
  getTimerSeconds.value = "";
});

var timerMinutes = getTimerMinutes.value,
  timerSecond = getTimerSeconds.value;

function startTimer() {
  startBtn.display = "none";
  stopBtn.display = "inline-block";
  timer = setInterval(() => {
    if (!timerMinutes && !timerSecond) {
      console.log("please add a value to start the timer");
    } else {
      getTimerSeconds.innerText = timerSecond;
      getTimerMinutes.innerText = timerMinutes;
      timerSecond--;
      if (timerSecond < 0) {
        timerMinutes--;
        timerSecond = 0;
      }
      console.log(timerMinutes, timerSecond);
    }
  }, 1000);
}
function stopTimer() {
  startBtn.display = "inline-block";
  stopBtn.display = "none";
  clearInterval(timer);
}

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
