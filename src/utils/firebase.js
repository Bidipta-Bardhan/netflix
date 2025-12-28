// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1t2TqXNhDlYEfRB6IGQNa81PuAG7F5Y4",
  authDomain: "netflix-a3e34.firebaseapp.com",
  projectId: "netflix-a3e34",
  storageBucket: "netflix-a3e34.firebasestorage.app",
  messagingSenderId: "582581045608",
  appId: "1:582581045608:web:05ef95b96734ef09e0eedd",
  measurementId: "G-1LPTGBR5ER",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
