import { get } from "axios";

const state = {
  data: null
};

const mutations = {
  setCampData(state, value) {
    state.data = value;
  }
};
const getters = {
  getCampData: state => state.data
};
const actions = {
  fetchCampData: async ({ commit }) => {
    try {
      const res = await get(
        `${process.env.VUE_APP_SERVER_URL}/api/statistics/repairs-by-camp`,
        {
          withCredentials: true
        }
      );

      const data = res.data.map(x => {
        return {
          id: x.name,
          location: x.Country,
          geoloc: x.coordinates,
          campRepairs: x.campRepairs
        };
      });
      commit("setCampData", data);
    } catch (e) {
      console.error(e);
    }
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
