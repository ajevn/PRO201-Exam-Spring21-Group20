<template>
  <base-site isDark="true">
    <login />
  </base-site>
</template>

<script>
import BaseSite from "@/components/nav/BaseSite.vue";
import Login from "@/components/login/Login.vue";

export default {
  name: "LoginPage",
  components: {
    BaseSite,
    Login
  }
};
</script>

<style scoped></style>
