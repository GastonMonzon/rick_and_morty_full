// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import dotenv from 'dotenv';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

dotenv.config();
const { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_APP_ID } = process.env;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Aunthentication and get a reference to the service
const auth = getAuth(app);
const firestore = getFirestore(app);

setPersistence(auth, 'local')
  .then(() => {
    // Continue with other Firebase operations
  })
  .catch((error) => {
    // Handle persistence enablement error
    console.error('Error enabling persistence:', error);
  });

export default auth;
export { firestore };