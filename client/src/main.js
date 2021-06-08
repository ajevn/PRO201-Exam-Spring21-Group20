import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/styles.scss";
import store from "./store";
import { Toaster } from "@meforma/vue-toaster";

createApp(App)
  .use(store)
  .use(Toaster)
  .use(router)
  .mount("#app");
