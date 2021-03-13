import systemsActions from "./systemsActions";
import systemsMutations from "./systemsMutations";
import systemsGetters from "./systemsGetters";

export default {
  namespaced: true,
  state() {
    return {
      symbol: "OE",
      name: "Omicron Eridani",
      locations: []
    };
  },
  mutations: systemsMutations,
  actions: systemsActions,
  getters: systemsGetters
};
