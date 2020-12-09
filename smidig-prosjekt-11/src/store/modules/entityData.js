const state = {
        entityArray: [],
};

const mutations = {
        addEntity(state, payload) {
                var entity = {   
                        entitySerialNr: payload.serialNr,
                        parts: payload,
                }
            state.entityArray.push(entity);
            console.log("payload = " + payload)
        },
}

const getters = {
    getEntities(state){
        return state.entityArray;
    }
};

export default {
    state,
    mutations,
    getters
};
