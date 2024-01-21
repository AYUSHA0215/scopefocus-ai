// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDW7Nwq7VNtnCTBfBJyyghDBc1G3yRWc2Y",
    authDomain: "scopefocus-ai.firebaseapp.com",
    projectId: "scopefocus-ai",
    storageBucket: "scopefocus-ai.appspot.com",
    messagingSenderId: "570379104595",
    appId: "1:570379104595:web:aad24d602d34d5c5fa71a6",
    measurementId: "G-JX1Z3JNGFJ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

export default app;
