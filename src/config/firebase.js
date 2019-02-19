import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCE9r0eKaMjQFbY2XaUMa_X4JvOODWdbVs",
  authDomain: "alpha-authors-haven-230108.firebaseapp.com"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const FacebookProvider = new firebase.auth.FacebookAuthProvider();
export const TwitterProvider = new firebase.auth.TwitterAuthProvider();
