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
      <country-bar-chart-component style="z-index:1000; position:absolute; bottom:0" />
      <repair-part-bar-chart-component style="z-index:1000" />
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
    const campData = [
      {
        id: "Hagadera Refugee Camp",
        location: "Kenya",
        geoloc: [40.5230712890625, 0.17028783523693297],
        campRepairs: [12, 40, 53, 0, 210, 32, 5, 21, 12, 0, 54, 23]
      },
      {
        id: "Kakuma Refugee Camp",
        location: "Kenya",
        geoloc: [34.80743408203125, 3.760115447396889],
        campRepairs: [21, 5, 3, 243, 2, 42, 35, 41, 32, 14, 65, 15]
      },
      {
        id: "",
        location: "Tanzania",
        geoloc: [31.02813720703125, -6.287998672327658],
        campRepairs: [13, 0, 35, 2223, 2, 442, 345, 41, 32, 14, 0, 12]
      },
      {
        id: "",
        location: "Ethiopia",
        geoloc: [34.00543212890625, 7.681051391626661],
        campRepairs: [40, 344, 35, 23, 2, 242, 34, 41, 32, 14, 65, 0]
      },
      {
        id: "",
        location: "South Sudan",
        geoloc: [30.047607421875, 10.244654445228324],
        campRepairs: [6, 14, 325, 11, 22, 42, 12, 4, 32, 14, 3, 82]
      }
    ];
    const products = [
      {
        partNumber: "1",
        partName: "Lamp",
        imgName: "ic-part-lamp",
        totalRepairs: "0"
      }
    ];
    createMap(23, 20, 3, true, campData, products);
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
