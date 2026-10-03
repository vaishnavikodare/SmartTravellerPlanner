function Weather({ destination }) {
  const weatherData = {
    Goa: {
      temperature: "28°C",
      condition: "Sunny",
      humidity: "70%",
      wind: "15 km/h",
      icon: "☀️",
      description: "Perfect weather for beaches and outdoor activities.",
    },

    Mahabaleshwar: {
      temperature: "22°C",
      condition: "Pleasant",
      humidity: "65%",
      wind: "10 km/h",
      icon: "🌤️",
      description: "Cool and pleasant weather for exploring the hills.",
    },

    Lonavala: {
      temperature: "24°C",
      condition: "Cloudy",
      humidity: "68%",
      wind: "12 km/h",
      icon: "☁️",
      description: "Cloudy weather with a comfortable temperature.",
    },

    Mumbai: {
      temperature: "29°C",
      condition: "Partly Cloudy",
      humidity: "75%",
      wind: "14 km/h",
      icon: "⛅",
      description: "Warm weather with some clouds throughout the day.",
    },

    Ratnagiri: {
      temperature: "27°C",
      condition: "Partly Cloudy",
      humidity: "72%",
      wind: "13 km/h",
      icon: "⛅",
      description: "Warm coastal weather with partly cloudy skies.",
    },
  }

  const weather = weatherData[destination]

  return (
    <section className="weather">

      <div className="weather-heading">
        <span className="section-tag">TRAVEL WEATHER</span>
        <h2>Weather Information</h2>
        <p>
          Check the weather before you start exploring your destination.
        </p>
      </div>

      {!destination && (
        <div className="weather-empty">
          <div className="weather-empty-icon">🌤️</div>

          <h3>Select Your Destination</h3>

          <p>
            Choose a destination to view its weather information.
          </p>
        </div>
      )}

      {destination && weather && (
        <div className="weather-card">

          {/* Top Section */}
          <div className="weather-top">

            <div className="weather-location">
              <span className="location-icon">📍</span>

              <div>
                <span className="location-label">
                  CURRENT DESTINATION
                </span>

                <h3>{destination}</h3>
              </div>
            </div>

            <div className="weather-icon">
              {weather.icon}
            </div>

          </div>

          {/* Temperature */}
          <div className="weather-main">

            <div className="temperature">
              {weather.temperature}
            </div>

            <div className="condition">
              <strong>{weather.condition}</strong>

              <span>
                {weather.description}
              </span>
            </div>

          </div>

          {/* Weather Details */}
          <div className="weather-details">

            <div className="weather-item">
              <div className="weather-item-icon">
                💧
              </div>

              <div>
                <span>Humidity</span>
                <strong>{weather.humidity}</strong>
              </div>
            </div>

            <div className="weather-item">
              <div className="weather-item-icon">
                💨
              </div>

              <div>
                <span>Wind Speed</span>
                <strong>{weather.wind}</strong>
              </div>
            </div>

            <div className="weather-item">
              <div className="weather-item-icon">
                🌡️
              </div>

              <div>
                <span>Temperature</span>
                <strong>{weather.temperature}</strong>
              </div>
            </div>

          </div>

          {/* Sample Data Notice */}
          <div className="weather-note">
            <span>ℹ️</span>

            <p>
              Weather information currently uses sample project data.
              A live weather API can be connected later.
            </p>
          </div>

        </div>
      )}

    </section>
  )
}

export default Weather