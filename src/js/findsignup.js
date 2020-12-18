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
//Initiate database and save data
document.getElementById("fsignup").addEventListener("submit",function(e){
    e.preventDefault();
    var email =document.getElementById("ema");
    var psw =document.getElementById("password");
    firebase.auth().createUserWithEmailAndPassword(email.value, psw.value)
    .then(function(response){
        alert("Successfully Signed Up");
        console.log(response);
        firebase.database().ref("Sign Up").push({
            email: ema.value,
            psw: password.value,
            email:firebase.auth().currentUser.email
        })
        firebase.auth().signOut().then(function(){
          email.value="";
        psw.value="";   
        })
       
    })
    .catch(function(error){
        //Error Handling
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    });
    
});

var emailField = document.getElementById("email");
var button = document.getElementById("submit");
var response = document.getElementById("response");

button.addEventListener("click", function () {
  var email = emailField.value;
  if (validateEmail(email)) {
    response.innerHTML = "Successfully Signed Up"
  } else {
    response.innerHTML = "Sorry, Enter valid Email!! 😩";
  }
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

    