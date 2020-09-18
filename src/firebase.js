import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAx-kePPHN28rSjurK0DR3XUX3acurHsmQ",
    authDomain: "clone-8dca9.firebaseapp.com",
    databaseURL: "https://clone-8dca9.firebaseio.com",
    projectId: "clone-8dca9",
    storageBucket: "clone-8dca9.appspot.com",
    messagingSenderId: "494529245056",
    appId: "1:494529245056:web:dd19f101885502c3da9b65"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};