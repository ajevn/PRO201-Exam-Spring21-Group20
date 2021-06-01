<template>
  <div class="home">
    <base-site>
      <div class="home-select-container">
        <home-select @click="showModal = true" class="home-select" />
      </div>
      <footer>
        <div class="copyright-header">
          Copyright &copy; 2021 - Smidig-Prosjekt Gruppe 11
        </div>
      </footer>
    </base-site>
  </div>
</template>

<script>
import BaseSite from "../components/Nav/BaseSite.vue";
import HomeSelect from "../components/Nav/HomeSelect.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  data() {
    return {};
  },
  name: "Home",
  setup() {
    const store = useStore();
    const router = useRouter();

    if (store.getters.getUserId == null) router.push({ name: "LoginPage" });
  },
  components: {
    BaseSite,
    HomeSelect
  }
};
</script>

<style lang="scss" scoped>
// Adding div around element to center home-select-component
.home-select-container {
  width: 100%;
  height: 100%;
  z-index: 2;
  margin: auto;
  background: rgb(249, 254, 244);
  background: linear-gradient(160deg, #c4c4c4 0%, #57595d 100%);
}

.home-select {
  margin: auto;
  position: relative;
  top: 30%;
  z-index: 2;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
}

.copyright-header {
  position: absolute;
  left: 5px;
  bottom: 5px;
  color: white;
}
</style>
