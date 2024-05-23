import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbx0cVDHJYTkE6mPmv_VUqVdX-nbtvsts",
  authDomain: "insta-clone-tutorial-3e0d5.firebaseapp.com",
  projectId: "insta-clone-tutorial-3e0d5",
  storageBucket: "insta-clone-tutorial-3e0d5.appspot.com",
  messagingSenderId: "848866116368",
  appId: "1:848866116368:web:ece61c096778f49e321b95",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
