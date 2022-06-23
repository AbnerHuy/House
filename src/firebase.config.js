import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1zAkBt2w0P3NeOKyDZtLkTwYZ1KP6MQg",
  authDomain: "house-marketplace-app-6cbe0.firebaseapp.com",
  projectId: "house-marketplace-app-6cbe0",
  storageBucket: "house-marketplace-app-6cbe0.appspot.com",
  messagingSenderId: "731378530228",
  appId: "1:731378530228:web:25354a6dba3a3020b724e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
