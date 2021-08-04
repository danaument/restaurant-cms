import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
//   apiKey: "AIzaSyCx4Mf1W2XwtvnKGC4uMdGhUmjt-xIlpMw",
//   authDomain: "zombie-parent.firebaseapp.com",
//   projectId: "zombie-parent",
//   storageBucket: "zombie-parent.appspot.com",
//   messagingSenderId: "173514123874",
//   appId: "1:173514123874:web:448ff3f2e92527abf17f3b",
//   measurementId: "G-VQNPB9QYVR",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const Fire = firebase;
export default Fire;