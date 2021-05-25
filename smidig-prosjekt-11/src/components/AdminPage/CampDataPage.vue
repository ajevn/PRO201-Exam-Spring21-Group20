<template>
  <div>
    <h3>
      Camp Data
    </h3>
  </div>

  <div id="mapid" class="map-container"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { createMap } from "@/assets/js/map.js";

export default {
  name: "CampDataPage",
  setup() {},
  components: {},
  methods: {},
  mounted() {
    this.$nextTick(function() {
      createMap(23, 20, 5);
    });
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.map-container {
  position: relative;
  width: 350px;
  height: 250px;
  margin: auto;
  background-color: #fff;
  border: 1px solid lightgrey;
}
</style>
