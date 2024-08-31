import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAjtysb20tRLQeYg-3WJOSYrrv2fY47KQ",
  authDomain: "showtimax.firebaseapp.com",
  projectId: "showtimax",
  storageBucket: "showtimax.appspot.com",
  messagingSenderId: "882120751019",
  appId: "1:882120751019:web:5382f54aa7f8c2137e84ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
