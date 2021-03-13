import authActions from "./actions";
import authMutations from "./mutations";
import authGetters from "./getters";

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
