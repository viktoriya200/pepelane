import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = () =>
    new Vuex.Store({
        state: {
            vehiclesList: null
        },
        getters : {
            GET_VEHICLES : state => {
                return state.vehiclesList;
            }
            },
        mutations: {
            SET_VEHICLES : (state, vehiclesItem) => {
                state.vehiclesList = vehiclesItem;
            },
            // ADD_VEHICLES : (state,vehiclesItem) => {
            //     state.todos.push(vehiclesItem)
            // },
        }
    })

export default store;