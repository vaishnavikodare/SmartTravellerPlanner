import { useState } from "react"
import { loginUser } from "../firebase/auth"

function Login({ onLogin, onShowSignup }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleLogin = async (event) => {
    event.preventDefault()

    setMessage("")

    if (!email || !password) {
      setMessage("Please enter your email and password.")
      return
    }

    try {
      const user = await loginUser(email, password)

      const userData = {
        name: user.displayName || "",
        email: user.email,
        uid: user.uid
      }

      localStorage.setItem(
        "smartTravellerLoggedIn",
        "true"
      )

      localStorage.setItem(
        "smartTravellerUser",
        JSON.stringify(userData)
      )

      if (onLogin) {
        onLogin(userData)
      }
    } catch (error) {
      console.log("Firebase Login Error:", error)

      if (
        error.code === "auth/invalid-credential" ||
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        setMessage("Incorrect email or password.")
      } else if (error.code === "auth/invalid-email") {
        setMessage("Please enter a valid email address.")
      } else {
        setMessage("Login failed. Please try again.")
      }
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Welcome Back</h1>

        <p className="auth-subtitle">
          Login to Smart Traveller Planner
        </p>

        <form onSubmit={handleLogin}>
          <label htmlFor="login-email">
            Email
          </label>

          <input
            id="login-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
          />

          <label htmlFor="login-password">
            Password
          </label>

          <input
            id="login-password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
          />

          <button type="submit">
            Login
          </button>
        </form>

        {message && (
          <p className="auth-message">
            {message}
          </p>
        )}

        <p className="auth-switch">
          Don't have an account?
        </p>

        <button
          type="button"
          className="secondary-auth-button"
          onClick={onShowSignup}
        >
          Create Account
        </button>
      </div>
    </div>
  )
}

export default Login