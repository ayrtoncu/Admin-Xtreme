// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP2uwB3BYqsdI9u95nOl-irx9WeSkyKjY",
  authDomain: "xtreme-system-reserved.firebaseapp.com",
  databaseURL: "https://xtreme-system-reserved-default-rtdb.firebaseio.com",
  projectId: "xtreme-system-reserved",
  storageBucket: "xtreme-system-reserved.appspot.com",
  messagingSenderId: "847683167109",
  appId: "1:847683167109:web:070e396455f1856daa5aec"
};

// Initialize Firebase
export const appfirebase = initializeApp(firebaseConfig);