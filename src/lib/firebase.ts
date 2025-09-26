// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUHiVmCu4Hfo1_x0PA7-LBcB1nZ-3Jgas",
  authDomain: "prospeera-853b2.firebaseapp.com",
  projectId: "prospeera-853b2",
  storageBucket: "prospeera-853b2.firebasestorage.app",
  messagingSenderId: "541675951559",
  appId: "1:541675951559:web:b12c82153fa0c0d53b75e2",
  measurementId: "G-HM1NYWH6GT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
