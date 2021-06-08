<template>
  <div id="search-container">
    <input
      type="text"
      placeholder="Camp Search..."
      v-model="searchQuery"
      @focus="showSearchSuggestions = true"
      v-on:blur="delayedHide"
    />
    <div class="search-suggestions" v-if="showSearchSuggestions">
      <div
        v-for="product in searchedProducts"
        :key="product.id"
        v-on:click="showResult(product)"
        style="margin: 0"
      >
        <div class="search-list-items">
          <div>{{ product.id }} ({{ product.location }})</div>
        </div>
      </div>
    </div>
  </div>
  <description-text
    class="description-text-element"
    description-text="Select a camp to display corresponding data"
  ></description-text>
  <!-- Loading Icon -->
  <div class="lds-ring" v-if="isMapLoading">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div
    v-bind:style="[mapIsHidden ? { display: 'none' } : { height: '70%' }]"
    id="mapid"
    class="map-container"
  ></div>

  <div v-if="mapIsHidden" class="showMapBtn">
    <button v-on:click="replaceResultsWithMap">Show map</button>
  </div>

  <div v-if="showSearchResults">
    <h3>
      Camp Data {{ selectedCampName !== "" ? " for " + selectedCampName : "" }}
    </h3>
  </div>

  <div v-if="showSearchResults" class="part-grid">
    <div
      v-for="product in products"
      :key="product.partNumber"
      class="part-cards"
    >
      <TopMetrics
        :name-of-data="product.partName"
        :data-to-display="product.totalRepairs.toString()"
        :metric-icon-src="product.imgName"
        :display-image="true"
      />
    </div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { createMap } from "@/assets/js/map.js";
import TopMetrics from "@/components/admin_page/TopMetrics";
import { computed, getCurrentInstance, onMounted, ref } from "vue";
import DescriptionText from "./DescriptionText";
import { useStore } from "vuex";

export default {
  name: "CampDataPage",
  emits: ["camp"],
  props: {
    resetCamp: {
      type: Function
    },
    editRoute: {
      type: Function
    },
    routedCampName: {
      type: String
    }
  },
  setup: function(props, { emit }) {
    const bol = true;
    const store = useStore();
    const { ctx: _this } = getCurrentInstance();
    const showSearchSuggestions = ref(false);
    const showSearchResults = ref(false);
    const mapIsHidden = ref(false);
    const searchQuery = ref("");
    const selectedCampName = ref();
    const products = ref([
      {
        partNumber: "1",
        partName: "Lamp",
        imgName: "ic-part-lamp",
        totalRepairs: "0"
      },
      {
        partNumber: "2",
        partName: "12V charger",
        imgName: "ic-part-adapter-charger",
        totalRepairs: "0"
      },
      {
        partNumber: "3",
        partName: "Battery",
        imgName: "ic-part-battery",
        totalRepairs: "0"
      },
      {
        partNumber: "4",
        partName: "Power button",
        imgName: "ic-part-button",
        totalRepairs: "0"
      },
      {
        partNumber: "5",
        partName: "Light bulb",
        imgName: "ic-part-lightbulb",
        totalRepairs: "0"
      },
      {
        partNumber: "6",
        partName: "Screen",
        imgName: "ic-part-screen",
        totalRepairs: "0"
      },
      {
        partNumber: "7",
        partName: "Socket charger",
        imgName: "ic-part-socket-charger",
        totalRepairs: "0"
      },
      {
        partNumber: "8",
        partName: "Solar panel",
        imgName: "ic-part-solar-panel",
        totalRepairs: "0"
      }
    ]);

    const campData = ref([]);

    const searchedProducts = computed(() =>
      campData.value.filter(
        product =>
          !(
            product.id
              .toLowerCase()
              .indexOf(searchQuery.value.toLowerCase()) === -1 &&
            product.location
              .toLowerCase()
              .indexOf(searchQuery.value.toLowerCase()) === -1
          )
      )
    );
    const isMapLoading = ref(true);
    onMounted(async () => {
      await store.dispatch("fetchCampData");
      campData.value = await store.getters.getCampData;
      isMapLoading.value = false;
      createMap(
        23,
        20,
        2,
        true,
        campData.value,
        products.value,
        updateData,
        replaceMapWithResults,
        setSelectedCampName,
        null
      );

      if (props.routedCampName) {
        setSelectedCampName(props.routedCampName);
        replaceMapWithResults();
        // Get index of selected camp by comparing name

        const campIndex = campData.value.findIndex(
          camp => camp.id === props.routedCampName
        );

        for (let i = 0; i < products.value.length; i++) {
          products.value[i].totalRepairs =
            campData.value[campIndex].campRepairs[i];
        }
        updateData();
        emit("camp");
      }
    });
    const updateData = () => {
      _this.$forceUpdate();
    };

    function delayedHide() {
      setTimeout(() => {
        showSearchSuggestions.value = false;
      }, 200);
    }

    function replaceMapWithResults() {
      mapIsHidden.value = true;
      showSearchResults.value = true;
    }

    function replaceResultsWithMap() {
      mapIsHidden.value = false;
      showSearchResults.value = false;
      searchQuery.value = "";
    }

    function setSelectedCampName(name) {
      selectedCampName.value = name;
    }

    function showResult(product) {
      searchQuery.value = "";
      for (let i = 0; i < products.value.length; i++) {
        products.value[i].totalRepairs = product.campRepairs[i];
      }
      selectedCampName.value = product.id;
      replaceMapWithResults();
    }

    return {
      bol,
      store,
      searchedProducts,
      searchQuery,
      products,
      campData,
      selectedCampName,
      showSearchSuggestions,
      showSearchResults,
      mapIsHidden,
      delayedHide,
      replaceResultsWithMap,
      showResult,
      isMapLoading
    };
  },
  components: {
    DescriptionText,
    TopMetrics
  }
};
</script>

<style lang="scss" scoped>
.description-text-element {
  position: absolute;
  right: 0;
  left: 0;
  top: 75px;
}

#search-container {
  display: flex;
  flex-wrap: wrap; /* Optional. only if you want the items to wrap */
  justify-content: center; /* For horizontal alignment */
  padding: 20px 0;
  width: 600px;
  margin: auto;

  input {
    width: 500px;
    height: 40px;
    padding: 10px;
    background: #fff;
    outline: none;
    -webkit-box-shadow: 3px 3px 3px 2px rgba(90, 89, 89, 0.31);
    box-shadow: 3px 3px 15px 2px rgba(90, 89, 89, 0.31);
    border-radius: 10px 10px 0 0;
  }

  .search-suggestions {
    flex: none;
    position: relative;
    left: 0;
    right: 0;
    bottom: 0;
    width: 500px;
    height: auto;
    max-height: 100px;
    margin: 0;
    overflow-y: scroll;
    background: #fff;
    -webkit-box-shadow: 3px 3px 3px 2px rgba(90, 89, 89, 0.31);
    box-shadow: 3px 3px 15px 2px rgba(90, 89, 89, 0.31);
    border-radius: 0 0 10px 10px;
    z-index: 1000;

    .search-list-items {
      padding: 5px 5px 5px 10px;
      cursor: pointer;

      &:hover {
        background-color: #d4d4d4;
      }
    }
  }
}

.showMapBtn {
  position: absolute;
  top: 15%;
  left: 45%;
  text-align: center;
  width: 150px;
  height: 40px;
  box-shadow: -1px -2px #e7e7e7, 1px 2px 5px #b8b8b8;
  border-radius: 5px;
  transition: 150ms;

  &:hover {
    background-color: #e5e5e5;
    transform: scale(1.01);
    color: #ececec;
  }

  &:active {
    transform: scale(1);
    box-shadow: inset 2px 2px 2px #899599;
    background-color: #dedede;
  }

  button {
    width: 150px;
    height: 40px;
    color: #2c2a29;
    font-weight: bold;
    outline: none;
  }
}

h3 {
  font-size: 1.3em;
  font-weight: bold;
  position: absolute;
  top: 36%;
  left: 39%;
}

.map-container {
  position: absolute;
  top: 17%;
  right: 3%;
  width: 80vw;
  margin: 20px auto auto auto;
  background-color: #fff;
  border: 1px solid lightgrey;
}

.part-grid {
  display: flex;
  width: 55%;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  margin: auto auto 1vh;
  position: absolute;
  top: 40%;
  left: 23%;
}

.part-cards {
  width: 210px;
  height: 175px;
  transform: scale(0.75);
  -webkit-box-shadow: 5px 5px 21px 4px rgba(90, 89, 89, 0.31);
  box-shadow: 5px 5px 21px 4px rgba(90, 89, 89, 0.31);
  border-radius: 15px;
  padding: 15px;
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
  left: 40vw;
  top: 30vh;
  z-index: 100;
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
