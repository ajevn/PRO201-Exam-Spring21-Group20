<template>
  <div class="metric-container">
    <img class="metric-icon" :src="metricIconSrc" />
    <p class="name-of-data">{{ nameOfData }}</p>
    <p class="data-to-display">{{ dataToDisplay }}</p>
  </div>
</template>
<script>
export default {
  name: "TopMetrics",
  props: {
    nameOfData: String,
    dataToDisplay: String,
    metricIconSrc: String
  },
  setup() {},
  data() {
    return {};
  }
};
</script>

<style scoped>
.metric-container {
  text-align: center;
  height: 200px;
  width: 250px;
  padding: 30px;
  margin: 2em;
  border: 1px solid #050505;
  border-radius: 15px 50px;
}
.name-of-data {
  padding-bottom: 20px;
  font-size: x-large;
}
.data-to-display {
  color: #4aae9b;
  font-size: xx-large;
}
</style>
