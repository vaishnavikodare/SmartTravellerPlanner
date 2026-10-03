function Itinerary({ days, destination }) {
  const itineraryData = {
    Goa: [
      {
        morning: "Arrive in Goa and relax at your hotel.",
        afternoon: "Visit Baga Beach and enjoy the beautiful coastline.",
        evening: "Explore the local market and enjoy Goan food.",
      },
      {
        morning: "Visit Fort Aguada and explore the historic fort.",
        afternoon: "Enjoy water sports and beach activities.",
        evening: "Relax at the beach and enjoy the sunset.",
      },
      {
        morning: "Visit a nearby beach and enjoy a peaceful morning.",
        afternoon: "Explore Panjim and Portuguese-style attractions.",
        evening: "Enjoy dinner and prepare for departure.",
      },
    ],

    Mahabaleshwar: [
      {
        morning: "Visit Arthur's Seat and enjoy the hill views.",
        afternoon: "Explore nearby viewpoints and scenic locations.",
        evening: "Relax and enjoy the pleasant hill-station weather.",
      },
      {
        morning: "Visit Venna Lake.",
        afternoon: "Enjoy boating and explore the surrounding area.",
        evening: "Try local food and visit the market.",
      },
      {
        morning: "Visit Mapro Garden.",
        afternoon: "Try fresh strawberries and explore the garden.",
        evening: "Visit a nearby viewpoint and enjoy the sunset.",
      },
    ],

    Lonavala: [
      {
        morning: "Visit Bhushi Dam and enjoy the surroundings.",
        afternoon: "Explore nearby scenic viewpoints.",
        evening: "Relax and enjoy local food.",
      },
      {
        morning: "Explore Rajmachi Fort and nearby areas.",
        afternoon: "Enjoy the beautiful mountain scenery.",
        evening: "Return to the hotel and relax.",
      },
      {
        morning: "Visit Karla Caves.",
        afternoon: "Learn about the history of the ancient caves.",
        evening: "Explore the local market before departure.",
      },
    ],

    Mumbai: [
      {
        morning: "Visit the Gateway of India.",
        afternoon: "Explore Colaba and nearby attractions.",
        evening: "Enjoy the sunset near Marine Drive.",
      },
      {
        morning: "Explore Marine Drive.",
        afternoon: "Visit museums and popular city attractions.",
        evening: "Try Mumbai street food.",
      },
      {
        morning: "Explore local markets.",
        afternoon: "Visit another popular Mumbai attraction.",
        evening: "Enjoy dinner and prepare for departure.",
      },
    ],

    Ratnagiri: [
      {
        morning: "Visit a beautiful Ratnagiri beach.",
        afternoon: "Enjoy the coastal scenery and relax.",
        evening: "Try local Konkan food.",
      },
      {
        morning: "Explore Ratnadurg Fort.",
        afternoon: "Visit nearby coastal attractions.",
        evening: "Enjoy the sunset near the sea.",
      },
      {
        morning: "Explore the local market.",
        afternoon: "Try traditional Konkan food.",
        evening: "Relax and prepare for departure.",
      },
    ],
  }

  const defaultItinerary = [
    {
      morning: "Explore the main attractions of your destination.",
      afternoon: "Visit popular local places.",
      evening: "Enjoy local food and relax.",
    },
    {
      morning: "Explore nearby sightseeing locations.",
      afternoon: "Visit a popular attraction.",
      evening: "Explore the local market.",
    },
    {
      morning: "Visit a nature spot or viewpoint.",
      afternoon: "Enjoy local activities.",
      evening: "Relax and prepare for the next day.",
    },
  ]

  const selectedItinerary =
    itineraryData[destination] || defaultItinerary

  const totalDays = Number(days) || 1

  return (
    <section className="itinerary">
      <h2>Your Itinerary</h2>

      {destination && (
        <p>
          <strong>Destination:</strong> {destination}
        </p>
      )}

      <div className="itinerary-container">
        {Array.from(
          { length: totalDays },
          (_, index) => {
            const dayPlan =
              selectedItinerary[
                index % selectedItinerary.length
              ]

            return (
              <div
                className="itinerary-day"
                key={index}
              >
                <h3>Day {index + 1}</h3>

                <div className="itinerary-time">
                  <strong>🌅 Morning</strong>
                  <p>{dayPlan.morning}</p>
                </div>

                <div className="itinerary-time">
                  <strong>☀️ Afternoon</strong>
                  <p>{dayPlan.afternoon}</p>
                </div>

                <div className="itinerary-time">
                  <strong>🌙 Evening</strong>
                  <p>{dayPlan.evening}</p>
                </div>
              </div>
            )
          }
        )}
      </div>
    </section>
  )
}

export default Itinerary