export default {
  async setLocations({ state, rootState, commit }) {
    const systemsURL = `https://api.spacetraders.io/game/systems/${state.symbol}/locations?token=${rootState.auth.token}`;
    const response = await fetch(systemsURL);
    const locations = await response.json();
    // console.log(locations);
    commit("setLocations", locations);
  }
};
