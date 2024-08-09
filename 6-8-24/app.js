import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

let email=document.getElementById('email')
let pass=document.getElementById('pass')

let loginbtn=document.getElementById('btnlogin')

const firebaseConfig = {
  apiKey: "AIzaSyDtxx3Fv7GiaEe1sZKMFEtf9ejY-YU4eps",
  authDomain: "first-project-dae17.firebaseapp.com",
  projectId: "first-project-dae17",
  storageBucket: "first-project-dae17.appspot.com",
  messagingSenderId: "1011078811359",
  appId: "1:1011078811359:web:20f4b8c5858cfc008d236a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
  

loginbtn.addEventListener('click',function(){
  createUserWithEmailAndPassword(auth, email.value, pass.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("Signed up")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log("codeoferror====> ",errorCode)
    const errorMessage = error.message;
    console.log("Message of Error=====>",errorMessage)
    // ..
  });
})


// //////////////////////

  // Import the functions you need from the SDKs you need
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
//   console.log("App console===",app);
//   console.log("auth console===",auth);


  



  
