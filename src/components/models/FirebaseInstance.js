// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3tpLLZI1dyk7SSuJwEwfqvFJlveAkZuw",
  authDomain: "myprotfolio91.firebaseapp.com",
  projectId: "myprotfolio91",
  storageBucket: "myprotfolio91.appspot.com",
  messagingSenderId: "658055743500",
  appId: "1:658055743500:web:4cc197c71550608b474629",
  measurementId: "G-0CWJVS0VQN"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app