// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmo5TYhSGsl8DDySPJUKcJPzUOIfBiUzw",
  authDomain: "hackathon-e8270.firebaseapp.com",
  projectId: "hackathon-e8270",
  storageBucket: "hackathon-e8270.appspot.com",
  messagingSenderId: "416822541057",
  appId: "1:416822541057:web:d4a961cb8b433b6a183900"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);