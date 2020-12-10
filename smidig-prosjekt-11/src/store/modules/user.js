const state = {
    userId: null
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
    getUserId: state => state.userId
};

export default {
    state,
    mutations,
    getters
};
