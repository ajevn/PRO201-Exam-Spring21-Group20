<template>
  <div class="hamburger-button">
    <div class="hamburger-bar" v-bind:class="{ active: isSelected }"></div>
    <div class="hamburger-bar" v-bind:class="{ active: isSelected }"></div>
    <div class="hamburger-bar" v-bind:class="{ active: isSelected }"></div>
  </div>
</template>
<script>
export default {
  name: "HamburgerButton",
  data() {
    return {
      buttonClicked: false
    };
  },
  props: {
    isSelected: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss" scoped>
.hamburger-button {
  height: 30px;
  width: 30px;
  margin-right: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hamburger-bar {
  height: 16%;
  background: #7eb46b;
  transition: all 0.5s ease;
}

.hamburger-bar.active {
  background: #25353d;
}
</style>
