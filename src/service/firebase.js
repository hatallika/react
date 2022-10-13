import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAWWDd9vkwew7EkwfKbvNRAtI48k1lr8cI",
    authDomain: "react-lesson-9-9db83.firebaseapp.com",
    projectId: "react-lesson-9-9db83",
    storageBucket: "react-lesson-9-9db83.appspot.com",
    messagingSenderId: "194882445226",
    appId: "1:194882445226:web:fe40923fb510f2ed2895d3"
};
//инициализировали Firebase
const firebaseDb = firebase.initializeApp(firebaseConfig);
console.log(firebaseDb);
export const auth = firebase.auth();