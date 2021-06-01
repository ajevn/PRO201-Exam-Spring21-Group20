<template>
  <div v-if="user">
    <base-site>
      <!-- Renders Component to show text/icon/home-btn -->
      <approved-report />
      <home-select-button
        icon-name="home"
        button-title="Home"
        router-link-dest=""
        iconColor="#ececec"
      />

      <progress-bar />
    </base-site>
  </div>
  <redirect-login v-else />
</template>

<script>
// @ is an alias to /src
import ApprovedReport from "@/components/feedback/ApprovedReport.vue";
import ProgressBar from "@/components/feedback/ProgressBar.vue";
import RedirectLogin from "@/components/login/RedirectLogin.vue";
import BaseSite from "../components/nav/BaseSite.vue";
import { useStore } from "vuex";
import HomeSelectButton from "@/components/nav/HomeSelectButton";

export default {
  name: "entrySuccessful",
  setup() {
    const store = useStore();
    const user = store.getters.getUserId;
    return {
      user
    };
  },
  components: {
    HomeSelectButton,
    ApprovedReport,
    ProgressBar,
    RedirectLogin,
    BaseSite
  }
};
</script>

<style lang="scss" scoped>
.home-select-button {
  background: #2c2a29;
  color: #ececec;
  width: 200px;
  margin: 50px auto;
  box-shadow: -1px -2px #585654;
  transition: 150ms;

  &:hover {
    background-color: #000000;
    transform: scale(1.01);
  }

  &:active {
    transform: scale(1);
    box-shadow: inset 2px 2px 2px #2a2b2b;
    background-color: #4b4b4b;
  }
}

@media only screen and (min-device-width: 600px) and (max-device-width: 1280px) and (orientation: landscape) {
  .home-button {
    width: 175px;
  }
}
</style>
