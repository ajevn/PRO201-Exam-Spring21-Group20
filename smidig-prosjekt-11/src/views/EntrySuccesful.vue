<template>
  <div class="entrySuccesful">
    <base-site></base-site>
    <nav-bar></nav-bar>
  </div>
    <approved-report></approved-report>
</template>

<script>
// @ is an alias to /src
import BaseSite from '@/components/UI/BaseSite.vue'
import ApprovedReport from '../components/Feedback/ApprovedReport.vue'
import NavBar from '../components/Nav/NavBar.vue'

export default {
  name: 'Home',
  components: {
    BaseSite,
    ApprovedReport,
    NavBar
  }
}
</script>

<style scoped></style>