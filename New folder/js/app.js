
// import { app, auth } from "./firebase.mjs";
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
// import { getStorage, getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// const db = getFirestore(app);

// let signupbtn = document.getElementById('signupbtn')

// signupbtn.addEventListener('click', function (e) {

//     e.preventDefault()
//     let userName = document.getElementById('input-name').value;
//     let phone = document.getElementById('input-phone').value;
//     let email = document.getElementById('input-email').value;
//     let dob = document.getElementById('input-dob').value;
//     let password = document.getElementById('input-password').value;

//     console.log(userName);
//     console.log(phone);
//     console.log(email);
//     console.log(dob);
//     console.log(password);

//     async function getValues() {
//         try {
//             const docRef = await addDoc(collection(db, "users"), {
//                 Name : userName,
//                 phoneNumber : phone,
//                 userEmail : email,
//                 dateOfBirth : dob,
//                 Password : password 
//             });
//             console.log("Document written with ID: ", docRef.id);
//         } catch (e) {
//             console.error("Error adding document: ", e);
//         }
//     }


//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed up 
//             const user = userCredential.user;

//             getValues()

//             console.log('create account');

//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;

//             console.log('Error === > ', errorCode);

//             // ..
//         });

// })



////
import { app, auth } from "./firebase.mjs";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// Initialize Firestore
const db = getFirestore();

// create account javascript
let createAcc = document.getElementById('signupbtn');

function submit(e) {
    e.preventDefault();

    const userName = document.getElementById('input-name').value;
    const email = document.getElementById('input-email').value;
    const phoneNo = document.getElementById('input-phone').value;
    const dob = document.getElementById('input-dob').value;
    // const city = document.getElementById('city').value;
    const password = document.getElementById('input-password').value;
    // const passwordReEnter = document.getElementById('input-password').value;
    // const maleRadio = document.getElementById('male');
    // const femaleRadio = document.getElementById('female');
    // let gender = null;

    // if (maleRadio.checked) {
    //     gender = "male"
    // } else if (femaleRadio.checked) {
    //     gender = "female"
    // }

    // check if input values are not empty or null
    if (userName &&
        email &&
        phoneNo &&
        dob &&
        // city &&
        password 
        // passwordReEnter 
        ) {

        // check if passwords match
        // if (password !== passwordReEnter) {
        //     alert('Passwords do not match');
        //     return;
        // }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) =>
            {
                const user = userCredential.user;
                // Store user data in Firestore
                return setDoc(doc(db, "users", user.uid), {
                    userName: userName,
                    email: email,
                    phoneNo: phoneNo,
                    dob: dob
                    // city: city,
                    // gender: gender
                });
            })
            .then((userCredential) =>
            {
                // Signed up 
                console.log('create Acc');
                window.location.href = 'html/login.html'
            })
            .catch((error) =>
            {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('error Code ==>', errorCode);
                console.log('error Message ==>', errorMessage);
                if (errorCode == "auth/email-already-in-use") {
                    alert("This email is already registered");
                } else {
                    alert(errorMessage);
                }
            });
        alert('Account created successfully!');
    } else {
        alert('Please fill in all fields');
    }
}

createAcc.addEventListener('click', submit)