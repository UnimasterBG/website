import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBiDsMJYAhqYCAx9b1S4dBBH6-R6thDmtk",
    authDomain: "unimaster-ead43.firebaseapp.com",
    projectId: "unimaster-ead43",
    storageBucket: "unimaster-ead43.firebasestorage.app",
    messagingSenderId: "827612357414",
    appId: "1:827612357414:web:9fd12c90e432e62f1197e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

// Export services for use in other files
export { db, storage, auth };
