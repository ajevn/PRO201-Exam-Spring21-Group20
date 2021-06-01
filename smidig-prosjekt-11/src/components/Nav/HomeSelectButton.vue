<template>
  <router-link
    tag="button"
    :to="'/' + this.routerLinkDest"
    type="button"
    class="font-standardText home-select-button"
  >
    <div class="icon-container">
      <icon-base
        iconHeight="100%"
        :iconName="this.iconName"
        :iconColor="this.iconColor"
      />
    </div>
    <h4>{{ this.buttonTitle }}</h4>
  </router-link>
</template>
<script>
import IconBase from "../ui/IconBase.vue";

export default {
  name: "HomeSelectButton",
  components: {
    IconBase
  },
  props: {
    buttonTitle: {
      Type: String
    },
    iconName: {
      Type: String
    },
    iconColor: {
      Type: String,
      default: "#2c2a29"
    },
    routerLinkDest: {
      Type: String
    }
  }
};
</script>

<style lang="scss">
.home-select-button {
  background-color: #ececec;
  font-size: 1.5em;
  font-weight: bold;
  border-radius: 5px;
  color: #2c2a29;
  cursor: pointer;
  width: 90%;
  height: 6vh;
  outline: none;
  transition: 150ms;
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 30px;

  h4 {
    flex: 1;
    // text-align: center;
  }

  .icon-container {
    margin-right: 15px;
    height: 70%;
    align-self: center;
  }

  &:hover {
    background-color: #959595;
    color: #ececec;
    transform: scale(1.01);
  }

  &:active {
    transform: scale(1);
    transition-duration: 10ms;
    box-shadow: inset 2px 2px 1px #4d5050;
    background-color: #6d6d6d;
  }
}
</style>
