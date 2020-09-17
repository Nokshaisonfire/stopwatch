let priviousTime;
let started = false;
let val = 0;

function start() {
  currentTime = new Date();
  seconds.innerHTML = Math.floor((currentTime - priviousTime) / 1000);
}

const button = document.getElementById("button");
const seconds = document.getElementById("seconds");

button.addEventListener("click", () => {
  if (!started) {
    priviousTime = new Date();
    val = setInterval(start, 1000);
    button.innerHTML = "Stop";
    started = true;
  } else {
    button.innerHTML = "Start";
    clearInterval(val);
    started = false;
  }
});
