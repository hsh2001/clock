var clock = {};

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
