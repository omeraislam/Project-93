var firebaseConfig = {
      apiKey: "AIzaSyANwIBYIDt-O75P2pS-dFQlOpExFGr2Rf0",
      authDomain: "kwitter-5de4e.firebaseapp.com",
      databaseURL: "https://kwitter-5de4e-default-rtdb.firebaseio.com",
      projectId: "kwitter-5de4e",
      storageBucket: "kwitter-5de4e.appspot.com",
      messagingSenderId: "135065066180",
      appId: "1:135065066180:web:0077a428bb0f66376dc791"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
