import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
 
 
 
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDJSQTIWURyzI6AROVUWbp5ys0mBmChdOo",
    authDomain: "al-qaida-communication-line.firebaseapp.com",
    databaseURL: "https://al-qaida-communication-line-default-rtdb.firebaseio.com",
    projectId: "al-qaida-communication-line",
    storageBucket: "al-qaida-communication-line.appspot.com",
    messagingSenderId: "321418134420",
    appId: "1:321418134420:web:c2e8e4ef86ddd6fb07c581",
    measurementId: "G-K7M5XDWVH4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();//

  export const auth = firebase.auth;
  export const db = firebase.database();