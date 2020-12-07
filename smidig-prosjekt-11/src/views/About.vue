<template>
  <div class="about">
    <base-site>
      <nav-bar />
    </base-site>
    <h1></h1>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseSite from '@/components/UI/BaseSite.vue'
import NavBar from '../components/Nav/navBar.vue'
export default {
  name: 'Home',
  components: {
    BaseSite,
    NavBar
  }
}
</script>

<style scoped></style>
