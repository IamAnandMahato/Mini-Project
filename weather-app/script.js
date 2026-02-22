const apiKey = "Your-API-Key";

// Load default India weather on page load
window.onload = function() {
    getWeather("India");
};

// Allow Enter key search
document.getElementById("cityInput")
.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        getWeather();
    }
});

async function getWeather(defaultCity) {

    const city = defaultCity || document.getElementById("cityInput").value;

    if (!city) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            alert(data.message);
            return;
        }

        document.getElementById("cityName").innerText =
            `${data.name}, ${data.sys.country}`;

        document.getElementById("temperature").innerText =
            `${Math.round(data.main.temp)}°C`;

        document.getElementById("description").innerText =
            data.weather[0].description;

        document.getElementById("humidity").innerText =
            `Humidity: ${data.main.humidity}%`;

        document.getElementById("wind").innerText =
            `Wind: ${data.wind.speed} m/s`;

        document.getElementById("feelsLike").innerText =
            `${Math.round(data.main.feels_like)}°C`;

        const iconCode = data.weather[0].icon;
        document.getElementById("weatherIcon").src =
            `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        // Date & Time
        const now = new Date();
        document.getElementById("dateTime").innerText =
            now.toDateString() + " | " + now.toLocaleTimeString();

    } catch (error) {
        alert("Error fetching weather data");
        console.log(error);
    }
}
