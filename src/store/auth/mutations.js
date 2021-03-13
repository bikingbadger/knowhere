import router from "@/router";

export default {
  authSuccess(state, payload) {
    const userData = payload;
    state.isLoggedIn = true;
    state.email = userData.email;
    state.registrationError = false;
    state.errorMsg = "";
    state.firebaseId = userData.firebaseId;
    state.token = userData.token;
    state.createdAt = userData.user.createdAt;
    state.credits = userData.user.credits;
    state.gameId = userData.user.id;
    state.updatedAt = userData.user.updatedAt;
    state.username = userData.user.username;

    router.replace({ path: "home" });
  },

  authFail(state, payload) {
    const error = payload;
    state.isLoggedIn = false;
    state.registrationError = true;
    state.errorMsg = error.message;
  },

  logout(state) {
    state.isLoggedIn = false;
    state.currentUser = "";
    router.replace({ path: "login" });
  },

  getUser(state, userData) {
    state.username = userData.username;
    state.name = userData.name;
    state.id = userData.id;
    state.email = userData.email;
    state.isLoggedIn = true;
  }
};
