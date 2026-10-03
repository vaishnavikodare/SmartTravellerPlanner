function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar">
      <h2>Smart Traveller Planner</h2>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#planner">Plan Trip</a>
        <a href="#hotels">Hotels</a>
        <a href="#activities">Activities</a>
        <a href="#weather">Weather</a>
        <a href="#map">Map</a>

        {user && (
          <button
            type="button"
            className="nav-logout-button"
            onClick={onLogout}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar