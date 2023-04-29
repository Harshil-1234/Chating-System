// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import {initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD_K06yDPVW9HzJehLw7TMx8FZD0gMApkg",
  authDomain: "chating-1afd6.firebaseapp.com",
  projectId: "chating-1afd6",
  storageBucket: "chating-1afd6.appspot.com",
  messagingSenderId: "15212111169",
  appId: "1:15212111169:web:65f5a0609d672aa9c96dc0",
  measurementId: "G-0J68G87DEG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
