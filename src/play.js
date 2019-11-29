
const firebase = require("firebase");

require("firebase/firestore");

  var firebaseConfig = {
    apiKey: "AIzaSyD4PrC0HG6QKbdllRNV2Uc1RrEOFydNb6s",
    authDomain: "usurvey-92150.firebaseapp.com",
    databaseURL: "https://usurvey-92150.firebaseio.com",
    projectId: "usurvey-92150",
    storageBucket: "usurvey-92150.appspot.com",
    messagingSenderId: "504779010545",
    appId: "1:504779010545:web:e5d2e346b3ac3ea5439450",
    measurementId: "G-2EBPW2PJWW"
  };
  

  firebase.initializeApp(firebaseConfig);
  


  var db = firebase.firestore();


//   db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });

// // Add a second document with a generated ID.
// db.collection("users").add({
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });

// db.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data().born}`);
//     });
// });