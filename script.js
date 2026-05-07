`use strict`;
const apiKey = '46351da790226c653537b9628dc20463';

function getWeather(city) {
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;
  axios.get(api)
    .then(response => {
      const data = response.data;
      document.getElementById('SHAHAR').textContent = 'City: ' + data.name + ', ' + data.sys.country;
      document.getElementById('TEMPERATURA').textContent = 'Temperature: ' + data.main.temp + '°C';
    })
}

document.getElementById('KNOPKA').addEventListener('click', () => {
  const city = document.getElementById('SHAHARNOM').value;
  if (city) {
    getWeather(city);
  }
});
