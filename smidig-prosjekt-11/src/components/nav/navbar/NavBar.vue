<template>
  <div class="nav-bar">
    <hamburger-button @click="toggleMenu()" :is-selected="menuIsOpen" />

    <div class="logo-container">
      <router-link class="logo-link" to="/">
        <img id="logo-img" src="@/assets/images/logo-bright.svg" alt="Bright" />
      </router-link>
    </div>
    <ul
      class="nav-menu"
      v-bind:class="{ active: menuIsOpen }"
      v-if="isLoggedIn"
    >
      <nav-link
        v-for="(item, index) in menuItems"
        :key="index"
        :textValue="item.itemTitle"
        :icon="item.iconName"
        :linkDestination="item.link"
      />

      <nav-link
        textValue="Log out"
        icon="exit"
        @click="logOut"
        linkDestination="login"
      />
    </ul>
    <!-- <h1 class="user-header">{{ user || 'Not logged in' }}</h1> -->
  </div>
</template>
<script>
import HamburgerButton from "@/components/nav/navbar/HamburgerButton.vue";
import NavLink from "@/components/nav/navbar/NavLink.vue";

export default {
  components: { HamburgerButton, NavLink },
  name: "NavBar",
  data() {
    return {
      menuItems: [
        {
          itemTitle: "Profile",
          iconName: "user",
          link: "profile",
          alt: "User icon"
        },
        {
          itemTitle: "Certifications",
          iconName: "profile",
          link: "notimplemented",
          alt: "Certifications icon"
        }
      ],
      menuIsOpen: false
    };
  },
  computed: {
    isLoggedIn() {
      const userData = this.$store.getters.getUserData;
      if (!userData) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    toggleMenu() {
      const temp = this.menuIsOpen;
      this.menuIsOpen = !temp;
    },
    logOut() {
      this.$store.dispatch("logout").then(() => {
        this.$router.replace("/login");
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.nav-bar {
  width: 100%;
  max-width: 100%;
  height: 80px;
  background: #2c2a29;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
}

.hamburger-button {
  display: none;
}

.logo-container {
  height: 60%;
  width: auto;
  display: flex;
  align-self: center;
  align-items: center;

  img {
    height: 100%;
  }

  .logo-link {
    height: 100%;
  }
}

.user-header {
  font-size: 1rem;
  color: #7eb46b;
}

.nav-menu {
  position: absolute;
  right: 20px;
  display: flex;
  z-index: 999;
}

@media screen and (max-width: 960px) {
  .nav-menu {
    height: calc(100vh - 80px);
    top: 80px;
    left: -100%;
    right: auto;
    // width: 300px;
    background: #3d3a39;
    transition: all 0.5s ease;

    padding: 20px;
    flex-direction: column;
    justify-content: flex-start;
  }

  .hamburger-button {
    display: flex;
  }

  .nav-menu.active {
    left: 0;
  }
}
</style>
