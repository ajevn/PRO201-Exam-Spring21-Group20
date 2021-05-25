<template>
  <div class="metric-container">
    <div class="description-container">
      <img
        v-if="displayImage"
        class="part-icon"
        :id="{ partNumber }"
        :src="require('@/assets/Images/Parts/' + metricIconSrc + '.png')"
        alt="{{partName}}"
      />
      <p class="section-item-text">{{ nameOfData }}</p>
      <p class="data-to-display">{{ dataToDisplay }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "TopMetrics",
  components: {},
  props: {
    nameOfData: String,
    dataToDisplay: String,
    metricIconSrc: String,
    partNumber: String,
    displayImage: {
      type: Boolean,
      default: false
    }
  },
  setup() {},
  data() {
    return {};
  }
};
</script>

<style scoped>
.metric-container {
  height: 100%;
  width: 100%;
}
.description-container {
  height: 1vh;
}
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
.section-item-text {
  font-size: 1.3em;
  font-family: "Open Sans", sans-serif;
  color: #828b96;
}
.data-to-display {
  color: #4aae9b;
  font-size: 2em;
  padding-top: 20px;
}

img {
  width: 50px;
  height: 50px;
}
</style>
