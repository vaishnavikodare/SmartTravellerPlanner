import { useState } from "react"

function TripPlanner({
  days,
  setDays,
  destination,
  setDestination,
  travelDate,
  setTravelDate,
}) {
  const destinationInfo = {
    Goa: "Beautiful beaches, nightlife, water sports and Portuguese-style attractions.",
    Mahabaleshwar:
      "A peaceful hill station famous for viewpoints, strawberries and pleasant weather.",
    Lonavala:
      "A scenic hill station with waterfalls, forts, caves and beautiful mountain views.",
    Mumbai:
      "A vibrant city famous for Marine Drive, Gateway of India, food and entertainment.",
    Ratnagiri:
      "A beautiful Konkan destination known for beaches, forts, nature and delicious food.",
  }

  const destinationImages = {
    Goa: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85",

    Mahabaleshwar:
      "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=85",

    Lonavala:
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1200&q=85",

    Mumbai:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=85",

    Ratnagiri:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
  }

  const [travellers, setTravellers] = useState(1)
  const [budget, setBudget] = useState("")

  const handleDaysChange = (event) => {
    const value = event.target.value
    setDays(value === "" ? "" : Number(value))
  }

  const handleTravellersChange = (event) => {
    const value = event.target.value
    setTravellers(value === "" ? "" : Number(value))
  }

  const handleBudgetChange = (event) => {
    const value = event.target.value
    setBudget(value === "" ? "" : Number(value))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (
      !destination ||
      !travelDate ||
      !days ||
      !travellers ||
      !budget
    ) {
      alert(
        "Please fill in destination, travel date, number of days, travellers and budget."
      )
      return
    }

    alert("Your trip has been planned successfully!")
  }

  return (
    <section id="planner" className="trip-planner-section">

      {/* ============================= */}
      {/* SECTION HEADING */}
      {/* ============================= */}

      <div className="planner-heading">

        <span className="planner-eyebrow">
          ✦ PLAN YOUR JOURNEY
        </span>

        <h2>
          Where will your next adventure take you?
        </h2>

        <p>
          Tell us a few details about your trip and
          create your personalized travel plan.
        </p>

      </div>

      {/* ============================= */}
      {/* MAIN PLANNER CARD */}
      {/* ============================= */}

      <div className="trip-planner-card">

        {/* Card Header */}

        <div className="planner-card-top">

          <div className="planner-card-title">

            <div className="planner-icon">
              🧭
            </div>

            <div>
              <h3>Trip Details</h3>

              <p>
                Enter your travel details below
              </p>
            </div>

          </div>

          <div className="planner-step">
            STEP 1
          </div>

        </div>

        {/* Form */}

        <form onSubmit={handleSubmit}>

          {/* ============================= */}
          {/* DESTINATION */}
          {/* ============================= */}

          <div className="planner-field planner-field-full">

            <label htmlFor="destination">
              <span>📍</span>
              Destination
            </label>

            <select
              id="destination"
              value={destination}
              onChange={(event) =>
                setDestination(event.target.value)
              }
            >

              <option value="">
                Choose your destination
              </option>

              <option value="Goa">
                Goa
              </option>

              <option value="Mahabaleshwar">
                Mahabaleshwar
              </option>

              <option value="Lonavala">
                Lonavala
              </option>

              <option value="Mumbai">
                Mumbai
              </option>

              <option value="Ratnagiri">
                Ratnagiri
              </option>

            </select>

          </div>

          {/* ============================= */}
          {/* DESTINATION PREVIEW */}
          {/* ============================= */}

          {destination && (

            <div className="selected-destination">

              <div
                className="destination-image"
                style={{
                  backgroundImage: `url(${destinationImages[destination]})`,
                }}
              />

              <div className="destination-details">

                <span className="destination-label">
                  YOUR DESTINATION
                </span>

                <h3>
                  {destination}
                </h3>

                <p>
                  {destinationInfo[destination]}
                </p>

              </div>

            </div>

          )}

          {/* ============================= */}
          {/* DATE + DAYS */}
          {/* ============================= */}

          <div className="planner-fields-row">

            <div className="planner-field">

              <label htmlFor="travelDate">
                <span>📅</span>
                Travel Date
              </label>

              <input
                id="travelDate"
                type="date"
                value={travelDate}
                onChange={(event) =>
                  setTravelDate(event.target.value)
                }
              />

            </div>

            <div className="planner-field">

              <label htmlFor="days">
                <span>🌙</span>
                Number of Days
              </label>

              <input
                id="days"
                type="number"
                min="1"
                max="30"
                placeholder="Example: 5"
                value={days}
                onChange={handleDaysChange}
              />

            </div>

          </div>

          {/* ============================= */}
          {/* TRAVELLERS + BUDGET */}
          {/* ============================= */}

          <div className="planner-fields-row">

            <div className="planner-field">

              <label htmlFor="travellers">
                <span>👥</span>
                Travellers
              </label>

              <input
                id="travellers"
                type="number"
                min="1"
                max="20"
                placeholder="Example: 2"
                value={travellers}
                onChange={handleTravellersChange}
              />

            </div>

            <div className="planner-field">

              <label htmlFor="budget">
                <span>💰</span>
                Total Budget
              </label>

              <div className="budget-input">

                <span>₹</span>

                <input
                  id="budget"
                  type="number"
                  min="1"
                  placeholder="Example: 20000"
                  value={budget}
                  onChange={handleBudgetChange}
                />

              </div>

            </div>

          </div>

          {/* ============================= */}
          {/* CREATE TRIP BUTTON */}
          {/* ============================= */}

          <button
            type="submit"
            className="create-trip-button"
          >

            <span className="create-trip-icon">
              ✨
            </span>

            <span>
              Create My Trip
            </span>

            <span className="button-arrow">
              →
            </span>

          </button>

        </form>

      </div>

      {/* ============================= */}
      {/* TRIP RESULT */}
      {/* ============================= */}

      {destination &&
        travelDate &&
        days &&
        travellers &&
        budget && (

          <div className="trip-result-card">

            <div className="result-header">

              <div>

                <span className="result-label">
                  YOUR TRAVEL PLAN
                </span>

                <h3>
                  ✈️ {destination}
                </h3>

              </div>

              <div className="result-badge">
                Ready to explore
              </div>

            </div>

            <div className="result-grid">

              <div className="result-item">

                <div className="result-icon">
                  📅
                </div>

                <div>
                  <small>
                    Travel Date
                  </small>

                  <strong>
                    {travelDate}
                  </strong>
                </div>

              </div>

              <div className="result-item">

                <div className="result-icon">
                  🌙
                </div>

                <div>
                  <small>
                    Duration
                  </small>

                  <strong>
                    {days} day(s)
                  </strong>
                </div>

              </div>

              <div className="result-item">

                <div className="result-icon">
                  👥
                </div>

                <div>
                  <small>
                    Travellers
                  </small>

                  <strong>
                    {travellers}
                  </strong>
                </div>

              </div>

              <div className="result-item">

                <div className="result-icon">
                  💰
                </div>

                <div>
                  <small>
                    Budget
                  </small>

                  <strong>
                    ₹{Number(budget).toLocaleString("en-IN")}
                  </strong>
                </div>

              </div>

            </div>

            <p className="result-message">
              Your trip details are ready. Explore the
              other sections below to discover hotels,
              transport, activities, weather and more.
            </p>

          </div>

        )}

    </section>
  )
}

export default TripPlanner