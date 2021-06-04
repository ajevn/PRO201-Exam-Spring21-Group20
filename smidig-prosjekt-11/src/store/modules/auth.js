import axios from "axios";

const state = {
  authStatus: "",
  regStatus: ""
};

const mutations = {
  // Authentication mutations
  authRequest(state) {
    state.authStatus = "loading";
  },
  authSuccess(state) {
    state.authStatus = "success";
  },
  authError(state) {
    state.authStatus = "error";
  },
  authLogout(state) {
    state.authStatus = "";
    window.sessionStorage.removeItem("user-data");
  },
  // Register mutations
  regRequest(state) {
    state.regStatus = "loading";
  },
  regSuccess(state) {
    state.regStatus = "success";
  },
  regError(state) {
    state.regStatus = "error";
  }
};

const actions = {
  async authenticate({ commit }, user) {
    const sessionStorage = window.sessionStorage;
    commit("authRequest");
    return new Promise((resolve, reject) => {
      axios
        .post("http://localhost:3000/api/login", user, {
          withCredentials: true
        })
        .then(res => {
          commit("authSuccess", res.data);
          sessionStorage.setItem("user-data", JSON.stringify(res.data));
          resolve(res);
        })
        .catch(error => {
          commit("authError");
          reject(error);
        });
    });
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit("authLogout");
      axios
        .get("http://localhost:3000/api/logout")
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
      resolve();
    });
  },
  createUser({ commit }, userValues) {
    commit("regRequest");
    return new Promise((resolve, reject) => {
      axios
        .post("http://localhost:3000/api/register", userValues, {
          withCredentials: true
        })
        .then(res => {
          commit("regSuccess");
          resolve(res);
        })
        .catch(error => {
          commit("regError");
          reject(error);
        });
      resolve();
    });
  }
};

const getters = {
  getUserData() {
    return JSON.parse(window.sessionStorage.getItem("user-data"));
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
