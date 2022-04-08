

import AboutUs from './components/About/About.vue';
import DetailService from './components/DetailService/DetailService.vue';
import Doctors from './components/Home/Doctors/Doctors.vue';
import HtmlVue from './components/Home/Doctors/HtmlVueTable.vue';
import VuetiVue from './components/Home/Doctors/VuetifyVueTable.vue';
import Home from './components/Home/Home/Home.vue';
import Login from './components/Login/Login.vue';
import Services from './components/Services/Services.vue';
import SignUp from './components/SignUp/SignUp.vue';

export default  [
    {
        name :'Home',
        path : '/',
        component : Home
    },
    {
        name : 'Home',
        path : '/home',
        component : Home
    },
   
    {
        name : 'Login',
        path : '/login',
        component : Login
    },
    {
        name : 'SignUp',
        path : '/signup',
        component : SignUp
    },
    {
        name : 'AboutUs',
        path : '/about',
        component : AboutUs
    },
    {
        name : 'Services',
        path : '/services',
        component : Services
    },
    {
        path: '/doctors',
        name: 'Doctors',
        component: Doctors,
        children: [
            {
                path: 'htmlVue',
                name: 'HtmlVue',
                component: HtmlVue,
            },
            {
                path: 'vuetivue',
                name: 'VuetiVue',
                component: VuetiVue,
            }
        ]
    },
    {
        name : 'DetailService',
        path : '/DetailService/:id',
        component : DetailService
    },
   
]
