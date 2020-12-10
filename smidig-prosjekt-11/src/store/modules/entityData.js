const state = {
    entityArray: []
};

const mutations = {
    addEntity(state, payload) {
        state.entityArray.push(payload);
        console.log('State updated:  ' + payload);
    }
};

const getters = {
    getEntities(state) {
        return state.entityArray;
    }
};

export default {
    state,
    mutations,
    getters
};
