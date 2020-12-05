<template>
  <!-- DARK MODE:: <div class="bg-white dark:bg-gray-800">-->
  <div>
    <!-- Decides which component to render in #app HTML. -->
    <router-view />

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
