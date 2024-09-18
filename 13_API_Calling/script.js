// Weather App

const cityName = document.getElementById("city-name");
const region = document.getElementById("city-region");
const country = document.getElementById("city-country");
const localtime = document.getElementById("localtime");
const tz = document.getElementById("tz");
const feelslike_c = document.getElementById("feelslike_c");
const heatindex_c = document.getElementById("heatindex_c");
const humidity = document.getElementById("humidity");
const temp_c = document.getElementById("temp_c");
const wind_kph = document.getElementById("wind_kph");
const icon = document.getElementById("icon");

const searchButton = document.getElementById("searchButton");
const city = document.getElementById("city-input");
const currentLocationBtn = document.getElementById("currentLocationBtn");

async function getWeatherDataByCoordinates(lat, long) {
  const promiseData = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=77845435e2ad47bbacd183308241709&q=${lat},${long}&aqi=yes`
  );
  return promiseData.json();
}

async function getWeatherData(cityName) {
  const promiseData = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=77845435e2ad47bbacd183308241709&q=${cityName}&aqi=yes`
  );
  return promiseData.json();
}

function assignLocationVariableFromQuery(result) {
  cityName.innerText = result.location.name;
  region.innerText = result.location.region;
  country.innerText = result.location.country;
  // localtime.innerText = `Time: ${result.location.localtime}`
  // tz.innerText = result.location.tz_id
  feelslike_c.innerText = `Feels Like : ${result.current.feelslike_c}°C`;
  heatindex_c.innerText = `Heat Index : ${result.current.heatindex_c}°C`;
  humidity.innerText = `Humidity : ${result.current.humidity}`;
  temp_c.innerText = `Temparature : ${result.current.temp_c}°C`;
  wind_kph.innerText = `Wind : ${result.current.wind_kph}KPH`;
  icon.innerHTML = `<img style="background-color: black; width: 100px; height: 100px;" src=${result.current.condition.icon}>`;
}

currentLocationBtn.addEventListener("click", async () => {
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      console.log("Got the Location");

      // const lat = 22.5744
      const lat = position.coords.latitude;
      // const long = 88.3629
      const long = position.coords.longitude;
      const result = await getWeatherDataByCoordinates(lat, long);
      console.log(result);
      assignLocationVariableFromQuery(result);
    },
    () => {
      console.log("Failed to get Location");
    }
  );
});

searchButton.addEventListener("click", async () => {
  const value = city.value;
  const result = await getWeatherData(value);
  assignLocationVariableFromQuery(result);
  console.log(result);
});
