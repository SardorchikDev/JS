`use strict`;
const apiKey = '46351da790226c653537b9628dc20463';

function getWeather(city) {
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;
  const xmlr = new XMLHttpRequest();
  xmlr.open('GET', api, true);
  xmlr.onreadystatechange = function() {
    if (xmlr.readyState === 4) {
      if (xmlr.status === 200) {
        const data = JSON.parse(xmlr.responseText);
        document.getElementById('SHAHAR').textContent = 'Shahar: ' + data.name + ', ' + data.sys.country;
        document.getElementById('TEMPERATURA').textContent = 'temperatura: ' + data.main.temp + '°C';
      } else {
        console.log('Hatolarin  : ', xmlr.status);
      }
    }
  };
  xmlr.send();
}

document.getElementById('KNOPKA').addEventListener('click', () => {
  const city = document.getElementById('SHAHARNOM').value;
  if (city) {
    getWeather(city);
  }
});
