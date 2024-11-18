// Import the functions you need from the Firebase SDK
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyD5HuyhrB_616sKl8wcEbkJ6t4ncmV4fkI",
  authDomain: "bits-of-code-305f3.firebaseapp.com",
  projectId: "bits-of-code-305f3",
  storageBucket: "bits-of-code-305f3.appspot.com",
  messagingSenderId: "883150582696",
  appId: "1:883150582696:web:f6f3f7abff6434e3a2239d",
  measurementId: "G-NKENGTJ0EL"
};

// Initialize Firebase App (check if not already initialized)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Analytics (browser only)
let analytics = null;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };
