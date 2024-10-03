import { initializeApp } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "x",
  authDomain: 'x',
  databaseURL: "x",
  projectId: 'dev',
  storageBucket: "x",
  messagingSenderId: "x",
  appId: "x",
  measurementId: "x"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
connectFirestoreEmulator(db, "127.0.0.1", 8080);
