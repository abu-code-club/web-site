import {initializeApp} from 'firebase';
import fb from 'firebase';

const app = initializeApp(
    {
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: ""
      }
);

const database = app.database();
const authentication = app.auth();
const storage = app.storage();
const firebase = fb;


export {database, authentication, storage, firebase};