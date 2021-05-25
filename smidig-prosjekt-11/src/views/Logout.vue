<template>
  <div class="logout-base">
    <base-site>
      <div id="logout-container">
        <h1>You are now logged out</h1>
        <home-button class="home-b"></home-button>
      </div>
    </base-site>
  </div>
</template>

<script>
import BaseSite from "@/components/Nav/BaseSite.vue";
import HomeButton from "@/components/UI/HomeButton.vue";

export default {
  name: "LogoutPage",
  created: function() {
    this.$store.commit("logout");
  },
  components: {
    BaseSite,
    HomeButton
  }
};
</script>

<style lang="scss" scoped>
.logout-base {
  text-align: center;
}

#logout-container {
  position: relative;
  top: 200px;

  h1 {
    font-size: 40px;
    color: #2c2a29;
  }
  .home-b {
    margin-top: 4vh;
  }
}

@media only screen and (min-device-width: 600px) and (max-device-width: 1280px) and (orientation: landscape) {
  #logout-container {
    top: 100px;

    h1 {
      font-size: 30px;
    }
  }
}
</style>
