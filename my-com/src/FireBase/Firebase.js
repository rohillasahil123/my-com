// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDICzmAuTMkjANL9ApoJFYKlfn5HXhA6xc",
  authDomain: "my-com-7e679.firebaseapp.com",
  projectId: "my-com-7e679",
  storageBucket: "my-com-7e679.firebasestorage.app",
  messagingSenderId: "86856910057",
  appId: "1:86856910057:web:7fee52289ed04e1f5b9c78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)