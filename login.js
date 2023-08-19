import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
  import { getAuth ,createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyBAylwsXCNpT5BNUpPeZSU4wDJlv3oF6ls",
    authDomain: "personal-blogging-app-b6b2b.firebaseapp.com",
    projectId: "personal-blogging-app-b6b2b",
    storageBucket: "personal-blogging-app-b6b2b.appspot.com",
    messagingSenderId: "699877357197",
    appId: "1:699877357197:web:7c88a71d638aa17c0f54c4",
    measurementId: "G-4L6PNG3G4Q"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = getAuth();

  const login_btn = document.getElementById("login_btn");

  login_btn.addEventListener("click", function () {
    let emails = document.getElementById("form3Example3c");
    let passwords = document.getElementById("form3Example4c");

    signInWithEmailAndPassword(auth, emails.value, passwords.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("user==>", user);
      window.location.replace("../public/dashboard.html")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert (errorMessage);
    });
  
    })