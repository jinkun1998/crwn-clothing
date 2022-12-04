// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth"
import { getDoc, getFirestore, collection, addDoc, getDocs, doc } from "firebase/firestore"

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
const firestore = getFirestore(firebaseApp)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account"
})
const auth = getAuth(firebaseApp)

const userCollection = collection(firestore, "users")

const signInWithGooglePopup = async () => await signInWithPopup(auth, provider)

const signInWithGoogleEmailAndPassword = async (email, password) => await signInWithEmailAndPassword(auth, email, password)

const createUserGoogleWithEmailAndPassword = async (email, password, fullname) => {
    const userRef = await addDoc(userCollection, { email: email || null, password: password || null, fullname: fullname || null, createAt: new Date() })
    return userRef.id
}

const getUserGoogleWithEmail = async (email) => {
    const userSnapshot = await getDocs(userCollection)
    const userRef = userSnapshot.docs.filter((doc) => {
        return doc.data().email === email
    })
    return userRef[0]?.id
}

const getUserGoogleWithId = async (id) => {
    const userSnapshot = await getDoc(doc(firestore, "users", id))
    return userSnapshot.data()
}

export {
    auth,
    signInWithGooglePopup,
    signInWithGoogleEmailAndPassword,
    createUserGoogleWithEmailAndPassword,
    getUserGoogleWithEmail,
    getUserGoogleWithId
}