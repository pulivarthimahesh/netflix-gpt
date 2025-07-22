// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoFuEtWvRHadaSVJAMasd3qGeNCnt_Dng",
  authDomain: "netflixgpt-bfbce.firebaseapp.com",
  projectId: "netflixgpt-bfbce",
  storageBucket: "netflixgpt-bfbce.firebasestorage.app",
  messagingSenderId: "977208443870",
  appId: "1:977208443870:web:04424d9424d09946d2134f",
  measurementId: "G-J11C8NMWN2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
