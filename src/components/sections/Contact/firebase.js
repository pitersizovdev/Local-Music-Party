import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBNF0nIzDlfR1jtLqttmw6QDPUH4HS5K88",
  authDomain: "local-music-party.firebaseapp.com",
  databaseURL: "https://local-music-party-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "local-music-party",
  storageBucket: "local-music-party.appspot.com",
  messagingSenderId: "520162479661",
  appId: "1:520162479661:web:5cde0e0b48cea64f40b2a4"
};

const app = initializeApp(firebaseConfig);
