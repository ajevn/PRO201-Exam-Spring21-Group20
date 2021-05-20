const state = {
  userId: null,
  isAdmin: true
};

const mutations = {
  logout(state) {
    state.userId = null;
  },
  login(state, userId) {
    state.userId = userId;
  }
};
const getters = {
  getUserId: state => state.userId,
  getIsAdmin: state => state.isAdmin
};

export default {
  state,
  mutations,
  getters
};
