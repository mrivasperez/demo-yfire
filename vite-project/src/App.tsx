import { useEffect } from "react";
import "./App.css";
import { db } from "./firebase";
import { Timestamp, setDoc, doc } from "firebase/firestore";

function App() {
  // useEffect(() => {
  //   const docData = {
  //     stringExample: "Hello world!",
  //     booleanExample: true,
  //     numberExample: 3.14159265,
  //     dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
  //     arrayExample: [5, true, "hello"],
  //     nullExample: null,
  //     objectExample: {
  //       a: 5,
  //       b: {
  //         nested: "foo"
  //       }
  //     }
  //   };
  //   setDoc(doc(db, "data", "one"), docData);
  // });
  // return <></>;
}

export default App;
