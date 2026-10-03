import { doc, setDoc } from "firebase/firestore"
import { db } from "../firebase"

export const saveUserProfile = async (user) => {
  try {
    await setDoc(
      doc(db, "users", user.uid),
      {
        name: user.name,
        email: user.email,
        uid: user.uid
      },
      { merge: true }
    )

    return {
      success: true
    }
  } catch (error) {
    console.error("Error saving user profile:", error)

    return {
      success: false,
      error: error.message
    }
  }
}