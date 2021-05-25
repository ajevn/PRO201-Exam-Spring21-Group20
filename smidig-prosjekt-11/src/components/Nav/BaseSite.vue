<template>
  <!-- Base site layout. Can be used as a component inside other pages. Includes Logo, Logo-Bar and employee name -->
  <div class="base-container">
    <header>
      <nav-bar />
    </header>
    <div class="content-container">
      <slot />
    </div>

    <footer>
      <div class="copyright-header">
        Copyright &copy; 2021 - Smidig-Prosjekt Gruppe 11
      </div>
    </footer>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import NavBar from "./navbar/NavBar.vue";

export default {
  components: {
    NavBar
  },
  name: "LogoBar",
  setup() {
    const store = useStore();
    const router = useRouter();
    const user = computed(() => {
      return store.getters.getUserId;
    });
    function goHome() {
      router.push({ name: "home" });
    }
    return {
      user,
      goHome
    };
  },
  data() {
    return {
      sideBarVisible: false
    };
  },
  methods: {
    toggleSidebar() {
      const sideBarBool = this.sideBarVisible;
      this.sideBarVisible = !sideBarBool;
      this.$refs.hamburger.updateloginValues();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content-container {
  height: calc(100vh - 80px);
  background: linear-gradient(160deg, #c4c4c4 0%, #57595d 100%);
}

.white-text {
  color: white;
}

.copyright-header {
  position: absolute;
  left: 5px;
  bottom: 5px;
  color: white;
}
</style>
