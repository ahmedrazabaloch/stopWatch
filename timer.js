var getTimerMinutes = document.getElementById("minutes"),
  getTimerSeconds = document.getElementById("second");

var timer;

var minutes = 5;
var seconds = 5;

function startTimer() {
  startBtn.display = "none";
  stopBtn.display = "inline-block";
  timer = setInterval(() => {
    seconds--;
    getTimerSeconds.innerHTML =  seconds;
    if (seconds <= 0) {
      seconds;
      minutes--;
      getTimerMinutes.innerHTML =  + minutes;
    }
    if (minutes == 0 || seconds == 0) {
      minutes = 0;
      seconds = 0;
      getTimerMinutes.innerHTML = minutes + "0";
      getTimerSeconds.innerHTML = seconds + "0";
      clearInterval(timer);
    }
  }, 1000);
}

// function stopTimer() {
//   startBtn.display = "inline-block";
//   stopBtn.display = "none";
//   clearInterval(timer);
// }

// function fullScreen() {
//   document.documentElement.requestFullscreen();
//   container.marginTop = "16%";
//   full.display = "none";
//   exit.display = "inline-block";
// }
// function exitScreen() {
//   document.exitFullscreen();
//   container.marginTop = "8%";
//   full.display = "inline-block";
//   exit.display = "none";
// }
