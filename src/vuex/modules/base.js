const state = {
  isHomePage: false,
  currentPage: "Main",
};
const mutations = {
  setHomePageFlag: (state, payload) => {
    state.isHomePage = payload;
  },
  setCurrentPage: (state, payload) => {
    localStorage("currentPage", payload);
    state.currentPage = payload;
  },
};
const getters = {};
export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
