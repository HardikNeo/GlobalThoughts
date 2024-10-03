import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";

import {
    getDatabase,
    ref,
    push,
    onValue,
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBeiEhqtzoZsmGu11E-OA-u1V37Omnb2x8",
    authDomain: "globalthoughts-bf702.firebaseapp.com",
    projectId: "globalthoughts-bf702",
    storageBucket: "globalthoughts-bf702.appspot.com",
    messagingSenderId: "540148481086",
    appId: "1:540148481086:web:e1754da6bbae4d3c64a56f"
  };

  const app = initializeApp(firebaseConfig);

  const database = getDatabase(app);
  const referenceInDB = ref(database, "thoughts")
   
  push(referenceInDB, "hello")