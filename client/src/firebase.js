// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-38e1e.firebaseapp.com",
  projectId: "mern-estate-38e1e",
  storageBucket: "mern-estate-38e1e.appspot.com",
  messagingSenderId: "799669028654",
  appId: "1:799669028654:web:82ecbbd6d925ee630a1cbf",
  measurementId: "G-EN01CRJ1CZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
