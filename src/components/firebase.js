import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyAvMAvrVlEZvcdDyoqafpn8iITnh-a51I0",
    authDomain: "portfoliolab-c9282.firebaseapp.com",
    databaseURL: "https://portfoliolab-c9282.firebaseio.com",
    projectId: "portfoliolab-c9282",
    storageBucket: "portfoliolab-c9282.appspot.com",
    messagingSenderId: "829780221566",
    appId: "1:829780221566:web:e6e3be2394f5ea6e74822f",
    measurementId: "G-5N5E2TG4SL"
    };

  const firebase = app.initializeApp(config)
  
 

  
  export default firebase
