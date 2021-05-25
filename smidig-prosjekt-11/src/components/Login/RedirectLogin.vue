<template>
  <!-- redirect page to login  -->
  <base-site class="base-site">
    <h1>Access denied, please log in</h1>
  </base-site>
</template>

<script>
import BaseSite from "@/components/Nav/BaseSite.vue";
export default {
  setup() {
    return {
      BaseSite
    };
  }
};
</script>

<style>
.base-site {
  text-align: center;
}
h1 {
  margin-top: 16vh;

  font-size: 45px;
  color: #405c6a;
}
</style>
