
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-37a17.firebaseapp.com",
  projectId: "blog-37a17",
  storageBucket: "blog-37a17.appspot.com",
  messagingSenderId: "406220413820",
  appId: "1:406220413820:web:595915f7a6016962f6a2f9",
  measurementId: "G-8Z4WW2GZ73"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
