const apiKey = "3f1abc123xyz456yourkey"; // we will add this next

function getWeather() {
    const city = document.getElementById("cityInput").value;
    const weatherInfo = document.getElementById("weatherInfo");

    if (city === "") {
        weatherInfo.innerHTML = "<p>Please enter a city name</p>";
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                weatherInfo.innerHTML = "<p>City not found</p>";
            } else {
                weatherInfo.innerHTML = `
                    <p><strong>City:</strong> ${data.name}</p>
                    <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
                    <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                    <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
                `;
            }
        })
        .catch(() => {
            weatherInfo.innerHTML = "<p>Error fetching data</p>";
        });
}

