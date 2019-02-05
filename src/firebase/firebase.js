import * as firebase from "firebase";

//configuration from account
const config = {
  apiKey: "AIzaSyCNMyFJLpArDwYsqJSmEG3Clj55nSFsS4Q",
  authDomain: "authentication-app-9f806.firebaseapp.com",
  databaseURL: "https://authentication-app-9f806.firebaseio.com",
  projectId: "authentication-app-9f806",
  storageBucket: "authentication-app-9f806.appspot.com",
  messagingSenderId: "359668933712"
};


const databaseRef = firebase.initializeApp(config);
const timestamp  = firebase().settings({ timestampsInSnapshots: true});
export default firebase;