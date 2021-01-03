const clockContainer = document.querySelector(".js-clockContainer");
const clock = clockContainer.querySelector(".js-clock");

const getDate = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clock.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
};

function init() {
  setInterval(getDate, 1000);
}

init();
