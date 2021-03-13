import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyDra0Llv6bAgRx85fubFysGpaRrkscP64I",
  authDomain: "knowhere-b4c0d.firebaseapp.com",
  projectId: "knowhere-b4c0d",
  storageBucket: "knowhere-b4c0d.appspot.com",
  messagingSenderId: "297773987587",
  appId: "1:297773987587:web:c28c6da5db90783118db36"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
