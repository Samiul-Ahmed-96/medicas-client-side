import { initializeApp } from 'firebase/app';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import Routes from './routes';
import store from "./store";

const firebaseConfig = {
  apiKey: "AIzaSyDGE28jnXwZBY2Fv5qCocH-m41anpYtlY4",
  authDomain: "vue-health-lab-care.firebaseapp.com",
  projectId: "vue-health-lab-care",
  storageBucket: "vue-health-lab-care.appspot.com",
  messagingSenderId: "27288510703",
  appId: "1:27288510703:web:44e8b1129e46ec311b3b1a"
};

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
})

new Vue({
  vuetify,
  router: router,
  render: h => h(App),
  store,
  created(){
    // Initialize Firebase
     initializeApp(firebaseConfig);
  }
}).$mount('#app');
