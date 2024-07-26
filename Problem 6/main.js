const apiKey = '65c18ae0f5959139aad3e9d8e60ca1d3';
const city = 'Toronto';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},CA&appid=${apiKey}`;

const title = document.querySelector('h1');
title.textContent += city;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const weatherDiv = document.getElementById('weather');
        const temp = data.main.temp;
        const tempMax = data.main.temp_max;
        const tempMin = data.main.temp_min;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;

        weatherDiv.innerHTML = `
                    <p>Temperature: ${temp}°C</p>
                    <p>Temperature Range: ${tempMin} - ${tempMax}°C</p>
                    <p>Description: ${description}</p>
                    <p>Humidity: ${humidity}%</p>
                    <p>Wind Speed: ${windSpeed} m/s</p>
                `;
                console.log(data);
    })
    .catch(error => console.error('Error fetching the weather data:', error));