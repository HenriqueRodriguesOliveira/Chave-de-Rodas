import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyBu0Wj5uQnwyvkg8KyUH4u6eLXSGepGxFc",
    authDomain: "app-estacio-8897e.firebaseapp.com",
    projectId: "app-estacio-8897e",
    storageBucket: "app-estacio-8897e.appspot.com",
    messagingSenderId: "535438550735",
    appId: "1:535438550735:web:f6d492afe052a7d6f5b9ba",
    measurementId: "G-G5G02W5X85"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

