// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk4K7Nn2-d-9x4hGy72i5v2xKXhmcKbZA",
  authDomain: "fureverhome-59d6a.firebaseapp.com",
  projectId: "fureverhome-59d6a",
  storageBucket: "fureverhome-59d6a.appspot.com",
  messagingSenderId: "207077064291",
  appId: "1:207077064291:web:9c70c424f1d8d780cb8256",
  measurementId: "G-0N6GSE2H7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
export default app;
