// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtlKcVKSBb9BougU87PwnCN18dy-0o4rQ",
  authDomain: "uber-next-clone-a8526.firebaseapp.com",
  projectId: "uber-next-clone-a8526",
  storageBucket: "uber-next-clone-a8526.appspot.com",
  messagingSenderId: "783181421242",
  appId: "1:783181421242:web:8f133dc2a0dc15b8ad8083"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth()

export { app, provider, auth }