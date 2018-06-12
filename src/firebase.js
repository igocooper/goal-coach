import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyATQt40i3PUHxpC41m7cqo8rRIYyv2nQEc",
    authDomain: "goal-coach-9fe20.firebaseapp.com",
    databaseURL: "https://goal-coach-9fe20.firebaseio.com",
    projectId: "goal-coach-9fe20",
    storageBucket: "",
    messagingSenderId: "901536709993"
  };

export const firebaseApp = firebase.initializeApp(config); 