<template>
  <!-- redirect page to login  -->
  <base-site class="base-site">
    <h1>Access denied, please log in</h1>
    <home-select-button
      icon-name="home"
      button-title="Home"
      router-link-dest=""
      iconColor="#ececec"
    />
  </base-site>
</template>

<script>
import BaseSite from "@/components/Nav/BaseSite.vue";
import HomeSelectButton from "@/components/Nav/HomeSelectButton";
export default {
  components: { HomeSelectButton },
  setup() {
    return {
      BaseSite
    };
  }
};
</script>

<style lang="scss" scoped>
.base-site {
  text-align: center;

  h1 {
    margin-top: 16vh;

    font-size: 45px;
    color: #405c6a;
  }

  .home-select-button {
    background: #2c2a29;
    color: #ececec;
    width: 200px;
    margin: 50px auto;
    box-shadow: -1px -2px #585654;
    transition: 150ms;

    &:hover {
      background-color: #000000;
      transform: scale(1.01);
    }

    &:active {
      transform: scale(1);
      box-shadow: inset 2px 2px 2px #2a2b2b;
      background-color: #4b4b4b;
    }
  }
}
</style>
