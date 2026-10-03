import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth"

import { auth } from "../firebase";


// SIGN UP
export const signupUser = async (name, email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )

  const user = userCredential.user

  await updateProfile(user, {
    displayName: name
  })

  return user
}


// LOGIN
export const loginUser = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  )

  return userCredential.user
}


// LOGOUT
export const logoutUser = async () => {
  await signOut(auth)
}