// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo0o601K1c0f9fJmLzPV6q3PGjQebQeHE",
  authDomain: "firebas-auth-with-react-router.firebaseapp.com",
  projectId: "firebas-auth-with-react-router",
  storageBucket: "firebas-auth-with-react-router.appspot.com",
  messagingSenderId: "983972171242",
  appId: "1:983972171242:web:da03430eef82380979b693",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
