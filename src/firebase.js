// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import {initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAAQA_4XHu6kGVJTPJQH_qLsvBRYIUuuHw",
  authDomain: "discord-clone-20115.firebaseapp.com",
  projectId: "discord-clone-20115",
  storageBucket: "discord-clone-20115.appspot.com",
  messagingSenderId: "821457066291",
  appId: "1:821457066291:web:83ff613a2c8cc5bba24646",
  measurementId: "G-7ZTTM2ZPZF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
