// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrb4_OFmm5-8zh4bKEDLsr1ZqF72T3q1k",
  authDomain: "meuportfolioforms.firebaseapp.com",
  projectId: "meuportfolioforms",
  storageBucket: "meuportfolioforms.appspot.com",
  messagingSenderId: "723366265972",
  appId: "1:723366265972:web:7345e6aa6c998368313d21",
  measurementId: "G-HHGXFPKQ2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);