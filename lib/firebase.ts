import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzQjnY9g8KruenXCeh9w-4lDKISZwmUVU",
  authDomain: "onelightinteractive-6aa80.firebaseapp.com",
  projectId: "onelightinteractive-6aa80",
  storageBucket: "onelightinteractive-6aa80.firebasestorage.app",
  messagingSenderId: "193990061627",
  appId: "1:193990061627:web:e2147f6bf1212e8c62761e",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);