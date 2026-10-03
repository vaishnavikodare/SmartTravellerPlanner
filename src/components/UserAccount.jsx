function UserAccount({ user, onLogout, onStartPlanning }) {
  const handleLogout = () => {
    localStorage.removeItem("smartTravellerLoggedIn")

    if (onLogout) {
      onLogout()
    }
  }

  return (
    <section className="user-account">
      <div className="account-card">
        <div className="account-icon">
          👤
        </div>

        <h1>
          Welcome, {user?.name || "Traveller"}!
        </h1>

        <p className="account-subtitle">
          Your Smart Traveller Planner account
        </p>

        <div className="account-info">
          <div className="account-item">
            <strong>Name</strong>
            <span>
              {user?.name || "Not available"}
            </span>
          </div>

          <div className="account-item">
            <strong>Email</strong>
            <span>
              {user?.email || "Not available"}
            </span>
          </div>
        </div>

        <p className="account-message">
          Plan your trips, explore destinations,
          calculate your budget and organize your
          travel itinerary.
        </p>

        <button
          className="start-planning-button"
          onClick={onStartPlanning}
        >
          ✈️ Start Planning
        </button>

        <button
          className="logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </section>
  )
}

export default UserAccount