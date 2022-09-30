import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASUGKP5OPnjilzT4nEWDD00ysNYmnD0Ug",
  authDomain: "react-cursos-bc20f.firebaseapp.com",
  projectId: "react-cursos-bc20f",
  storageBucket: "react-cursos-bc20f.appspot.com",
  messagingSenderId: "680039891188",
  appId: "1:680039891188:web:e2262cf3f31589bbac5ea1"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );