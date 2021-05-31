import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import user from "./modules/user";
import entityData from "./modules/entityData";
import progressbarBtn from "./modules/progressbarBtn";

export default createStore({
  modules: {
    user,
    entityData,
    progressbarBtn
  },
  plugins: [createPersistedState()]
});
