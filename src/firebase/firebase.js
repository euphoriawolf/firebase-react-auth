import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const prodConfig = {
  apiKey: "AIzaSyCwApK1cY8wsAjtPfuhtL4NkG52z5geuF0",
  authDomain: "dev-dashboard-79a54.firebaseapp.com",
  databaseURL: "https://dev-dashboard-79a54.firebaseio.com",
  projectId: "dev-dashboard-79a54",
  storageBucket: "dev-dashboard-79a54.appspot.com",
  messagingSenderId: "606901963109"
};
// TODO: rename prod Config
const devConfig = {
  apiKey: "AIzaSyCwApK1cY8wsAjtPfuhtL4NkG52z5geuF0",
  authDomain: "dev-dashboard-79a54.firebaseapp.com",
  databaseURL: "https://dev-dashboard-79a54.firebaseio.com",
  projectId: "dev-dashboard-79a54",
  storageBucket: "dev-dashboard-79a54.appspot.com",
  messagingSenderId: "606901963109"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();

export { auth, db };
