// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3wx2THU32t2hQKA3QG6GnWQJgZ6zOOT4",
  authDomain: "ph-assignment09-toy-seller-web.firebaseapp.com",
  projectId: "ph-assignment09-toy-seller-web",
  storageBucket: "ph-assignment09-toy-seller-web.firebasestorage.app",
  messagingSenderId: "353798288753",
  appId: "1:353798288753:web:d4eaad7ce86a296d6f72d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);