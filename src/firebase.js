import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB0fRrslqc6DB4J3Gb1TgcDhz6xJBauvEE",
  authDomain: "smart-traveller-planner.firebaseapp.com",
  projectId: "smart-traveller-planner",
  storageBucket: "smart-traveller-planner.firebasestorage.app",
  messagingSenderId: "821411009616",
  appId: "1:821411009616:web:54f662a4f1fefaae7f6d55",
  measurementId: "G-JP9M95JJ4H"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
export default app