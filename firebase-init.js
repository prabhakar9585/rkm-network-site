// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBzN-UQl7Ad2KE_fsibeXzFYZeiWviJbao",
  authDomain: "rkm-network.firebaseapp.com",
  projectId: "rkm-network",
  storageBucket: "rkm-network.firebasestorage.app",
  messagingSenderId: "986628552350",
  appId: "1:986628552350:web:b6e63bafb489efb5326d8f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
