import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
  };
  
  initializeApp(firebaseConfig);
  const _auth = getAuth();
  const _sign = signInWithEmailAndPassword


export const common = {
    data() {
        return {
            auth : _auth,
            sign : _sign,
            endPoint : 'https://localhost:44383/api/',
        };
    },
}