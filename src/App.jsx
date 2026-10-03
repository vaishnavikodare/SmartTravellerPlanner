import { useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import DestinationCard from "./components/DestinationCard"
import TripPlanner from "./components/TripPlanner"
import BudgetCalculator from "./components/BudgetCalculator"
import Itinerary from "./components/Itinerary"
import Hotels from "./components/Hotels"
import Transport from "./components/Transport"
import Activities from "./components/Activities"
import Weather from "./components/Weather"
import MapSection from "./components/MapSection"
import TripSummary from "./components/TripSummary"
import AIAssistant from "./AIAssistant"

import Signup from "./components/Signup"
import Login from "./components/Login"
import UserAccount from "./components/UserAccount"

import { logoutUser } from "./firebase/auth"

import "./App.css"

function App() {
  const [tripDays, setTripDays] = useState(1)
  const [tripDestination, setTripDestination] = useState("")
  const [travelDate, setTravelDate] = useState("")
  const [tripBudget, setTripBudget] = useState(0)

  const [authPage, setAuthPage] = useState("signup")

  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem(
      "smartTravellerUser"
    )

    const loggedIn = localStorage.getItem(
      "smartTravellerLoggedIn"
    )

    if (savedUser && loggedIn === "true") {
      return JSON.parse(savedUser)
    }

    return null
  })

  const handleSignup = (user) => {
    setCurrentUser(user)
    setAuthPage("account")
  }

  const handleLogin = (user) => {
    setCurrentUser(user)
    setAuthPage("account")
  }

  const handleLogout = async () => {
    try {
      await logoutUser()

      localStorage.removeItem("smartTravellerLoggedIn")
      localStorage.removeItem("smartTravellerUser")

      setCurrentUser(null)
      setAuthPage("login")
    } catch (error) {
      console.error("Logout Error:", error)
    }
  }

  const handleStartPlanning = () => {
    setAuthPage("planner")
  }

  if (!currentUser) {
    if (authPage === "signup") {
      return (
        <Signup
          onSignup={handleSignup}
          onShowLogin={() => setAuthPage("login")}
        />
      )
    }

    return (
      <Login
        onLogin={handleLogin}
        onShowSignup={() => setAuthPage("signup")}
      />
    )
  }

  if (authPage === "account") {
    return (
      <UserAccount
        user={currentUser}
        onLogout={handleLogout}
        onStartPlanning={handleStartPlanning}
      />
    )
  }

  return (
    <>
      <Navbar />

      <Home
        user={currentUser}
        onLogout={handleLogout}
      />

      {/* Popular Destinations */}
      <section className="popular-destinations">

        <h2>Popular Destinations</h2>

        <div className="destination-grid">

          <DestinationCard
            name="Goa"
            location="India"
            image="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80"
          />

          <DestinationCard
            name="Mahabaleshwar"
            location="Maharashtra"
            image="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80"
          />

          <DestinationCard
            name="Lonavala"
            location="Maharashtra"
            image="https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=600&q=80"
          />

        </div>

      </section>

      <TripPlanner
        days={tripDays}
        setDays={setTripDays}
        destination={tripDestination}
        setDestination={setTripDestination}
        travelDate={travelDate}
        setTravelDate={setTravelDate}
      />

      <BudgetCalculator
        days={tripDays}
        onBudgetChange={setTripBudget}
      />

      <Itinerary
        days={tripDays}
        destination={tripDestination}
      />

      <Hotels
        destination={tripDestination}
      />

      <Transport
        destination={tripDestination}
      />

      <Activities
        destination={tripDestination}
      />

      <Weather
        destination={tripDestination}
      />

      <MapSection
        destination={tripDestination}
      />

      <TripSummary
        destination={tripDestination}
        days={tripDays}
        travelDate={travelDate}
        budget={tripBudget}
      />

      {/* AI Travel Assistant */}
      <AIAssistant />

    </>
  )
}

export default App