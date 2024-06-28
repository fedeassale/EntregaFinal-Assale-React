import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7WB05TCgVmzyCZhwRrsHidguK2Mgxf74",
  authDomain: "entrega-final-reacts.firebaseapp.com",
  projectId: "entrega-final-reacts",
  storageBucket: "entrega-final-reacts.appspot.com",
  messagingSenderId: "551495923009",
  appId: "1:551495923009:web:b014b789c7ae39d1e39dc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);