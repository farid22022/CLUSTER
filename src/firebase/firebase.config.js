

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQk3H6Wm8PTaW13s3GoCkcqwSycYBP_Fs",
  authDomain: "cluster-ku.firebaseapp.com",
  projectId: "cluster-ku",
  storageBucket: "cluster-ku.firebasestorage.app",
  messagingSenderId: "180080271770",
  appId: "1:180080271770:web:f2a5801dca63ea72689a23",
  measurementId: "G-W5SCWLR5QG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
