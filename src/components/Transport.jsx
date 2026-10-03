function Transport({ destination }) {
  const transportOptions = {
    Goa: [
      {
        name: "Flight",
        icon: "✈️",
        description: "Fastest option for reaching Goa.",
        price: "₹3,000 - ₹8,000",
        time: "1 - 2 hours",
        tag: "Fastest",
      },
      {
        name: "Train",
        icon: "🚆",
        description: "Comfortable and affordable option.",
        price: "₹500 - ₹2,000",
        time: "8 - 12 hours",
        tag: "Popular",
      },
      {
        name: "Bus",
        icon: "🚌",
        description: "Budget-friendly travel option.",
        price: "₹600 - ₹1,500",
        time: "10 - 14 hours",
        tag: "Budget",
      },
    ],

    Mahabaleshwar: [
      {
        name: "Bus",
        icon: "🚌",
        description: "Common option from nearby cities.",
        price: "₹300 - ₹800",
        time: "3 - 5 hours",
        tag: "Popular",
      },
      {
        name: "Taxi",
        icon: "🚕",
        description: "Comfortable option for families and groups.",
        price: "₹2,500 - ₹5,000",
        time: "2.5 - 4 hours",
        tag: "Comfort",
      },
      {
        name: "Car",
        icon: "🚗",
        description: "Flexible option for road trips.",
        price: "₹1,500 - ₹3,500",
        time: "2.5 - 4 hours",
        tag: "Flexible",
      },
    ],

    Lonavala: [
      {
        name: "Train",
        icon: "🚆",
        description: "Convenient option from Mumbai and Pune.",
        price: "₹100 - ₹500",
        time: "1 - 2.5 hours",
        tag: "Popular",
      },
      {
        name: "Bus",
        icon: "🚌",
        description: "Affordable option for travellers.",
        price: "₹200 - ₹600",
        time: "1.5 - 3 hours",
        tag: "Budget",
      },
      {
        name: "Car",
        icon: "🚗",
        description: "Great option for a road trip.",
        price: "₹1,000 - ₹2,500",
        time: "1.5 - 3 hours",
        tag: "Flexible",
      },
    ],

    Mumbai: [
      {
        name: "Flight",
        icon: "✈️",
        description: "Fast option for long-distance travel.",
        price: "₹3,000 - ₹8,000",
        time: "1 - 2 hours",
        tag: "Fastest",
      },
      {
        name: "Train",
        icon: "🚆",
        description: "Extensive railway connectivity.",
        price: "₹500 - ₹2,500",
        time: "6 - 12 hours",
        tag: "Popular",
      },
      {
        name: "Bus",
        icon: "🚌",
        description: "Available from many nearby cities.",
        price: "₹500 - ₹1,500",
        time: "8 - 14 hours",
        tag: "Budget",
      },
    ],

    Ratnagiri: [
      {
        name: "Train",
        icon: "🚆",
        description: "Convenient railway connection.",
        price: "₹300 - ₹1,500",
        time: "5 - 10 hours",
        tag: "Popular",
      },
      {
        name: "Bus",
        icon: "🚌",
        description: "Affordable Konkan travel option.",
        price: "₹400 - ₹1,200",
        time: "6 - 10 hours",
        tag: "Budget",
      },
      {
        name: "Car",
        icon: "🚗",
        description: "Good option for exploring the region.",
        price: "₹1,500 - ₹4,000",
        time: "4 - 7 hours",
        tag: "Flexible",
      },
    ],
  }

  const selectedOptions = transportOptions[destination]

  const searchTransport = (transport) => {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      transport + " to " + destination
    )}`

    window.open(searchUrl, "_blank")
  }

  return (
    <section className="transport" id="transport">

      <div className="transport-header">
        <span className="transport-subtitle">
          TRAVEL SMART
        </span>

        <h2>Transport Options</h2>

        <p>
          Choose the best way to reach your destination
        </p>
      </div>

      {!destination && (
        <div className="transport-message">
          <span>📍</span>
          <p>Select a destination to see available transport options.</p>
        </div>
      )}

      {selectedOptions && (
        <>
          <div className="transport-route">
            <span>📍</span>
            <span>
              Travel options for <strong>{destination}</strong>
            </span>
          </div>

          <div className="transport-container">

            {selectedOptions.map((transport) => (
              <div
                className="transport-card"
                key={transport.name}
              >

                <div className="transport-image">
                  <div className="transport-icon">
                    {transport.icon}
                  </div>

                  <span className="transport-tag">
                    {transport.tag}
                  </span>
                </div>

                <div className="transport-content">

                  <h3>{transport.name}</h3>

                  <p className="transport-description">
                    {transport.description}
                  </p>

                  <div className="transport-details">

                    <div className="transport-detail">
                      <span className="detail-icon">💰</span>

                      <div>
                        <small>Estimated Cost</small>
                        <strong>{transport.price}</strong>
                      </div>
                    </div>

                    <div className="transport-detail">
                      <span className="detail-icon">⏱️</span>

                      <div>
                        <small>Travel Time</small>
                        <strong>{transport.time}</strong>
                      </div>
                    </div>

                  </div>

                  <button
                    className="transport-button"
                    onClick={() =>
                      searchTransport(transport.name)
                    }
                  >
                    Search {transport.name}
                    <span>→</span>
                  </button>

                </div>

              </div>
            ))}

          </div>
        </>
      )}

    </section>
  )
}

export default Transport