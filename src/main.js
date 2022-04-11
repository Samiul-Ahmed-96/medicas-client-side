import { initializeApp } from "firebase/app";
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import Routes from './routes';
Vue.config.productionTip = false

const firebaseConfig = {
    apiKey: "AIzaSyDGE28jnXwZBY2Fv5qCocH-m41anpYtlY4",
    authDomain: "vue-health-lab-care.firebaseapp.com",
    projectId: "vue-health-lab-care",
    storageBucket: "vue-health-lab-care.appspot.com",
    messagingSenderId: "27288510703",
    appId: "1:27288510703:web:388849174ba0d2681b3b1a"
  };
  
  // Initialize Firebase
initializeApp(firebaseConfig);


Vue.use(VueRouter)

const router = new VueRouter({
  routes : Routes,
  mode: 'history',
})

new Vue({
  vuetify,
  render: h => h(App),
  router: router
}).$mount('#app')
