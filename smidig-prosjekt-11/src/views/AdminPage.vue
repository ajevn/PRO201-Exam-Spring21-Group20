<template>
  <div v-if="isAdmin === true">
    <base-site>
      <div class="grid-layout">
        <side-bar-menu
          class="side-bar"
          v-on:childToParent="recievedClickInChildSideMenu"
        />
        <div class="component-section-container">
          <dashboard-page v-if="selectedSection === 'Dashboard'" />
          <product-data-page v-if="selectedSection === 'parts'" />
          <camp-data-page v-if="selectedSection === 'Camps'" />
          <user-administration-page v-if="selectedSection === 'Users'" />
          <camp-administration-page v-if="selectedSection === 'CampsAdmin'" />
        </div>
      </div>
    </base-site>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseSite from "@/components/Nav/BaseSite.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import SideBarMenu from "@/components/AdminPage/SideBarMenu";
import DashboardPage from "@/components/AdminPage/Dashboard/DashboardMainPage.vue";
import CampDataPage from "@/components/AdminPage/CampDataPage";
import ProductDataPage from "../components/AdminPage/ProductDataPage";
import UserAdministrationPage from "../components/AdminPage/UserAdministrationPage";
import CampAdministrationPage from "@/components/AdminPage/CampAdministrationPage";

export default {
  name: "adminPage",
  setup() {
    const store = useStore();
    const router = useRouter();
    return {
      store,
      router
    };
  },
  components: {
    CampAdministrationPage,
    UserAdministrationPage,
    ProductDataPage,
    CampDataPage,
    SideBarMenu,
    DashboardPage,
    // CampDataPage,
    BaseSite
  },
  methods: {
    retrieveIsAdmin() {
      const result = useStore().getters.getIsAdmin;
      if (result === false) {
        this.router.push({ name: "Home" });
      } else {
        return true;
      }
    },
    recievedClickInChildSideMenu(event) {
      this.selectedSection = event;
    }
  },
  data() {
    return {
      selectedSection: "Dashboard",
      isAdmin: this.retrieveIsAdmin(),
      totalRep: "Total Repairs",
      totalUnitsRegistered: "Total Units Registered",
      mostRepairedPartToday: "Most Repaired Part Today"
    };
  }
};
</script>

<style scoped>
.component-section-container {
}
.grid-layout {
  display: grid;
  grid-template-columns: 17% 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
  background-color: white;
}
.side-bar {
  width: auto;
}
</style>
