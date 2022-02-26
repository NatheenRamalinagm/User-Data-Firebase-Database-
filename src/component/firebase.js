import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCTWiEOGdeTNqpbtzGkFkoDWaxRXyGI3Pw",
    authDomain: "user-data-9b105.firebaseapp.com",
    projectId: "user-data-9b105",
    storageBucket: "user-data-9b105.appspot.com",
    messagingSenderId: "937889320051",
    appId: "1:937889320051:web:8b8cf4a36a7e2d2b736e06"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };




