
import { app, auth } from "./firebase.mjs";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


let loginbtn = document.getElementById('loginbtn')

loginbtn.addEventListener('click', (e) => {
    e.preventDefault()
    let email = document.getElementById('email')
    let password = document.getElementById('pass')

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("login");
            
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error === > ", errorMessage);
            
        });
})