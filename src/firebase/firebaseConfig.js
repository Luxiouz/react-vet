import firebase from 'firebase/app'
import "firebase/firestore";
import "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDHjWrLRDqu0cwkvzrVAFtDeEBK67Oapk0",
   authDomain: "vet-proy-react.firebaseapp.com",
   projectId: "vet-proy-react",
   storageBucket: "vet-proy-react.appspot.com",
   messagingSenderId: "1025721684296",
   appId: "1:1025721684296:web:3f03f26079d3671781637d"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore();

 export {db, firebase};