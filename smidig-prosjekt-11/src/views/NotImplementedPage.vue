<template>
  <div>
    <base-site>
      <div class="header-container">
        <h1>
          This page is not implemented
        </h1>
        <home-select-button
          iconName="home"
          buttonTitle="Home"
          routerLinkDest=""
          iconColor="#ececec"
        />
      </div>
    </base-site>
  </div>
</template>
<script>
import BaseSite from "../components/nav/BaseSite.vue";
import HomeSelectButton from "../components/nav/HomeSelectButton.vue";

export default {
  name: "NotImplementedPage",
  components: { BaseSite, HomeSelectButton }
};
</script>
<style lang="scss" scoped>
.header-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2rem;
    margin-top: 200px;
    margin-bottom: 40px;
    width: 80%;
    text-align: center;
    color: #2c2a29;
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
