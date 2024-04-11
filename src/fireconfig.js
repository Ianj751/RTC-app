// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY || 'mock_key',
  authDomain: process.env.REACT_APP_AUTH_DOMAIN || 'mock_key',
  databaseURL: process.env.REACT_APP_DATABASE_URL || 'mock_key',
  projectId: process.env.REACT_APP_PROJECT_ID || 'mock_key',
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET || 'mock_key',
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID || 'mock_key',
  appId: process.env.REACT_APP_ID || 'mock_key',
  measurementId: process.env.REACT_APP_MEASUREMENT_ID || 'mock_key',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
