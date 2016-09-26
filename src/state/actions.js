export default {
  decrementCounter({ commit, state }, payload) {
    commit('DECREMENT', 1);
  },

  incrementCounter({ commit, state }, payload) {
    commit('INCREMENT', 1);
  }
};
