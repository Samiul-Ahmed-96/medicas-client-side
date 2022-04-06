import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import Routes from './routes';
Vue.config.productionTip = false

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
