import fb from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDGE28jnXwZBY2Fv5qCocH-m41anpYtlY4",
    authDomain: "vue-health-lab-care.firebaseapp.com",
    projectId: "vue-health-lab-care",
    storageBucket: "vue-health-lab-care.appspot.com",
    messagingSenderId: "27288510703",
    appId: "1:27288510703:web:388849174ba0d2681b3b1a"
  };


export const firebase = !fb.getApps().length ? fb.initializeApp(firebaseConfig) : fb.app()