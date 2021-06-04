<template>
  <div class="repair">
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
</template>

<script>
import RepairOverview from "@/components/repair/RepairOverview.vue";
import RepairInfo from "@/components/repair/RepairInfo.vue";
import ProgressBar from "@/components/feedback/ProgressBar.vue";
import NavBar from "@/components/nav/navbar/NavBar";

export default {
  data() {
    return {
      ListOfRepairs: []
    };
  },
  name: "Repair",
  components: {
    NavBar,
    RepairOverview,
    RepairInfo,
    ProgressBar
  }
};
</script>
<style lang="scss" scoped>
#repair-gradient {
  background: linear-gradient(160deg, #fbf6ed 0%, #cdcbcbff 100%);
}
</style>
