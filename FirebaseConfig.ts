// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqoK4iiklKbI8SYL80gRHSl2mLlMQzie0",
  authDomain: "loginexporapp.firebaseapp.com",
  projectId: "loginexporapp",
  storageBucket: "loginexporapp.appspot.com",
  messagingSenderId: "271186440881",
  appId: "1:271186440881:web:6dd2d6ea3331ba638ba890"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

