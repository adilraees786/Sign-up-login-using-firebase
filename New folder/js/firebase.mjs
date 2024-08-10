
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  const firebaseConfig = {
    apiKey: "AIzaSyDtxx3Fv7GiaEe1sZKMFEtf9ejY-YU4eps",
    authDomain: "first-project-dae17.firebaseapp.com",
    projectId: "first-project-dae17",
    storageBucket: "first-project-dae17.appspot.com",
    messagingSenderId: "1011078811359",
    appId: "1:1011078811359:web:f5aacf7f6f6218b68d236a"
  };

  // Initialize Firebase
export  const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
