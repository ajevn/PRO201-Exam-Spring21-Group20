const state = {
    active: true
};

const mutations = {
    updateBtn(state, value){
        state.active = value;
    }
};

const getters = {
    getStatus: state => state.active
};

export default{
    state,
    mutations,
    getters
}