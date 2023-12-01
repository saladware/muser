// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWQ8KK1hec2GYlpd_crpWHXlU_XF3gCTE",
  authDomain: "muser-a02df.firebaseapp.com",
  projectId: "muser-a02df",
  storageBucket: "muser-a02df.appspot.com",
  messagingSenderId: "854640229534",
  appId: "1:854640229534:web:768c3ff084da5c23f30f8f",
  measurementId: "G-T6TX4WKF6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);