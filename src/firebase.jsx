import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCV6WoFqP34EPCJiMDIs5rwA2cmmVe_e8c",
    authDomain: "netflix-clone-860c6.firebaseapp.com",
    projectId: "netflix-clone-860c6",
    storageBucket: "netflix-clone-860c6.appspot.com",
    messagingSenderId: "385182901222",
    appId: "1:385182901222:web:fc4fc797c5755a0257ac27"
};


const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebase.auth();

export {auth};
export default db;