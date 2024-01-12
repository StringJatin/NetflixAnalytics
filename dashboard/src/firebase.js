import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDDEimb09HRvg3m5sPg7hakGiZpUEeMnDk",
    authDomain: "netflixanalytics-68111.firebaseapp.com",
    projectId: "netflixanalytics-68111",
    storageBucket: "netflixanalytics-68111.appspot.com",
    messagingSenderId: "428712579826",
    appId: "1:428712579826:web:80d250edabe876cd43766b",
    measurementId: "G-3556BGD1ER"
  };


firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export default storage;


