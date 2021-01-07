const API_KEY = "a96fb680b859b378cfc94e8a2091063c";
const header = document.querySelector(".header"),
  weatherContainer = header.querySelector(".weatherContainer"),
  weatherInfo = weatherContainer.querySelector(".weatherInfo");

const successGet = async ({ coords }) => {
  const { latitude: lat, longitude: lon } = coords;
  const weatherGet = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`
  );
  const {
    main: { temp },
    weather,
  } = await weatherGet.json(weatherGet);
  console.log(weather);
  paintWeather(temp, weather);
};

const failGet = (error) => {
  console.log(error.message);
};

const paintWeather = (temp, weather) => {
  weather.forEach(
    (weat) =>
      (weatherInfo.innerHTML = `${Math.ceil(temp)}°C / ${weat.description}`)
  );
};

navigator.geolocation.getCurrentPosition(successGet, failGet);
