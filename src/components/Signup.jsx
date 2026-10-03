import { useState } from "react"
import { signupUser } from "../firebase/auth"
import { saveUserProfile } from "../firebase/firestore"

function Signup({ onSignup, onShowLogin }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleSignup = async (event) => {
    event.preventDefault()

    setMessage("")

    if (!name || !email || !password || !confirmPassword) {
      setMessage("Please fill in all fields.")
      return
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.")
      return
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.")
      return
    }

    try {
      const user = await signupUser(
        name,
        email,
        password
      )

      await saveUserProfile({
        name: name,
        email: user.email,
        uid: user.uid
      })

      const userData = {
        name: user.displayName,
        email: user.email,
        uid: user.uid
      }

      setMessage("Account created successfully!")

      if (onSignup) {
        onSignup(userData)
      }

    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setMessage(
          "An account with this email already exists."
        )
      } else if (error.code === "auth/invalid-email") {
        setMessage("Please enter a valid email address.")
      } else if (error.code === "auth/weak-password") {
        setMessage(
          "Password must be at least 6 characters."
        )
      } else {
        console.error("Signup Error:", error)

        setMessage(
          "Unable to create account. Please try again."
        )
      }
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Create Account</h1>

        <p className="auth-subtitle">
          Join Smart Traveller Planner
        </p>

        <form onSubmit={handleSignup}>
          <label htmlFor="signup-name">
            Full Name
          </label>

          <input
            id="signup-name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
          />

          <label htmlFor="signup-email">
            Email
          </label>

          <input
            id="signup-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
          />

          <label htmlFor="signup-password">
            Password
          </label>

          <input
            id="signup-password"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
          />

          <label htmlFor="signup-confirm-password">
            Confirm Password
          </label>

          <input
            id="signup-confirm-password"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(event) =>
              setConfirmPassword(event.target.value)
            }
          />

          <button type="submit">
            Create Account
          </button>
        </form>

        {message && (
          <p className="auth-message">
            {message}
          </p>
        )}

        <p className="auth-switch">
          Already have an account?
        </p>

        <button
          type="button"
          className="secondary-auth-button"
          onClick={onShowLogin}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Signup