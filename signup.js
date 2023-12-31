
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
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
const db = getFirestore(app);
const auth = getAuth();

let register_btn = document.getElementById("register_btn");
register_btn.addEventListener("click", register)
async function register() {
  try {
    let name = document.getElementById("form3Example1c").value;
    let lastname = document.getElementById("form3Example1c").value;
    let reppassword = document.getElementById("form3Example4cd").value;
    let email = document.getElementById("form3Example3c").value;
    let password = document.getElementById("form3Example4c").value;

    if (!name || !lastname || !email || !password || !reppassword) {
      alert("Please fill All Required Field")
      return
    }

    if (password !== reppassword) {
      alert("Password Does Not Match")
      return false
    }

    const userAuth = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userAuth.user.uid)
    const uid = userAuth.user.uid
    const userObj = {
      name,
      lastname,
      email,
      accountActivate: true,
      uid
    }
    console.log(userObj, "userObj")
    const userRef = doc(db, "users", uid);
    const userDB = await setDoc(userRef, userObj)
    console.log(userDB, "userDB")
    window.location.replace("../public/login.html")
  } catch (error) {
    console.log("error", error.message)
    alert(error.message)
  }
}


