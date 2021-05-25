<template>
  <div>
    <h3>Product Data Page</h3>
    <div class="part-grid">
      <div
        v-for="product in productImages"
        :key="product.partNumber"
        class="part-cards"
      >
        <TopMetrics
          :name-of-data="product.partName"
          data-to-display="1000"
          :metric-icon-src="product.imgName"
          display-image="{{true}}"
        />
      </div>
    </div>
  </div>
  <div class="country-list-flex-container">
    <div class="pie-chart-countries">
      <vue3-chart-js
        :id="barChart.id"
        :type="barChart.type"
        :data="barChart.data"
      ></vue3-chart-js>
    </div>
  </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import TopMetrics from "@/components/AdminPage/TopMetrics";

export default {
  name: "ProductDataPage",
  setup() {
    const barChart = {
      id: "bar",
      type: "bar",
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
            label: "Lamp Item",
            data: [40, 20, 80, 10, 7, 20, 32, 44, 55, 23, 45, 23],
            backgroundColor: "#41B883",
            borderColor: "#41B883"
          }
        ]
      }
    };

    return {
      barChart: barChart
    };
  },
  components: { Vue3ChartJs, TopMetrics },
  methods: {},
  /*data() {  // Hente data fra backend
    return {
      parts: [
        { partData: "Most changed parts", amount: 25},
        { partData: "Venezuela", color: "#E46651", amount: 20 },
        { partData: "Afghanistan", color: "#00D8FF", amount: 80 },
        { partData: "Colombia", color: "#DD1B16", amount: 10 },
        { partData: "Norge", color: "#41B883", amount: 7 }
      ]
    };
  },*/
  data() {
    return {
      productImages: [
        {
          partNumber: "1",
          partName: "Lamp",
          imgName: "ic-part-lamp"
        },
        {
          partNumber: "2",
          partName: "12V charger",
          imgName: "ic-part-adapter-charger"
        },
        {
          partNumber: "3",
          partName: "Battery",
          imgName: "ic-part-battery"
        },
        {
          partNumber: "4",
          partName: "Power button",
          imgName: "ic-part-button"
        },
        {
          partNumber: "5",
          partName: "Light bulb",
          imgName: "ic-part-lightbulb"
        },
        {
          partNumber: "6",
          partName: "Screen",
          imgName: "ic-part-screen"
        },
        {
          partNumber: "7",
          partName: "Socket charger",
          imgName: "ic-part-socket-charger"
        },
        {
          partNumber: "8",
          partName: "Solar panel",
          imgName: "ic-part-solar-panel"
        }
      ]
    };
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
h3 {
  font-size: 30px;
  margin: 30px 0;

  text-align: center;
  font-weight: bold;
  color: #2c2a29;
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
  width: 40vw;
  height: 30vh;
  margin: auto;
}

.part-icon-metric {
  width: 250px;
}
</style>
