import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Livam Solutions Ltd Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8-Cy7aZYrua2ik1UKB9SR_EbFg11fJl4",
  authDomain: "livam-solutions-ltd.firebaseapp.com",
  projectId: "livam-solutions-ltd",
  storageBucket: "livam-solutions-ltd.firebasestorage.app",
  messagingSenderId: "900940104703",
  appId: "1:900940104703:web:5c2d14bc7282e382b01dca",
  measurementId: "G-FPCTD9GQXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics where supported
let analytics = null;

isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});

export { app, db, analytics };
export default db;