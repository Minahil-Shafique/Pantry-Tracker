// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0gtAJdiQK9VDOpBi3Ka062Q2jTJnwLg0",
  authDomain: "pantry-tracker-38964.firebaseapp.com",
  projectId: "pantry-tracker-38964",
  storageBucket: "pantry-tracker-38964.appspot.com",
  messagingSenderId: "227311684500",
  appId: "1:227311684500:web:963aa28e8e93745a591d81"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

