const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyAQxr5FV8ltbwAq_DptwdOcyNELCvrqoA4",
    authDomain: "react-firebase-6885f.firebaseapp.com",
    projectId: "react-firebase-6885f",
    storageBucket: "react-firebase-6885f.appspot.com",
    messagingSenderId: "440003612186",
    appId: "1:440003612186:web:1f0019b4eb28eb5bec8ba3"
  };

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

module.exports = firebase