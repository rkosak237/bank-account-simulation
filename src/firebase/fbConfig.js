import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

//configuration from account
const config = {
  apiKey: "AIzaSyDYJvxUhzMGZwuJMI3wUCxOv5fh1udZZ94",
  authDomain: "bank-simulation-login.firebaseapp.com",
  databaseURL: "https://bank-simulation-login.firebaseio.com",
  projectId: "bank-simulation-login",
  storageBucket: "bank-simulation-login.appspot.com",
  messagingSenderId: "748421851376"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;