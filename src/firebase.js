import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC2--aH3xr4BGrUkhJlHQ1kgAD8LV7s-es",
  authDomain: "ecommerce-1892c.firebaseapp.com",
  databaseURL: "https://ecommerce-1892c.firebaseio.com",
  projectId: "ecommerce-1892c",
  storageBucket: "ecommerce-1892c.appspot.com",
  messagingSenderId: "252632593176",
  appId: "1:252632593176:web:789367fa7c4dab8265246d",
  measurementId: "G-J9TVBE2BP5",
});


const auth = firebase.auth();

export { auth};