import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCD-UTc-qFu_XZ3t6BkOaBYUOWZOc_2WtM",
  authDomain: "carrot-market-7016b.firebaseapp.com",
  databaseURL:
    "https://carrot-market-7016b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "carrot-market-7016b",
  storageBucket: "carrot-market-7016b.appspot.com",
  messagingSenderId: "950773668720",
  appId: "1:950773668720:web:42077e0dfba16e97c28db5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);
