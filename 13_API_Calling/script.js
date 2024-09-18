// Weather App

const elements = {
  cityName: document.getElementById("city-name"),
  region: document.getElementById("city-region"),
  country: document.getElementById("city-country"),
  localtime: document.getElementById("localtime"),
  tz: document.getElementById("tz"),
  feelslike_c: document.getElementById("feelslike_c"),
  heatindex_c: document.getElementById("heatindex_c"),
  humidity: document.getElementById("humidity"),
  temp_c: document.getElementById("temp_c"),
  wind_kph: document.getElementById("wind_kph"),
  icon: document.getElementById("icon"),
  searchButton: document.getElementById("searchButton"),
  city: document.getElementById("city-input"),
  currentLocationBtn: document.getElementById("currentLocationBtn")
};

const API_KEY = '77845435e2ad47bbacd183308241709';
const BASE_URL = 'http://api.weatherapi.com/v1/current.json';

async function getWeatherData(query) {
  const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&aqi=yes`);
  return response.json();
}

function updateWeatherInfo(result) {
  elements.cityName.innerText = result.location.name;
  elements.region.innerText = result.location.region;
  elements.country.innerText = result.location.country;
  elements.localtime.innerText = `Time: ${result.location.localtime}`;
  elements.tz.innerText = result.location.tz_id;
  elements.feelslike_c.innerText = `Feels Like: ${result.current.feelslike_c}°C`;
  elements.heatindex_c.innerText = `Heat Index: ${result.current.heatindex_c}°C`;
  elements.humidity.innerText = `Humidity: ${result.current.humidity}`;
  elements.temp_c.innerText = `Temperature: ${result.current.temp_c}°C`;
  elements.wind_kph.innerText = `Wind: ${result.current.wind_kph} KPH`;
  elements.icon.innerHTML = `<img style="background-color: black; width: 100px; height: 100px;" src=${result.current.condition.icon}>`;
}

elements.currentLocationBtn.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;
      const result = await getWeatherData(`${latitude},${longitude}`);
      updateWeatherInfo(result);
    },
    () => {
      alert('Unable to fetch user location\nCheck if location permission is granted.');
    }
  );
});

elements.searchButton.addEventListener("click", async () => {
  const query = elements.city.value;
  const result = await getWeatherData(query);
  updateWeatherInfo(result);
});
