import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDHGd2qk10XY9sat1plIiXFODnaSAnZFoA",
  authDomain: "book-santa-19903.firebaseapp.com",
  projectId: "book-santa-19903",
  storageBucket: "book-santa-19903.appspot.com",
  messagingSenderId: "252257957227",
  appId: "1:252257957227:web:c6c615821a01da17d4082e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
