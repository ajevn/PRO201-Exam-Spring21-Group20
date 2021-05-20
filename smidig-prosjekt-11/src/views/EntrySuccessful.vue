<template>
  <div v-if="user">
    <div class="entry-successful">
      <nav-bar />
    </div>

    <!-- Renders Component to show text/icon/home-btn -->
    <approved-report />

    <progress-bar />
  </div>
  <redirect-login v-else />
</template>

<script>
// @ is an alias to /src
import ApprovedReport from "@/components/Feedback/ApprovedReport.vue";
import ProgressBar from "@/components/Feedback/ProgressBar.vue";
import RedirectLogin from "@/components/Login/RedirectLogin.vue";
import { useStore } from "vuex";
import NavBar from "@/components/Nav/navbar/NavBar";

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
    NavBar,
    ApprovedReport,
    ProgressBar,
    RedirectLogin
  }
};
</script>

<style scoped></style>
