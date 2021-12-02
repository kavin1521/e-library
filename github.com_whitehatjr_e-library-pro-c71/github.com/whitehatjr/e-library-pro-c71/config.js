import firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyAYEf_KzdT0DtxgYmaTav8hWcoCbK2qxWk",
  authDomain: "e-libary-95f06.firebaseapp.com",
  projectId: "e-libary-95f06",
  storageBucket: "e-libary-95f06.appspot.com",
  messagingSenderId: "129031205683",
  appId: "1:129031205683:web:99e3a990c7a7fa96504446"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
