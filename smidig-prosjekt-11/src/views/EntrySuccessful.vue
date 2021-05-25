<template>
  <div v-if="user">
    <base-site>
      <!-- Renders Component to show text/icon/home-btn -->
      <approved-report />

      <progress-bar />
    </base-site>
  </div>
  <redirect-login v-else />
</template>

<script>
// @ is an alias to /src
import ApprovedReport from "@/components/Feedback/ApprovedReport.vue";
import ProgressBar from "@/components/Feedback/ProgressBar.vue";
import RedirectLogin from "@/components/Login/RedirectLogin.vue";
import BaseSite from "../components/Nav/BaseSite.vue";
import { useStore } from "vuex";

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
    ApprovedReport,
    ProgressBar,
    RedirectLogin,
    BaseSite
  }
};
</script>

<style scoped></style>
