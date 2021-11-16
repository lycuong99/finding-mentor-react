// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFh1dSOmo5gd4ktalf6hdtuEX_7o49pJA",
    authDomain: "finding-mentor-fad7e.firebaseapp.com",
    projectId: "finding-mentor-fad7e",
    storageBucket: "finding-mentor-fad7e.appspot.com",
    messagingSenderId: "281858187944",
    appId: "1:281858187944:web:59f960b35d0b1ff8aa189d",
    measurementId: "G-M2XCTGV1BJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
