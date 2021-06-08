import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth";
import entityData from "./modules/entityData";
import progressbarBtn from "./modules/progressbarBtn";
import dashboardData from "./modules/dashboardData";
import productData from "./modules/productData";
import campData from "./modules/campData";

export default createStore({
  modules: {
    campData,
    productData,
    entityData,
    progressbarBtn,
    auth,
    dashboardData
  },
  plugins: [
    createPersistedState({
      paths: [
        "entityData",
        "progressbarBtn",
        "dashboardData",
        "campData",
        "productData"
      ],
      key: "bright"
    }),
    createPersistedState({
      paths: ["auth"],
      storage: window.sessionStorage,
      key: "bright"
    })
  ]
});
