//firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
 
const firebaseConfig = {
  apiKey: "AIzaSyACrpJLnfgSJYxDJhqbYTPedHFzVAJKSWQ",
  authDomain: "proyecto3er-2c7ef.firebaseapp.com",
  projectId: "proyecto3er-2c7ef",
  storageBucket: "proyecto3er-2c7ef.appspot.com",
  messagingSenderId: "111176301332",
  appId: "1:111176301332:web:6995fd3aaf309a52362001"
};
 
firebase.initializeApp(firebaseConfig);
 
const db = firebase.firestore();
 
export { db };