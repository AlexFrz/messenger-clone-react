import Rebase from "re-base";
import * as firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCCsnfZZ_Vy-jUDVr19BY1P_U6fp_c_Nf0",
  authDomain: "messenger-37c67.firebaseapp.com",
  databaseURL: "https://messenger-37c67.firebaseio.com",
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };
export default base;
