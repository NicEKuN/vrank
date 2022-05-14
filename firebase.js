// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBRl_hLGekUL-5F7DBoFE61LKQSABFCnS8",
    authDomain: "vtuber-ranking-a43b1.firebaseapp.com",
    databaseURL: "https://vtuber-ranking-a43b1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "vtuber-ranking-a43b1",
    storageBucket: "vtuber-ranking-a43b1.appspot.com",
    messagingSenderId: "695015726283",
    appId: "1:695015726283:web:21b591ad67114f65978f4e",
    measurementId: "G-X1RWBEX65W"
  };
console.log(!getApps().length)
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };