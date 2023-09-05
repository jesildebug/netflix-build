import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBluVrEyF_qK-t267GFFX9i9uP1CH1_C-g",
    authDomain: "netfix-clone-56026.firebaseapp.com",
    projectId: "netfix-clone-56026",
    storageBucket: "netfix-clone-56026.appspot.com",
    messagingSenderId: "474328488760",
    appId: "1:474328488760:web:9e836276ddf0f24e287fcd",
    measurementId: "G-EHEF59ZNHW"
  };

 
const app = initializeApp(firebaseConfig);

// Get Authentication service
const auth = getAuth(app);

// Get Firestore service
const db = getFirestore(app);




  export  { auth} ;
  export default db ;
