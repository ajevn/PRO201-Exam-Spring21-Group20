<template>
  <div class="repair" v-if="user">
    <div>
      <nav-bar />
    </div>
    <repair-overview />
    <div id="repair-gradient">
      <section class="ListRepairs">
        <repair-info></repair-info>
      </section>
    </div>

    <progress-bar />
  </div>
  <redirect-login v-else />
</template>

<script>
import RepairOverview from "@/components/repair/RepairOverview.vue";
import RepairInfo from "@/components/repair/RepairInfo.vue";
import ProgressBar from "@/components/feedback/ProgressBar.vue";
import RedirectLogin from "@/components/login/RedirectLogin.vue";
import NavBar from "@/components/Nav/navbar/NavBar";

export default {
  data() {
    return {
      user: this.$store.getters.getUserId,
      ListOfRepairs: []
    };
  },

  name: "Repair",
  components: {
    NavBar,
    RepairOverview,
    RepairInfo,
    ProgressBar,
    RedirectLogin
  }
};
</script>
<style lang="scss" scoped>
#repair-gradient {
  background: linear-gradient(160deg, #fbf6ed 0%, #cdcbcbff 100%);
}
</style>
