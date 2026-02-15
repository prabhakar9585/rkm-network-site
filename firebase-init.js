// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

// Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBzN-UQl7Ad2KE_fsibeXzFYZeiWviJbao",
  authDomain: "rkm-network.firebaseapp.com",
  projectId: "rkm-network",
  storageBucket: "rkm-network.firebasestorage.app",
  messagingSenderId: "986628552350",
  appId: "1:986628552350:web:b6e63bafb489efb5326d8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Services
export const db = getFirestore(app);
export const auth = getAuth(app);
