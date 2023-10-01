const handleButtonClick = document.getElementById('getWeather');
const cityInput = document.getElementById('cityInput');
const weatherData = document.getElementById('weatherData');

handleButtonClick.addEventListener('click', () => {
    const city = cityInput.value;
    fetch(`http://api.weatherapi.com/v1/current.json?key=d3b3f42c5cc94d8b9b5152123220605&q=${city}&aqi=no`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const resultHTML = `
                <h2>${data.location.name.toUpperCase()}</h2>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <p>Humidity: ${data.current.humidity}°C</p>
                <p>${data.current.condition.text}</p>
                <img src=${data.current.condition.icon} alt="Weather Icon">
            `;
                
            weatherData.innerHTML = resultHTML;
        })
        .catch(error => {
            console.error(error);
            weatherData.innerHTML = 'Error fetching weather data';
        });
});
