// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDftcfaaoHasKTR7ILmW51oNWC0O_j1i6M",
  authDomain: "microproyecto2-b9ddb.firebaseapp.com",
  projectId: "microproyecto2-b9ddb",
  storageBucket: "microproyecto2-b9ddb.appspot.com",
  messagingSenderId: "1025898985350",
  appId: "1:1025898985350:web:9b1faf939e154b04519e07",
  measurementId: "G-GR19WL4NDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
export {googleProvider, auth}
