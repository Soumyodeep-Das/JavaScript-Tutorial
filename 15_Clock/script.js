const stopBtn = document.getElementById("stop-time");
const startStopwatch = document.getElementById("start-stopwatch");
const stopStopwatch = document.getElementById("stop-stopwatch");
const resetStopwatch = document.getElementById("reset-stopwatch")

function showTime() {
  const currentTime = new Date();
  const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  const timeH1Tag = document.getElementById("current-time");
  timeH1Tag.innerText = time;
}

let hour = 0, min = 0, sec = 0;
let stopwatchRunning = false;

function stopwatch() {
  if (stopwatchRunning) {
    sec++;
    if (sec === 60) {
      sec = 0;
      min++;
      if (min === 60) {
        min = 0;
        hour++;
      }
    }
    const formattedTime = `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    const stopwatchH1Tag = document.getElementById("stopwatch-time");
    stopwatchH1Tag.innerText = formattedTime;
  }
}

startStopwatch.addEventListener("click", () => {
  stopwatchRunning = true;
});

stopStopwatch.addEventListener("click", () => {
  stopwatchRunning = false;
});

resetStopwatch.addEventListener('click', () => {
  stopwatchRunning = false;
  hour = 0;
  min = 0;
  sec = 0;
  const formattedTime = `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  const stopwatchH1Tag = document.getElementById("stopwatch-time");
  stopwatchH1Tag.innerText = formattedTime;
})

let stopwatchTimeInterval = setInterval(() => {
  stopwatch();
}, 1000);


// setTimeout(() => console.log('Hello'), 5000) // setTimeout() works for only one time
// setInterval(() => console.log('Hello'), 5000) // setInterval() works continously

let timeInterval = setInterval(() => {
  showTime();
}, 1000);

stopBtn.addEventListener("click", () => {
  clearInterval(timeInterval);
});
