<template>
  <div class="top-metrics-container">
    <div class="top-metrics-container-inner">
      <top-metric
        :name-of-data="'Total Repaired Units'"
        :data-to-display="data.length"
      />
    </div>
    <div class="top-metrics-container-inner">
      <top-metric
        :name-of-data="'Total Parts Replaced'"
        :data-to-display="partsCount"
      />
    </div>
    <div class="top-metrics-container-inner">
      <top-metric
        :name-of-data="'Most Repaired Part Today'"
        :data-to-display="mostRepairedDaily"
      />
    </div>
    <div class="top-metrics-container-inner">
      <top-metric
        :name-of-data="'Most Repaired Part Monthly'"
        :data-to-display="mostRepairedMonthly"
      />
    </div>
  </div>

  <div id="mapid" class="map-container">
    <div class="metric-chart-container">
      <!-- Loading Icon -->
      <div class="lds-ring" v-if="isMapLoading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <!--<repair-part-bar-chart-component style="z-index: 1000" />-->
      <country-bar-chart-component
        v-show="isMapLoading === false"
        :cardTitle="'Repaired Units Total'"
        :amount="data.length.toString()"
        :repairData="data"
        style="z-index: 1000"
      />
      <!--<repair-part-bar-chart-component style="z-index: 1000" />-->
      <repair-part-bar-chart-component
        v-show="isMapLoading === false"
        :cardTitle="'Most Repaired Monthly'"
        :repairData="data"
        style="z-index: 1000"
      />
    </div>
  </div>

  <description-text
    description-text="Map of camps and metric details"
  ></description-text>
</template>

<script>
import TopMetric from "@/components/admin_page/TopMetrics";
import "@/assets/css/map.css";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import CountryBarChartComponent from "./single_components/CountryBarChartComponent";
import RepairPartBarChartComponent from "@/components/admin_page/dashboard/single_components/RepairedPartBarChartComponent";
import { createMap } from "@/assets/js/map.js";
import DescriptionText from "../DescriptionText";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { onMounted, ref } from "vue";

export default {
  name: "DashboardPage",
  emits: ["childToParent"],
  setup(_, { emit }) {
    const router = useRouter();
    const store = useStore();
    const retrievedData = [];

    const campData = ref([]);
    const mostRepairedDaily = ref("");
    const mostRepairedMonthly = ref("");
    const partsCount = ref("");
    const data = ref([]);
    const products = [
      {
        partNumber: "1",
        partName: "Lamp",
        imgName: "ic-part-lamp",
        totalRepairs: "0"
      }
    ];

    const isMapLoading = ref(true);
    onMounted(async () => {
      await store.dispatch("fetchAllRepairs");
      await store.dispatch("fetchMonthlyRepairs");
      await store.dispatch("fetchDailyRepairs");
      await store.dispatch("fetchCampData");
      campData.value = await store.getters.getCampData;
      isMapLoading.value = false;

      createMap(
        23,
        20,
        2,
        true,
        campData.value,
        products,
        null,
        null,
        null,
        childMapClick
      );

      mostRepairedDaily.value = store.getters.getMostRepairedPartDaily;
      if (mostRepairedDaily.value.length === 0) mostRepairedDaily.value = "N/A";

      mostRepairedMonthly.value = store.getters.getMostRepairedPartMonthly;
      if (mostRepairedMonthly.value.length === 0)
        mostRepairedMonthly.value = "N/A";

      data.value = store.getters.getAllRepairs;
      partsCount.value = data.value.flatMap(x => x.parts).length;
    });

    function childMapClick(param) {
      emit("childToParent", param);
    }

    return {
      mostRepairedMonthly,
      partsCount,
      mostRepairedDaily,
      router,
      store,
      retrievedData,
      isMapLoading,
      data
    };
  },
  components: {
    DescriptionText,
    RepairPartBarChartComponent,
    CountryBarChartComponent,
    TopMetric
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
  padding-left: 20px;
}

.top-metrics-container-inner {
  width: 1fr;
  height: 200px;
  padding: 30px;
  text-align: center;
}

/* Loading Icon */
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  left: 36vw;
  top: 25vh;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #abcd transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
