// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwefyvcpJPBS18Mj7ZPJcwUsg2K8QBijI",
    authDomain: "react-curso-fernando-8ab7c.firebaseapp.com",
    projectId: "react-curso-fernando-8ab7c",
    storageBucket: "react-curso-fernando-8ab7c.appspot.com",
    messagingSenderId: "164384529530",
    appId: "1:164384529530:web:05588299dd1dc442822fc3",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
