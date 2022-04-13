import axios from "axios";
import {
    createUserWithEmailAndPassword, getAuth
} from "firebase/auth";
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex,axios);


const store = new Vuex.Store({
    state:{
        servicesList : [],
        user : null
    },

    actions:{
       loadServices({commit}){
        axios.get('https://stormy-basin-00847.herokuapp.com/services')
        .then(responses => {
            console.log(responses.data)
            let allServices = responses.data
            commit('SET_SERVICES',allServices)
        })
        .catch(error => console.log(error))
      },

      registerUser({ commit }, payload) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, payload.email, payload.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            commit("SET_USER", user);
            console.log(user)
            return user;
          })
          .catch((error) => {
            const errorMessage = error.message;
            // ..
            console.log(errorMessage);
          });
      },
    },
    mutations:{
        SET_SERVICES(state,servicesList){
            state.servicesList = servicesList
        },
        SET_USER(state,payload){
            console.log(payload)
            state.user = payload;
        }
    },
    getters:{
        servicesList:  state => {
            return state.servicesList;
        },
        sortList:state =>{
            return state.servicesList = state.servicesList.slice(0,6)
        },
        user : state =>{
            return state.user
        }
    }
})

export default store;

// new Vuex.store({
//     state:{

//     },
//     mutations:{

//     },
//     getters:{

//     },
//     actions : {

//     }
// })