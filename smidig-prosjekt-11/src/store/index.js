import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import user from "./modules/user";
import entityData from "./modules/entityData";

export default createStore({
  modules: {
    user,
    entityData
  },
  plugins: [createPersistedState()]
});
