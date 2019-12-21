import Vue from "vue";

import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex, axios);

import login from "./login";
import path from "./path";
import good from "./good";

const store = new Vuex.Store({
  modules: {
    login,
    path,
    good
  }
});

export default store;