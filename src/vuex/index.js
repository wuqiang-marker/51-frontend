import Vue from "vue";
import Vuex from "vuex";

import base from "./modules/base"; //基础模块

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    base
  }
});
