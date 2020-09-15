import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyALlT4Qe21KbOceCtVr2U1k7Q3wVRiXlQY",
  authDomain: "react-and-firebase-bcad4.firebaseapp.com",
  databaseURL: "https://react-and-firebase-bcad4.firebaseio.com",
  projectId: "react-and-firebase-bcad4",
  storageBucket: "react-and-firebase-bcad4.appspot.com",
  messagingSenderId: "753776575051",
  appId: "1:753776575051:web:1088eb6d39febf55a1c3ce"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export the storage and firestore
export const storage = firebase.storage();
export const firestore = firebase.firestore();
export const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
