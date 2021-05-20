<template>
  <!-- Base site layout. Can be used as a component inside other pages. Includes Logo, Logo-Bar and employee name -->
  <div class="base-container">
    <header>
      <nav-bar />
    </header>
    <div class="content-container">
      <slot />
    </div>

    <!-- <footer>
            <div class="copyright-header">
                Copyright &copy; 2020 - Smidig-Prosjekt Gruppe 11
            </div>
        </footer> -->
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

    // Hamburger
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
      // HamburgerIcon,
      // LoginButton,
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
    background: linear-gradient(160deg, #fbf6ed 0%, #cdcbcbff 100%);
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
