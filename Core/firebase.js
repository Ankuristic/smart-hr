import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/firebase-database";

const firebaseConfig = {
  apiKey: "AIzaSyCvtNPlCp6QbBpUBeTgtdk0nEuKNl2NC3A",
  authDomain: "chatapp-fa273.firebaseapp.com",
  databaseURL: "https://chatapp-fa273-default-rtdb.firebaseio.com",
  projectId: "chatapp-fa273",
  storageBucket: "chatapp-fa273.appspot.com",
  messagingSenderId: "844820289357",
  appId: "1:844820289357:web:ff59001b283c9ab2c48904",
  measurementId: "G-3QCGV72SYG",
};
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const db = firebase.database();
