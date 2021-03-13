import authActions from "./authActions";
import authMutations from "./authMutations";
import authGetters from "./authGetters";

export default {
  namespaced: true,
  state() {
    return {
      id: 0,
      name: "",
      username: "",
      email: "",
      token: "",
      isLoggedIn: true,
      registrationError: false,
      errorMsg: "",
      firebaseId: "",
      createdAt: "",
      credits: 0,
      gameId: "",
      updatedAt: ""
    };
  },
  mutations: authMutations,
  actions: authActions,
  getters: authGetters
};
