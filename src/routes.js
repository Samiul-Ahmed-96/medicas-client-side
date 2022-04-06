

import Home from './components/Home/Home/Home.vue';
import Login from './components/Login/Login.vue';
import SignUp from './components/SignUp/SignUp.vue';


export default  [
    {
        name : 'Home',
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
   
]
