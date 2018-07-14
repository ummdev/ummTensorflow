const firebase = require('firebase');
require('dotenv').config();
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_Bucket,
    messagingSenderId: process.env.FIREBASE_MEG_ID
  };
const app = firebase.initializeApp(config);

module.exports = app