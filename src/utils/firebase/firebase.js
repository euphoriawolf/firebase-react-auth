import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
  apiKey: 'AIzaSyCwApK1cY8wsAjtPfuhtL4NkG52z5geuF0',
  authDomain: 'dev-dashboard-79a54.firebaseapp.com',
  databaseURL: 'https://dev-dashboard-79a54.firebaseio.com',
  projectId: 'dev-dashboard-79a54',
  storageBucket: 'dev-dashboard-79a54.appspot.com',
  messagingSenderId: '606901963109'
};
// TODO: rename prod Config
const devConfig = {
  apiKey: 'AIzaSyAqJKxAEEQf3vrVstUAh6msd2oSqG95HeU',
  authDomain: 'crypto-dashboard-6f3a5.firebaseapp.com',
  databaseURL: 'https://crypto-dashboard-6f3a5.firebaseio.com',
  projectId: 'crypto-dashboard-6f3a5',
  storageBucket: 'crypto-dashboard-6f3a5.appspot.com',
  messagingSenderId: '977707522901'
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { auth, db };
