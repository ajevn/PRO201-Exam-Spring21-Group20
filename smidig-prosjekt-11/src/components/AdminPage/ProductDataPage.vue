<template>
  <div>
    <h3>Part Statistics</h3>

    <div class="country-list-flex-container">
      <div class="pie-chart-countries">
        <vue3-chart-js ref="chartRef" v-bind="{ ...barChart }"></vue3-chart-js>
      </div>
      <description-text description-text="Previous 12 Month Data History"></description-text>
    </div>

    <div class="part-grid">
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
          display-image="{{true}}"
        />
      </div>
    </div>
    <description-text description-text="Total Parts Repaired"></description-text>

  </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import TopMetrics from "@/components/AdminPage/TopMetrics";
import { ref } from "vue";
import DescriptionText from "./DescriptionText";

export default {
  name: "ProductDataPage",
  setup() {
    const chartRef = ref(null);

    const dataBank = [
      {
        label: "Lamp item",
        backgroundColor: "#f87979",
        data: [922, 255, 260, 292, 503, 510, 530, 578, 720, 740, 839, 857]
      },
      {
        label: "12V charger item",
        backgroundColor: "#f87979",
        data: [42, 140, 822, 327, 470, 532, 542, 544, 576, 677, 747, 893]
      },
      {
        label: "Battery item",
        backgroundColor: "#f87979",
        data: [763, 52, 121, 317, 348, 355, 411, 458, 748, 186, 141, 184]
      },
      {
        label: "Power button item",
        backgroundColor: "#f87979",
        data: [105, 854, 261, 344, 944, 357, 431, 732, 869, 875, 893, 353]
      },
      {
        label: "Light bulb item",
        backgroundColor: "#f87979",
        data: [995, 92, 145, 188, 745, 299, 421, 461, 650, 274, 138, 872]
      },
      {
        label: "Screen item",
        backgroundColor: "#f87979",
        data: [170, 172, 222, 309, 310, 87, 502, 506, 673, 31, 892, 398]
      },
      {
        label: "Socket charger item",
        backgroundColor: "#f87979",
        data: [25, 825, 142, 559, 187, 288, 431, 488, 154, 707, 813, 854]
      },
      {
        label: "Solar panel item",
        backgroundColor: "#f87979",
        data: [2, 944, 141, 365, 379, 573, 685, 775, 822, 827, 913, 121]
      }
    ];

    function sumPartsOfType(productIndex) {
      var sum = 0;
      for (let i = 0; i < dataBank[productIndex - 1].data.length; i++) {
        sum += dataBank[productIndex - 1].data[i];
      }
      return sum;
    }

    function getSumPartsArray() {
      var sumParts = [];
      for (let i = 0; i < dataBank[0].data.length; i++) {
        var partSum = 0;
        for (let j = 0; j < dataBank.length; j++) {
          partSum += dataBank[j].data[i];
        }
        sumParts.push(partSum);
      }
      return sumParts;
    }

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

    return {
      barChart,
      chartRef,
      dataBank,
      sumPartsOfType,
      getSumPartsArray
    };
  },
  components: {DescriptionText, Vue3ChartJs, TopMetrics },
  methods: {
    updateData(product) {
      if (product.isChecked === true) {
        // show total sum
        this.barChart.data.datasets = [
          {
            label: "All items",
            backgroundColor: "#f87979",
            data: this.getSumPartsArray()
          }
        ];
        product.isChecked = false;
      } else {
        this.barChart.data.datasets[0] = this.dataBank[product.partNumber - 1];
        for (let i = 0; i < this.productImages.length; i++) {
          this.productImages[i].isChecked = false;
        }
        product.isChecked = true;
      }

      this.chartRef.update();
    }
  },
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
      ]
    };
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
  background-color: #7eb46b;
}
</style>
