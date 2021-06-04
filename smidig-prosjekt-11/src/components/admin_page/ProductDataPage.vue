<template>
  <div class="parts-data-container">
    <h3>Repaired Parts Statistics</h3>
    <div class="country-list-flex-container">
      <div class="pie-chart-countries">
        <vue3-chart-js ref="chartRef" v-bind="{ ...barChart }"></vue3-chart-js>
      </div>
      <description-text
        description-text="Items repaired this year"
      ></description-text>
    </div>

    <div class="part-grid">
      <div
        v-on:click="updateData()"
        class="part-cards"
        :class="{ partschecked: allParts.isChecked }"
      >
        <TopMetrics
          :name-of-data="allParts.name"
          :data-to-display="getSumAllParts()"
          :metric-icon-src="allParts.imgName"
          :display-image="true"
        />
      </div>

      <div
        v-for="product in productImages"
        v-on:click="updateData(product)"
        :class="{ partschecked: product.isChecked }"
        :key="product.partNumber"
        class="part-cards"
      >
        <TopMetrics
          :name-of-data="product.partName"
          :data-to-display="sumPartsOfType(product.partNumber)"
          :metric-icon-src="product.imgName"
          :display-image="true"
        />
      </div>
    </div>
    <description-text
      description-text="Total Parts Repaired"
    ></description-text>
  </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import TopMetrics from "@/components/admin_page/TopMetrics";
import { onMounted, ref, watchEffect } from "vue";
import DescriptionText from "./DescriptionText";
import { useStore } from "vuex";

export default {
  name: "ProductDataPage",
  setup() {
    const chartRef = ref(null);
    const store = useStore();
    const data = ref(null);
    const allParts = ref({
      name: "All parts",
      imgName: "sunbell",
      isChecked: true
    });
    const productImages = ref([
      {
        partNumber: "1",
        partName: "Lamp",
        imgName: "ic-part-lamp",
        isChecked: false
      },
      {
        partNumber: "2",
        partName: "12V charger",
        imgName: "ic-part-adapter-charger",
        isChecked: false
      },
      {
        partNumber: "3",
        partName: "Battery",
        imgName: "ic-part-battery",
        isChecked: false
      },
      {
        partNumber: "4",
        partName: "Power button",
        imgName: "ic-part-button",
        isChecked: false
      },
      {
        partNumber: "5",
        partName: "Light bulb",
        imgName: "ic-part-lightbulb",
        isChecked: false
      },
      {
        partNumber: "6",
        partName: "Screen",
        imgName: "ic-part-screen",
        isChecked: false
      },
      {
        partNumber: "7",
        partName: "Socket charger",
        imgName: "ic-part-socket-charger",
        isChecked: false
      },
      {
        partNumber: "8",
        partName: "Solar panel",
        imgName: "ic-part-solar-panel",
        isChecked: false
      }
    ]);
    const dataBank = ref([
      {
        label: "Lamp item",
        backgroundColor: "#f87979",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        label: "12V charger item",
        backgroundColor: "#f87979",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        label: "Battery item",
        backgroundColor: "#f87979",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        label: "Power button item",
        backgroundColor: "#f87979",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        label: "Light bulb item",
        backgroundColor: "#f87979",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        label: "Screen item",
        backgroundColor: "#f87979",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        label: "Socket charger item",
        backgroundColor: "#f87979",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        label: "Solar panel item",
        backgroundColor: "#f87979",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]);
    const barChart = {
      type: "bar",
      options: {
        min: 0,
        max: 100,
        responsive: true,
        plugins: {
          legend: {
            position: "top"
          }
        }
      },
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "All items",
            backgroundColor: "#f87979",
            data: getSumPartsArray()
          }
        ]
      }
    };

    // Retrieves data and populates the dataBank array
    onMounted(async () => {
      await store.dispatch("fetchAllParts");
      data.value = await store.getters.getProductData;

      for (let i = 0; i < data.value.length; i++) {
        if (data.value[i].productName === "Sunbell") {
          const monthNumber = new Date(data.value[i].createdAt).getMonth();

          for (let j = 0; j < data.value[i].parts.length; j++) {
            addPart(data.value[i].parts[j].partNumber, monthNumber);
          }
        }
      }
      updateChartWithAllParts();
    });

    watchEffect(() => chartRef.value?.update());

    // Adds a single repaired part to the dataBank array
    function addPart(partNumber, monthNumber) {
      dataBank.value[partNumber - 1].data[monthNumber]++;
    }

    // Updates the chart when an element is clicked
    async function updateData(product) {
      // Remove all checks
      this.allParts.isChecked = false;
      for (let i = 0; i < productImages.value.length; i++) {
        productImages.value[i].isChecked = false;
      }
      // Check if "All parts" was clicked
      if (product === undefined) {
        barChart.data.datasets = [
          {
            label: "All items",
            backgroundColor: "#f87979",
            data: getSumPartsArray()
          }
        ];
        this.allParts.isChecked = true;
      } else {
        barChart.data.datasets[0] = dataBank.value[product.partNumber - 1];
        product.isChecked = true;
      }
      chartRef.value.update();
    }

    function updateChartWithAllParts() {
      barChart.data.datasets = [
        {
          label: "All items",
          backgroundColor: "#f87979",
          data: getSumPartsArray()
        }
      ];
    }

    function sumPartsOfType(productIndex) {
      var sum = 0;
      for (let i = 0; i < dataBank.value[productIndex - 1].data.length; i++) {
        sum += dataBank.value[productIndex - 1].data[i];
      }
      return sum;
    }

    function getSumAllParts() {
      var sum = 0;
      for (let i = 0; i < dataBank.value[0].data.length; i++) {
        for (let j = 0; j < dataBank.value.length; j++) {
          sum += dataBank.value[j].data[i];
        }
      }
      return sum;
    }

    function getSumPartsArray() {
      var sumParts = [];
      for (let i = 0; i < dataBank.value[0].data.length; i++) {
        var partSum = 0;
        for (let j = 0; j < dataBank.value.length; j++) {
          partSum += dataBank.value[j].data[i];
        }
        sumParts.push(partSum);
      }
      return sumParts;
    }

    return {
      data,
      barChart,
      chartRef,
      dataBank,
      sumPartsOfType,
      getSumPartsArray,
      getSumAllParts,
      updateData,
      allParts,
      productImages
    };
  },
  components: { DescriptionText, Vue3ChartJs, TopMetrics },
  methods: {},
  data() {
    return {};
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
h3 {
  font-size: 1.3em;
  margin: 30px 0 20px 0;

  text-align: center;
  font-weight: bold;
  color: #2c2a29;
}

.parts-data-container {
  overflow-y: scroll;
  height: calc(100vh - 80px);
}

.part-grid {
  display: flex;
  width: 60%;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  margin: auto auto 1vh;

  .part-cards {
    cursor: pointer;
    width: 210px;
    height: 175px;
    transform: scale(0.75);
    -webkit-box-shadow: 5px 5px 21px 4px rgba(90, 89, 89, 0.31);
    box-shadow: 5px 5px 21px 4px rgba(90, 89, 89, 0.31);
    border-radius: 15px;
    padding: 15px;
  }
}

.country-list-flex-container {
  width: 600px;
  height: 350px;
  margin: auto;
}

.part-icon-metric {
  width: 250px;
}

.partschecked {
  background-color: #e9e6e0;
}
</style>
