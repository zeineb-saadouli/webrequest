// Clé API (remplacez par votre clé personnelle)
const API_KEY = "b621e5d919fb0af2a42498ec0c65af4d"; // Inscrivez-vous sur openweathermap.org pour obtenir une clé gratuite

// Écoutez les événements
document.getElementById("search-btn").addEventListener("click", () => {
    const city = document.getElementById("city-input").value;
    if (city) {
        fetchWeather(city);
    }
});

async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=fr`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Ville non trouvée !");
        
        const data = await response.json();
        updateWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function updateWeather(data) {
    document.getElementById("city-name").textContent = `Météo à ${data.name}, ${data.sys.country}`;
    document.getElementById("temperature").textContent = `Température : ${data.main.temp}°C`;
    document.getElementById("description").textContent = `Description : ${data.weather[0].description}`;
}
