

import DetailService from './components/DetailService/DetailService.vue';
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
        name : 'Services',
        path : '/services',
        component : Services
    },
    {
        name : 'DetailService',
        path : '/DetailService/:id',
        component : DetailService
    },
   
]
