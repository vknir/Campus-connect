// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCBKS_qTL8Lifxp549b7cfYRSxm9Jaj9bA",
    authDomain: "c-taskboard.firebaseapp.com",
    projectId: "c-taskboard",
    storageBucket: "c-taskboard.firebasestorage.app",
    messagingSenderId: "1068269422250",
    appId: "1:1068269422250:web:a4c9300e2be3a708f432d3",
    measurementId: "G-S4PSWJMNMK"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);