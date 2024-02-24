// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEQxo7CPdhLPGCNmWGMU9e3bRwYLGUVVc",
  authDomain: "project-expo-14af6.firebaseapp.com",
  projectId: "project-expo-14af6",
  storageBucket: "project-expo-14af6.appspot.com",
  messagingSenderId: "261768562912",
  appId: "1:261768562912:web:396bfe1b71bc1394fa2885",
  measurementId: "G-RX9S41HSL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app)
export {auth,storage,db};