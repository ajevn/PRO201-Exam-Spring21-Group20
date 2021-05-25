<template>
  <div class="top-metrics-container">
    <div class="top-metrics-container-inner">
      <top-metric
        :name-of-data="'Total Repaired Units'"
        data-to-display="333.123"
      />
    </div>
    <div class="top-metrics-container-inner">
      <top-metric
        :name-of-data="'Total Units Registered'"
        data-to-display="1.000.000"
      />
    </div>
    <div class="top-metrics-container-inner">
      <top-metric
        :name-of-data="'Most Repaired Part Today'"
        data-to-display="PCB"
      />
    </div>
    <div class="top-metrics-container-inner">
      <top-metric
        :name-of-data="'Most Repaired Part Monthly'"
        data-to-display="Battery"
      />
    </div>
  </div>

  <div id="mapid" class="map-container">
    <div class="metric-chart-container">
      <repair-part-bar-chart-component />
      <country-bar-chart-component />
      <repair-part-bar-chart-component />
      <repair-part-bar-chart-component />
    </div>
  </div>
</template>

<script>
import TopMetric from "@/components/AdminPage/TopMetrics";
import "@/assets/css/map.css";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import CountryBarChartComponent from "./Components/CountryBarChartComponent";
import RepairPartBarChartComponent from "@/components/AdminPage/Dashboard/Components/RepairedPartBarChartComponent";
import { createMap } from "@/assets/js/map.js";

export default {
  name: "DashboardPage",
  setup() {},
  components: {
    RepairPartBarChartComponent,
    CountryBarChartComponent,
    TopMetric
  },
  methods: {
    showAlert() {
      alert("Klikka på stats");
    }
  },
  mounted() {
    createMap(23, 20, 2);
    /*this.$nextTick(function() {
      createMap(23, 20, 2);
    });*/
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.map-container {
  position: relative;
  width: 80vw;
  height: 70%;
  margin: auto;
  background-color: #fff;
  border: 1px solid lightgrey;
}

.top-metrics-container {
  background-color: white;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
}

.metric-chart-container {
  z-index: 20;
  width: 20vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". ."
    ". .";
}

.top-metrics-container {
  width: 1fr;
  height: 200px;
  padding: 30px;
  text-align: center;
}
</style>
