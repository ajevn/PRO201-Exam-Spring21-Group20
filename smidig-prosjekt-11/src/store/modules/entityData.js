const state = {
    entityArray: []
};

const mutations = {
    addEntity(state, payload) {
        state.entityArray.push(payload);
        console.log('State updated:  ' + payload);
    },
    deleteEntity(state, payload) {
        var entityArray = state.entityArray;
        let indexPos = entityArray.findIndex(entity => entity.entitySerialNr === payload);

        state.entityArray.splice(indexPos, 1);
    }
};

const getters = {
    getEntities(state) {
        return state.entityArray;
    },
    getNumOfEntities(state) {
        return state.entityArray.length;
    }
};

export default {
    state,
    mutations,
    getters
};
