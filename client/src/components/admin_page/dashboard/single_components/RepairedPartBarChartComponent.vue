<template>
  <div class="main-information-topleft-container">
    <div class="header-text">
      <p>{{ cardTitle }}</p>
    </div>
    <div class="country-list-flex-container">
      <div class="pie-chart-countries">
        <vue3-chart-js
          v-if="doughnutChart.data.datasets.length > 0"
          :id="doughnutChart.id"
          :type="doughnutChart.type"
          :data="doughnutChart.data"
        ></vue3-chart-js>
      </div>
      <div
        v-for="entry in repairList"
        :key="entry.partName"
        class="country-list-item"
      >
        <p class="inline-elements">{{ entry.partName }}: {{ entry.amount }}</p>
        <div
          class="country-color-box"
          :style="{ backgroundColor: entry.color }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import { useStore } from "vuex";
export default {
  name: "RepairPartBarChartComponent",
  props: {
    cardTitle: String,
    amount: String,
    repairData: Array
  },
  setup() {
    const store = useStore();
    return {
      store
    };
  },
  components: { Vue3ChartJs },
  data() {
    return {
      data: [],
      repairList: [],
      colorArray: ["#41B883", "#E46651", "#00D8FF", "#DD1B16", "#41B883"],
      doughnutChart: {
        type: "doughnut",
        data: {
          datasets: []
        }
        /*datasets: [
            {
              backgroundColor: [
                "#41B883",
                "#E46651",
                "#00D8FF",
                "#DD1B16",
                "#DF1C19"
              ],
              data: [40, 20, 80, 10, 7]
            }
          ]*/
      }
    };
  },
  methods: {
    updateRepairData: function() {
      this.data = this.store.getters.getMonthlyRepairs;
      const repairListInner = [];

      function generateRandomColor() {
        let randomColor = "#";
        let Char = "0123456789abcdefghijklmnopqrstuvwxyz";

        for (let i = 0; i < 6; i++) {
          randomColor = randomColor + Char[Math.floor(Math.random() * 16)];
        }
        return randomColor;
      }

      function compare(a, b) {
        if (a.amount < b.amount) {
          return -1;
        }
        if (a.amount > b.amount) {
          return 1;
        }
        return 0;
      }
      if (this.data.length > 0) {
        for (let entity of this.data) {
          for (let part of entity.parts) {
            if (!repairListInner.find(el => el.partName === part.partName)) {
              repairListInner.push({
                partName: part.partName,
                color: generateRandomColor(),
                amount: 1
              });
            } else {
              const partNameIndex = repairListInner.findIndex(
                el => el.partName === part.partName
              );
              repairListInner[partNameIndex] = {
                partName: repairListInner[partNameIndex].partName,
                color: repairListInner[partNameIndex].color,
                amount: repairListInner[partNameIndex].amount + 1
              };
            }
          }
        }

        repairListInner.sort(compare);
        repairListInner.reverse();
        this.store.commit(
          "commitMostRepairedPartMonthly",
          repairListInner[0].partName
        );
        this.repairList = repairListInner;
      } else {
        repairListInner.push({
          partName: "N/A",
          color: generateRandomColor(),
          amount: 1
        });
        this.repairList = repairListInner;
      }
    },
    initializePieChart: function() {
      const entryColors = [];
      const entryData = [];
      for (let entry of this.repairList) {
        entryColors.push(entry.color);
        entryData.push(entry.amount);
      }
      this.doughnutChart.data.datasets = [
        {
          backgroundColor: entryColors,
          data: entryData
        }
      ];
    }
  },
  mounted() {
    //Needs to run before initializing piecharts
    this.updateRepairData();
    this.initializePieChart();
  },
  computed: {}
};
</script>

<style scoped>
.country-color-box {
  height: 5px;
  width: 20px;
  border-radius: 5px;
  display: inline-block;
}
.header-text {
  text-align: center;
  display: inline;
  font-family: "Open Sans", sans-serif;
  font-size: 1.2em;
}

.header-text-number {
  color: #4aae9b;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-size: 1.5em;
  padding-top: 10px;
}

.country-list-item {
  margin-top: 20px;
  text-align: center;
}
.pie-chart-countries {
  margin: auto;
  height: 100px;
  width: 100px;
}
.main-information-topleft-container {
  overflow-y: scroll;
  background-color: #ffffff;
  height: 30vh;
  width: 20vh;
  text-align: center;
  font-size: 1em;
  padding-top: 5px;
  font-family: "Open Sans", sans-serif;
  color: black;
  line-height: 100%;
  margin-top: 10px;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
}
.inline-elements {
  font-family: "Open Sans", sans-serif;
  font-size: 1.1em;
}
.country-list-flex-container {
  display: grid;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 30% repeat(20, 20px);
  grid-column-gap: 10px;
  grid-row-gap: 5px;
}
</style>
