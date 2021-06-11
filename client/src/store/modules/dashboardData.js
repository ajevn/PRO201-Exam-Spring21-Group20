import { get } from "axios";

const state = {
  allRepairs: [],
  monthlyRepairs: [],
  dailyRepairs: [],
  mostRepairedPartDaily: "",
  mostRepairedPartMonthly: ""
};

const mutations = {
  commitAllRepairs(state, payload) {
    state.allRepairs = payload;
  },
  commitMonthlyRepairs(state, payload) {
    state.monthlyRepairs = payload;
  },
  commitDailyRepairs(state, payload) {
    state.dailyRepairs = payload;
  },
  commitMostRepairedPartDaily(state, payload) {
    state.mostRepairedPartDaily = payload;
  },
  commitMostRepairedPartMonthly(state, payload) {
    state.mostRepairedPartMonthly = payload;
  },
  emptyArray(state) {
    state.allRepairs = [];
  }
};

const getters = {
  getAllRepairs(state) {
    return state.allRepairs;
  },
  getMonthlyRepairs(state) {
    return state.monthlyRepairs;
  },
  getDailyRepairs(state) {
    return state.dailyRepairs;
  },
  getMostRepairedPartMonthly(state) {
    return state.mostRepairedPartMonthly;
  },
  getMostRepairedPartDaily(state) {
    return state.mostRepairedPartDaily;
  }
};

const actions = {
  fetchAllRepairs: async function({ commit }) {
    try {
      const res = await get(`${process.env.VUE_APP_SERVER_URL}/api/parts`, {
        withCredentials: true
      });
      const data = res.data;
      commit("commitAllRepairs", data);
      return res.status === 200;
    } catch (e) {
      return false;
    }
  },
  fetchMonthlyRepairs: async function({ commit }) {
    try {
      const res = await get(
        `${process.env.VUE_APP_SERVER_URL}/api/statistics/Parts-By-LastMonth`,
        {
          withCredentials: true
        }
      );
      const data = res.data;
      commit("commitMonthlyRepairs", data);
      const rest = mostUsed(data);
      commit("commitMostRepairedPartMonthly", rest);
      return res.status === 200;
    } catch (e) {
      return false;
    }
  },
  fetchDailyRepairs: async function({ commit }) {
    try {
      const res = await get(
        `${process.env.VUE_APP_SERVER_URL}/api/statistics/Parts-By-LastDay`,
        {
          withCredentials: true
        }
      );
      const data = res.data;
      commit("commitDailyRepairs", data);
      const rest = mostUsed(data);

      commit("commitMostRepairedPartDaily", rest);
      return res.status === 200;
    } catch (e) {
      return false;
    }
  }
};

const mostUsed = arr => {
  let compare = "";
  const obj = arr
    .flatMap(x => x.parts)
    .map(x => x.partName)
    .reduce((acc, val) => {
      if (val in acc) acc[val]++;
      else acc[val] = 1;
      if (acc[val] > compare) compare = acc[val];
      return acc;
    }, {});
  return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
};

export default {
  state,
  mutations,
  actions,
  getters
};
