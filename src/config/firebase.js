import {getAnalytics} from "firebase/analytics";
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD39YY-tQCOVtPkpDJtWKIlVd9KxVVwKw8",
  authDomain: "hdi-hr-project.firebaseapp.com",
  projectId: "hdi-hr-project",
  storageBucket: "hdi-hr-project.appspot.com",
  messagingSenderId: "336698306395",
  appId: "1:336698306395:web:725e5de4ee3c00f09f747e",
  measurementId: "G-E5QY0EL9X6",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
