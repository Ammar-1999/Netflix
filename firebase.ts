// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkQlDGVxXxrSapXg5a3bgBlkGOUWQf-2o",
  authDomain: "xxxx-a6c5b.firebaseapp.com",
  projectId: "xxxx-a6c5b",
  storageBucket: "xxxx-a6c5b.appspot.com",
  messagingSenderId: "613263200575",
  appId: "1:613263200575:web:9b109dbe86db6ac0d4838a",
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
