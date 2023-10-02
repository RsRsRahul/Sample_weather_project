const handleButtonClick = document.getElementById('getWeather');
const cityInput = document.getElementById('cityInput');
const weatherData = document.getElementById('weatherData');
const popularCity = document.getElementById('popularCities')
const popularCities = ['NYC','Hyderabad','bangkok','delhi','amsterdam']

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
                <p>Condition: ${data.current.condition.text}</p>
                <img src=${data.current.condition.icon} alt="Weather Icon">
            `;
                
            weatherData.innerHTML = resultHTML;
        })
        .catch(error => {
            console.error(error);
            weatherData.innerHTML = 'Error fetching weather data';
        });
});

function fetchPopularCities(city){
        fetch(`http://api.weatherapi.com/v1/current.json?key=d3b3f42c5cc94d8b9b5152123220605&q=${city}&aqi=no`)
        .then(response => response.json())
        .then(data => {
            const cityElement=document.createElement('div');
            cityElement.classList.add('city');
            const resultHTML = `
                <h2>${data.location.name.toUpperCase()}</h2>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <p>Condition: ${data.current.condition.text}</p>
                <img src=${data.current.condition.icon} alt="Weather Icon">
            `;     
            cityElement.innerHTML = resultHTML;
            popularCity.appendChild(cityElement);
        })
}

popularCities.forEach(city => {
    fetchPopularCities(city);
});