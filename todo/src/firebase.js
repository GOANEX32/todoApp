// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtDDsqnnUoZW2jJhIi1CtDc8s-mVnKef0",
  authDomain: "todoapp-81863.firebaseapp.com",
  projectId: "todoapp-81863",
  storageBucket: "todoapp-81863.appspot.com",
  messagingSenderId: "165493647531",
  appId: "1:165493647531:web:ea79c2ad789a4bf040afee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)