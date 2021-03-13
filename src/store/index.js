import Vue from "vue";
import Vuex from "vuex";

import AuthModule from "./auth/authState";
import SystemsModule from "./systems/systemsState";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { auth: AuthModule, systems: SystemsModule }
});
