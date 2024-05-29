// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYGParBBn5QyZKhUw0d7necaoiZOjTueA",
  authDomain: "jyllandsparkzoo-b84ba.firebaseapp.com",
  databaseURL: "https://jyllandsparkzoo-b84ba-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "jyllandsparkzoo-b84ba",
  storageBucket: "jyllandsparkzoo-b84ba.appspot.com",
  messagingSenderId: "174240836438",
  appId: "1:174240836438:web:e18dafe48dae46a98504f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);