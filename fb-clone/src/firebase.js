// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyAgskEpP2vo6o90IA5GfldvAwBGEPFLDN4",
    authDomain: "facebook-clone-5a055.firebaseapp.com",
    projectId: "facebook-clone-5a055",
    storageBucket: "facebook-clone-5a055.appspot.com",
    messagingSenderId: "1054768910418",
    appId: "1:1054768910418:web:efda0547277d96aee94f8b",
    measurementId: "G-7ZR32TW53M"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;