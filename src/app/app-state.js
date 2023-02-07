// import Vue from 'vue';
// import Vuex from 'vuex';


// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {
//   }
// });

import { createStore } from 'vuex';
import axios from "axios"
console.log(axios);
// import usersState from './users/users-state';
import { usersState } from './users';
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    usersState
  }
})