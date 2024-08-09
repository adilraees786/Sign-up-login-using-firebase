
import { app, auth } from "./firebase.mjs";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getStorage, getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const db = getFirestore(app);

let signupbtn = document.getElementById('signupbtn')

signupbtn.addEventListener('click', function (e) {

    e.preventDefault()
    let userName = document.getElementById('input-name').value;
    let phone = document.getElementById('input-phone').value;
    let email = document.getElementById('input-email').value;
    let dob = document.getElementById('input-dob').value;
    let password = document.getElementById('input-password').value;

    console.log(userName);
    console.log(phone);
    console.log(email);
    console.log(dob);
    console.log(password);

    async function getValues() {
        try {
            const docRef = await addDoc(collection(db, "users"), {
                Name : userName,
                phoneNumber : phone,
                userEmail : email,
                dateOfBirth : dob,
                Password : password 
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }


    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            getValues()

            console.log('create account');

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log('Error === > ', errorCode);

            // ..
        });

})