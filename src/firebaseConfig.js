import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD8hiBzpDwqP3vvPXDL70YbYVDTNGgicRg",
  authDomain: "react-utn-mod3-3f07e.firebaseapp.com",
  databaseURL: "https://react-utn-mod3-3f07e.firebaseio.com",
  projectId: "react-utn-mod3-3f07e",
  storageBucket: "react-utn-mod3-3f07e.appspot.com",
  messagingSenderId: "247178279385",
  appId: "1:247178279385:web:5ff37cc303a3e8ac2501c8",
  measurementId: "G-DTGDTK1KBE",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);
firebase.auth = firebase.auth();
const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true,
});
firebase.db = db;

export default firebase;
