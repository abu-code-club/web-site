import {initializeApp} from 'firebase';
import fb from 'firebase';

const app = initializeApp(
    {
        apiKey: "AIzaSyCn2CvoT1BPHeZo0OYT1EYqr8QRdOgHnEE",
        authDomain: "code-club-demo-95047.firebaseapp.com",
        databaseURL: "https://code-club-demo-95047.firebaseio.com",
        projectId: "code-club-demo-95047",
        storageBucket: "code-club-demo-95047.appspot.com",
        messagingSenderId: "441133098429"
      }
);

const database = app.database();
const authentication = app.auth();
const storage = app.storage();
const firebase = fb;


export {database, authentication, storage, firebase};