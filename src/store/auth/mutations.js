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
    state.createdAt = userData.createdAt;
    state.credits = userData.credits;
    state.gameId = userData.id;
    state.updatedAt = userData.updatedAt;
    state.username = userData.username;

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

  setUser(state, userData) {
    state.isLoggedIn = true;
    state.email = userData.email;
    state.registrationError = false;
    state.errorMsg = "";
    state.firebaseId = userData.firebaseId;
    state.token = userData.token;
    state.createdAt = userData.createdAt;
    state.credits = userData.credits;
    state.gameId = userData.id;
    state.updatedAt = userData.updatedAt;
    state.username = userData.username;
  }
};
