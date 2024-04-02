// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3WxeA5b-XKtSj-54P4vlEFr-EqHYdJmo",
  authDomain: "my-chat-app-1b908.firebaseapp.com",
  databaseURL: "https://my-chat-app-1b908-default-rtdb.firebaseio.com",
  projectId: "my-chat-app-1b908",
  storageBucket: "my-chat-app-1b908.appspot.com",
  messagingSenderId: "212881613250",
  appId: "1:212881613250:web:01e264cc1e26991f2af65b",
  measurementId: "G-Y7XGW72HZB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
