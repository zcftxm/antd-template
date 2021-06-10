import Vue from 'vue';
import Vuex from 'vuex';
import system from './modules/system';
import permission from './modules/permission';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    system,
    permission
  }
})