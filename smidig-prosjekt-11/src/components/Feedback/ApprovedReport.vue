<template>
  <div id="approved-report-container">
    <h1>ENTRY SUCCESSFUL</h1>
    <img
      src="@/assets/Images/Icons/report-success-icon.png"
      alt="Report succesfully sent"
    />
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "Home",
  setup() {
    const store = useStore();

    onMounted(async () => {
      /*await fetch("http://localhost:3000",{
        method: "POST",
        body: {}
      });*/
      store.commit("deleteAllEntity", "");
    });
    return {};
  }
};
</script>

<!-- Adding some scss to style text and position items -->
<style lang="scss" scoped>
#approved-report-container {
  text-align: center;

  h1 {
    font-size: 50px;
    margin: 0;
    padding-top: 10vh;
    font-weight: bold;
    color: #2c2a29;
  }

  img {
    margin: 8vh auto auto;
    width: 18vw;
  }
}

@media only screen and (min-device-width: 600px) and (max-device-width: 1280px) and (orientation: landscape) {
  #approved-report-container {
    h1 {
      font-size: 30px;
    }

    img {
      width: 15vw;
    }
  }
}
</style>
