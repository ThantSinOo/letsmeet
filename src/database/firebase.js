// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7CWcMTwTPUjHF-NxRvPQjrNvcqbmSkv4",
  authDomain: "let-s-meet-b5531.firebaseapp.com",
  projectId: "let-s-meet-b5531",
  storageBucket: "let-s-meet-b5531.appspot.com",
  messagingSenderId: "779889861389",
  appId: "1:779889861389:web:42d7a3b6a0ecf219fec644"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db