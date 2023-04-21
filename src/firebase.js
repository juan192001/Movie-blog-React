import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyDXg4pr_0dxaj0aY0SF4rkXLjJfGCIL14w",
    authDomain: "movies-react-d8a5b.firebaseapp.com",
    projectId: "movies-react-d8a5b",
    storageBucket: "movies-react-d8a5b.appspot.com",
    messagingSenderId: "898976083129",
    appId: "1:898976083129:web:3cb5c895cde437e4197f68",
    measurementId: "G-HRVPMG4HDH"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
