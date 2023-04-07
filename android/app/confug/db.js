import * as firebase from 'firebase';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwvFvZSVXuUpYoV6XPU2N7OH9C2fAqGRk",
  authDomain: "vgtu-app-9a58d.firebaseapp.com",
  projectId: "vgtu-app-9a58d",
  storageBucket: "vgtu-app-9a58d.appspot.com",
  messagingSenderId: "305836683096",
  appId: "1:305836683096:web:88f9e29142aa3efda47f2d",
  measurementId: "G-EM1EBXM2MN"
};

// Initialize Firebase
export const auth = getAuth(app);
const app = initializeApp(firebaseConfig);
export default app;




