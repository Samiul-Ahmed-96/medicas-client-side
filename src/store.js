import axios from "axios";
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex,axios);


const store = new Vuex.Store({
    state:{
        servicesList : []
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
      }
    },
    mutations:{
        SET_SERVICES(state,servicesList){
            state.servicesList = servicesList
        }
    },
    getters:{
        servicesList:  state => {
            return state.servicesList;
        },
        sortList:state=>{
            return state.servicesList = state.servicesList.slice(0,6)
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