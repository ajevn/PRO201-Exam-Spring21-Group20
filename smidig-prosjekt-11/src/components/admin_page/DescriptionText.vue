<template>
  <div>
    <p class="section-item-text">{{ descriptionText }}</p>
  </div>
</template>
<script>
export default {
  name: "DescriptionText",
  components: {},
  props: {
    descriptionText: String
  },
  setup() {},
  data() {
    return {};
  }
};
</script>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
.section-item-text {
  font-size: 0.7em;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  color: #828b96;
}

</style>
