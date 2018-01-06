import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD-pRW8KMDLKwsv63wB9YBpALq_EK-910E",
  authDomain: "hebrewquiz-709e4.firebaseapp.com",
  databaseURL: "https://hebrewquiz-709e4.firebaseio.com",
  projectId: "hebrewquiz-709e4",
  storageBucket: "hebrewquiz-709e4.appspot.com",
  messagingSenderId: "1095423357929"
}

// const config = process.env.NODE_ENV === 'production'
//   ? prodConfig
//   : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
