let clocks = document.querySelectorAll(".clock");

function tick() {

  let timezones = ["America/New_York", "Europe/London", "Asia/Tokyo"];

  clocks.forEach((clock, i) => {

    let time = new Date().toLocaleString("en-US", {
      timeZone: timezones[i],
      hour12: false
    });

    let date = new Date(time);

    let hours = date.getHours() % 12;
    let minutes = date.getMinutes();

    let hourDeg = (hours / 12) * 360 + (minutes / 60) * 30;
    let minuteDeg = (minutes / 60) * 360;

    clock.querySelector(".hour").style.transform = `rotate(${hourDeg}deg)`;
    clock.querySelector(".minute").style.transform = `rotate(${minuteDeg}deg)`;

  });

}

tick();
setInterval(tick, 1000);
