import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5X4TmY4qVJG_33B5T5AhuSJHXHeR7byQ",
  authDomain: "infinity-blogs.firebaseapp.com",
  projectId: "infinity-blogs",
  storageBucket: "infinity-blogs.appspot.com",
  messagingSenderId: "831581281186",
  appId: "1:831581281186:web:765506c6f15706ee84b0fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
