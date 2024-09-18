const stopBtn = document.getElementById("stop-time");

function showTime() {
  const currentTime = new Date();
  const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  const timeH1Tag = document.getElementById("time");
  timeH1Tag.innerText = time;
}

// setTimeout(() => console.log('Hello'), 5000) // setTimeout() works for only one time
// setInterval(() => console.log('Hello'), 5000) // setInterval() works continously

let timeInterval = setInterval(() => {
  showTime();
}, 1000);

stopBtn.addEventListener("click", () => {
  clearInterval(timeInterval);
});
