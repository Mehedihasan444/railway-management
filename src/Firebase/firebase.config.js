
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAY8Vyu_4BCcfmrBtxX8umDJRUARrCVYd8",
  authDomain: "railway-management-c0969.firebaseapp.com",
  projectId: "railway-management-c0969",
  storageBucket: "railway-management-c0969.appspot.com",
  messagingSenderId: "877133949855",
  appId: "1:877133949855:web:5b9188c36ceb007b6febaa"
};


const app = initializeApp(firebaseConfig);

const auth =getAuth(app)

export default auth;