// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged
} from "firebase/auth"
import { getDoc, getFirestore, collection, getDocs, doc, setDoc } from "firebase/firestore"

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

const logInWithGooglePopup = async () => await signInWithPopup(auth, provider)

const logInUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return
    await signInWithEmailAndPassword(auth, email, password)
}

const signUpWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return
    const userAuth = await createUserWithEmailAndPassword(auth, email, password)
    return userAuth
}

const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
    if (!userAuth) return
    const userDocRef = doc(firestore, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)
    if (!userSnapshot.exists()) {
        const { email, displayName } = userAuth
        const createAt = new Date()
        try {
            await setDoc(userDocRef, { email, displayName, createAt, ...additionalInfo, })
        }
        catch (error) {
            console.log("create user failed", error.message)
        }
    }
    return userDocRef
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

const signOutUser = async () => await signOut(auth)

const onAuthStateChangedListner = (callback) => {
    return onAuthStateChanged(auth, callback)
}

export {
    auth,
    logInWithGooglePopup,
    logInUserWithEmailAndPassword,
    signUpWithEmailAndPassword,
    createUserDocumentFromAuth,
    getUserGoogleWithEmail,
    getUserGoogleWithId,
    signOutUser,
    onAuthStateChangedListner
}