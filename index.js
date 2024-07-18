const min = document.getElementById("min");
const sec = document.getElementById("sec");
const hour = document.getElementById("hour");
var inithour = 0;
var initsec = 0;
var initmin = 0;
var interval;
function startTimer() {
  clearInterval(interval);
  SetInterval();
}

function display() {
  sec.innerHTML = padzero(initsec);
  min.innerHTML = padzero(initmin);
  hour.innerHTML = padzero(inithour);
}

function padzero(value) {
  if (value < 10) {
    return "0" + value;
  }
  return value;
}

function timer() {
  initsec += 1;
  checkPoint(initsec);
}

function checkPoint(value) {
  if (value >= 60) {
    initsec = 0;
    initmin += 1;
    hoursCheck(initmin);
  }
  display();
}

function hoursCheck(value) {
  if (value >= 60) {
    inithour += 1;
    initmin = 0;
  }
}
function SetInterval() {
  interval = setInterval(timer, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  initsec = 0;
  initmin = 0;
  inithour = 0;
  display();
}
