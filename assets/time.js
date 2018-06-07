var clock = {},
    bell = new Audio('bell.mp3');

var nameList = [
  "year", "month", "date",
  "hour", "minute", "second"
];
for (var i = 0; i < nameList.length; i++) {
  clock[nameList[i]] = document.getElementById(nameList[i]);
}

function updateClock() {
  var d = new Date(),
      h = d.getHours(),
      m = d.getMinutes(),
      s = d.getSeconds();

  if (h < 10) h = '0' + h;
  if (m < 10) m = '0' + m;
  if (s < 10) s = '0' + s;

  clock.year.innerHTML = d.getYear() + 1900;
  clock.month.innerHTML = d.getMonth() + 1;
  clock.date.innerHTML = d.getDate();

  clock.hour.innerHTML = h;
  clock.minute.innerHTML = m;
  clock.second.innerHTML = s;
}

updateClock();
setInterval(updateClock, 250);

function setStopWatch() {
  var watch = document.getElementById('stop-watch'),
      yn,
      minutes;

  if (!watch) return;

  if (watch.innerHTML != 0) {
    yn = confirm("타이머를 초기화하시겠습니까?");
    if (!yn) return;
    watch.innerHTML = 0;
  }

  minutes = +prompt("시간을 입력해주십시오. (단위는 분, 입력시에는 단위 없이 숫자만.)");
  if (!minutes || minute < 0) return alert("유효한 양수를 입력하십시오.");

  watch.innerHTML = Math.round(minutes * 60);
}

function updateStopWatch() {
  var watch = document.getElementById('stop-watch');

  if (!watch || watch.innerHTML == 0) return;

  if (watch.innerHTML == 1) {
    watch.innerHTML = 0;
    document.body.style.background = 'red';
    bell.play();
    return;
  }

  watch.innerHTML -= 1;
}

setInterval(updateStopWatch, 1000);
