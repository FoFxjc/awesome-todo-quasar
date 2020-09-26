import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyCXpjkHVWIzz9o1CdNc7sNZ82gMcOCBvNQ",
  authDomain: "awesome-todo-d9562.firebaseapp.com",
  databaseURL: "https://awesome-todo-d9562.firebaseio.com",
  projectId: "awesome-todo-d9562",
  storageBucket: "awesome-todo-d9562.appspot.com",
  messagingSenderId: "443843833244",
  appId: "1:443843833244:web:a500e111caca66bd5cac59"
};
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();

export { firebaseAuth, firebaseDb };
