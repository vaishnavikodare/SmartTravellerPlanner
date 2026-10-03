import { useState } from "react"

function DestinationCard(props) {
  const [planned, setPlanned] = useState(false)

  function handlePlanTrip() {
    setPlanned(true)
  }

  return (
    <div className="destination-card">

      {/* Small destination photo */}
      <img
        src={props.image}
        alt={props.name}
        className="destination-thumbnail"
      />

      {/* Destination information */}
      <div className="destination-card-content">

        <h2>{props.name}</h2>

        <p className="destination-location">
          📍 {props.location}
        </p>

        <button onClick={handlePlanTrip}>
          🧳 Plan Trip
        </button>

        {planned && (
          <p className="trip-planned">
            ✨ Trip planned!
          </p>
        )}

      </div>

    </div>
  )
}

export default DestinationCard