// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyC-ZXGXpiIIM5ht6m_3TkSbFEJwzpVTXKc",
    authDomain: "facebook-clone-jhy.firebaseapp.com",
    projectId: "facebook-clone-jhy",
    storageBucket: "facebook-clone-jhy.appspot.com",
    messagingSenderId: "373507623764",
    appId: "1:373507623764:web:7dcbec818eacb7280656c1",
    measurementId: "G-B1TWNLFR48"
};

const firebaseApp = initializeApp(firebaseConfig )
const db  = getFirestore()
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export {auth, provider }
export default db

