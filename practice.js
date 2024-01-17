const firebaseConfig = {
  apiKey: "AIzaSyDhS5U0atFntmkgIR47xpCvx_iALgPDlo8",
  authDomain: "ociales-28fdb.firebaseapp.com",
  databaseURL: "https://ociales-28fdb-default-rtdb.firebaseio.com",
  projectId: "ociales-28fdb",
  storageBucket: "ociales-28fdb.appspot.com",
  messagingSenderId: "23676696954",
  appId: "1:23676696954:web:7e4aa0ff37f57022fc7ec3"
};

// Initialize firebase
const app = firebase.initializeApp(firebaseConfig);


function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


