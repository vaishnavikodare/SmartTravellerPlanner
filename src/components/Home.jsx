function Home({ user, onLogout }) {
  return (
    <section id="home" className="home-section">

      {/* Background effects */}
      <div className="home-overlay"></div>
      <div className="home-glow home-glow-one"></div>
      <div className="home-glow home-glow-two"></div>

      {/* Animated airplane */}
      <div className="airplane-animation">
        ✈
      </div>

      {/* Top navigation action */}
      {user && (
        <div className="home-auth-buttons">
          <button
            type="button"
            className="logout-button"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      )}

      {/* Main hero content */}
      <div className="home-content">

        <div className="home-eyebrow">
          <span>✦</span>
          YOUR JOURNEY STARTS HERE
          <span>✦</span>
        </div>

        <div className="home-route-line">
          <span></span>
          <div className="route-dot"></div>
          <span></span>
        </div>

        <h1>
          Smart
          <span> Traveller </span>
          Planner
        </h1>

        <p className="home-description">
          Discover beautiful places, plan unforgettable journeys,
          find the right stay, explore activities and organize
          everything in one place.
        </p>

        <a href="#planner" className="main-button">
          <span>Start Planning</span>
          <strong>→</strong>
        </a>

      </div>

      {/* Bottom destination text */}
      <div className="home-bottom-text">
        <span>DISCOVER</span>
        <span>PLAN</span>
        <span>EXPLORE</span>
      </div>

    </section>
  )
}

export default Home