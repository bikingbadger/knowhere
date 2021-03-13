export default {
  isLoggedIn(state) {
    return state.isLoggedIn;
  },
  getUser(state) {
    return { username: state.username, token: state.token };
  }
};
