import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC8PVVW5GaJb8IkBzFfkB0jCNijb37WqEQ",
    authDomain: "deakin-web-app-5ccb9.firebaseapp.com",
    projectId: "deakin-web-app-5ccb9",
    storageBucket: "deakin-web-app-5ccb9.appspot.com",
    messagingSenderId: "907841332941",
    appId: "1:907841332941:web:fe0f66ac5f7d2391feeb84"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);   const userSnapshot = await getDoc(userDocRef);


    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        }catch (error) {
            console.log('Failed to create account ', error.message)
        }
    }return userDocRef;
}



export const createAuthUserWithEmailAndPassword = async (email, password) => {

    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signinAuthUserWithEmailAndPassword = async (email, password) => {
    
    if (!email || !password) return;
    
    return await signInWithEmailAndPassword(auth, email, password)
}
