import { useState } from "react"

function TripSummary({
  destination,
  days,
  travelDate,
  budget,
}) {
  const [saved, setSaved] = useState(false)

  const totalDays = Number(days) || 0
  const totalBudget = Number(budget) || 0

  const saveTrip = () => {
    if (!destination) {
      alert("Please plan your trip first.")
      return
    }

    const trip = {
      destination,
      days: totalDays,
      travelDate,
      budget: totalBudget,
      savedAt: new Date().toISOString(),
    }

    localStorage.setItem(
      "smartTravellerSavedTrip",
      JSON.stringify(trip)
    )

    setSaved(true)
  }

  return (
    <section id="summary" className="trip-summary">

      <div className="summary-heading">
        <span className="summary-icon">✨</span>
        <h2>Your Trip Summary</h2>
        <p>
          Everything you need for your upcoming journey,
          all in one place.
        </p>
      </div>

      {!destination && (
        <div className="summary-empty">
          <div className="empty-icon">🧳</div>

          <h3>Your travel plan is waiting</h3>

          <p>
            Select a destination and plan your trip to see
            your complete travel summary here.
          </p>
        </div>
      )}

      {destination && (
        <div className="summary-card">

          <div className="summary-hero">
            <div className="summary-hero-content">
              <span className="summary-small-title">
                YOUR TRAVEL PLAN
              </span>

              <h3>
                ✈️ Ready for {destination}?
              </h3>

              <p>
                Your travel details are organized and ready
                for your adventure.
              </p>
            </div>

            <div className="summary-hero-icon">
              🌍
            </div>
          </div>

          <div className="summary-details">

            <div className="summary-detail-card">
              <div className="detail-icon">
                📍
              </div>

              <div>
                <span>Destination</span>
                <strong>{destination}</strong>
              </div>
            </div>

            <div className="summary-detail-card">
              <div className="detail-icon">
                📅
              </div>

              <div>
                <span>Travel Date</span>
                <strong>
                  {travelDate || "Not selected"}
                </strong>
              </div>
            </div>

            <div className="summary-detail-card">
              <div className="detail-icon">
                🗓️
              </div>

              <div>
                <span>Trip Duration</span>
                <strong>
                  {totalDays > 0
                    ? `${totalDays} day(s)`
                    : "Not selected"}
                </strong>
              </div>
            </div>

            <div className="summary-detail-card">
              <div className="detail-icon">
                💰
              </div>

              <div>
                <span>Estimated Budget</span>
                <strong>
                  {totalBudget > 0
                    ? `₹${totalBudget.toLocaleString("en-IN")}`
                    : "Not calculated"}
                </strong>
              </div>
            </div>

          </div>

          <div className="summary-footer">

            <div className="footer-icon">
              🌟
            </div>

            <div>
              <h4>
                Your adventure is ready!
              </h4>

              <p>
                Hotels, transport, activities, weather
                and map information are available above.
              </p>
            </div>

          </div>

          <button
            type="button"
            className="save-trip-button"
            onClick={saveTrip}
          >
            {saved
              ? "✓ Trip Saved Successfully"
              : "💾 Save My Trip"}
          </button>

          {saved && (
            <p className="saved-message">
              Your trip has been saved on this device.
            </p>
          )}

        </div>
      )}

    </section>
  )
}

export default TripSummary