export default {
  isLoggedIn(state) {
    return state.isLoggedIn;
  },
  getUser(state) {
    console.log(state);
    return { username: state.username, token: state.token };
  }
};
