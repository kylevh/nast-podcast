import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDM6W9OI2jGHaJodtH1odMvZTQ_LfLOzLM",
    authDomain: "nast-site-34da1.firebaseapp.com",
    projectId: "nast-site-34da1",
    storageBucket: "nast-site-34da1.appspot.com",
    messagingSenderId: "316493165513",
    appId: "1:316493165513:web:b61fbd94641b7d1ce5ae18"
};



firebaseConfig.initializeApp(firebaseConfig);

const projectStorage=firebase.storage();
const projectFireStore=firebase.firestore();
const timestamp=firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage,projectFireStore,timestamp};