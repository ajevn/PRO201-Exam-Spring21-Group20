import { get } from "axios";

const state = {
  data: null
};

const mutations = {
  setData(state, value) {
    state.data = value;
  }
};
const getters = {
  getProductData: state => state.data
};
const actions = {
  fetchAllParts: async context => {
    const res = await get("http://localhost:3000/api/parts", {
      withCredentials: true
    });
    if (res.status === 200) context.commit("setData", res.data);
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
