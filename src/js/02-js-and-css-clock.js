const refs = {
  second: document.querySelector('.second-hand'),
  minute: document.querySelector('.min-hand'),
  hour: document.querySelector('.hour-hand'),
};

setInterval(setDate, 1000); //runs every second

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  refs.second.style.transform = `rotate(${secondsDegrees}deg)`;
  // if(refs.second.style.transform)

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  refs.minute.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  refs.hour.style.transform = `rotate(${hoursDegrees}deg)`;
}

setDate();
