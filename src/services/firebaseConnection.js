import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyDEiziMhTntgC0d1_R4hcCLy-JrzS6Q9Uk",
    authDomain: "chave-de-rodas-a7389.firebaseapp.com",
    projectId: "chave-de-rodas-a7389",
    storageBucket: "chave-de-rodas-a7389.appspot.com",
    messagingSenderId: "414655923254",
    appId: "1:414655923254:web:bbb2b00304db6619dac497",
    measurementId: "G-FYVP002PN9"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

