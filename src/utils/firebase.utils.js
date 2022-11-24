// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth"
import { getDoc, setDoc } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCT4ji8m3H8t0rYHNuNtRb6CLOu8jQ-his",
    authDomain: "crwn-clothing-db-2cfab.firebaseapp.com",
    projectId: "crwn-clothing-db-2cfab",
    storageBucket: "crwn-clothing-db-2cfab.appspot.com",
    messagingSenderId: "873496949437",
    appId: "1:873496949437:web:1ad81549ff87969bfe7dd4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account"
})
const auth = getAuth(firebaseApp)

const signInWithGooglePopup = async () => await signInWithPopup(auth, provider)

const signInWithGoogleEmailAndPassword = async (email, password) => await signInWithEmailAndPassword(auth, email, password)

export {
    auth, signInWithGooglePopup, signInWithGoogleEmailAndPassword
}