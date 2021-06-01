<template>
  <div v-if="isAdmin === true">
    <base-site>
      <div class="grid-layout">
        <side-bar-menu
          class="side-bar"
          :routeFromParent="routedInParent"
          v-on:childToParent="recievedClickInChildSideMenu"
        />
        <div class="component-section-container">
          <dashboard-page
            v-if="selectedSection === 'Dashboard'"
            @childToParent="onDashboardMapClick"
          />
          <product-data-page v-if="selectedSection === 'Parts'" />
          <camp-data-page
            v-if="selectedSection === 'Camps'"
            v-bind:routedCampName="routedCampName"
          />
          <user-administration-page v-if="selectedSection === 'Users'" />
          <camp-administration-page v-if="selectedSection === 'CampsAdmin'" />
        </div>
      </div>
    </base-site>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseSite from "@/components/nav/BaseSite.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import SideBarMenu from "@/components/admin_page/SideBarMenu";
import DashboardPage from "@/components/admin_page/dashboard/DashboardMainPage.vue";
import CampDataPage from "@/components/admin_page/CampDataPage";
import ProductDataPage from "../components/admin_page/ProductDataPage";
import UserAdministrationPage from "../components/admin_page/UserAdministrationPage";
import CampAdministrationPage from "@/components/admin_page/CampAdministrationPage";

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
    },
    onDashboardMapClick(param) {
      this.routedInParent = "Camps";
      this.selectedSection = "Camps";
      this.campOverviewCampName = param;
    }
  },
  data() {
    return {
      selectedSection: "Dashboard",
      routedInParent: "Dashboard",
      isAdmin: this.retrieveIsAdmin(),
      totalRep: "Total Repairs",
      totalUnitsRegistered: "Total Units Registered",
      mostRepairedPartToday: "Most Repaired Part Today",
      campNameToRoute: ""
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
  width: 275px;
}
</style>
