// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUmzD9xPo5e5RXjGn5MNDWj9PORGkdPuo",
  authDomain: "genious-car-shop.firebaseapp.com",
  projectId: "genious-car-shop",
  storageBucket: "genious-car-shop.appspot.com",
  messagingSenderId: "395082611526",
  appId: "1:395082611526:web:72327bbdcc2e5e5d724347"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;