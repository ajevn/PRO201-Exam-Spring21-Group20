<template>
  <div class="nav-bar">
    <hamburger-button @click="toggleMenu()" :is-selected="menuIsOpen" />

    <div class="logo-container">
      <router-link class="logo-link" to="/">
        <img id="logo-img" src="@/assets/Images/logo-bright.svg" alt="Bright" />
      </router-link>
    </div>
    <ul class="nav-menu" v-bind:class="{ active: menuIsOpen }">
      <nav-link
        v-for="(it, index) in menuItems"
        :key="index"
        :textValue="it.itemTitle"
        :icon="it.iconName"
        :linkDestination="it.link"
      />
    </ul>
    <!-- <h1 class="user-header">{{ user || 'Not logged in' }}</h1> -->
  </div>
</template>
<script>
import HamburgerButton from "./HamburgerButton.vue";
import NavLink from "./NavLink.vue";
export default {
  components: { HamburgerButton, NavLink },
  name: "NavBar",
  data() {
    return {
      menuItems: [
        {
          itemTitle: "Profile",
          iconName: "user",
          link: "repair",
          alt: "User icon"
        },
        {
          itemTitle: "Certifications",
          iconName: "profile",
          link: "repair",
          alt: "Certifications icon"
        },
        {
          itemTitle: "Log in",
          iconName: "enter",
          link: "repair",
          alt: "Login icon"
        }
      ],
      menuIsOpen: false // Trenger vi denne?
    };
  },
  methods: {
    toggleMenu() {
      const temp = this.menuIsOpen;
      this.menuIsOpen = !temp;
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
  // position: absolute;
  // right: 0px;
  // top: 0px;
  font-size: 1rem;
  color: #7eb46b;
}

.nav-menu {
  position: absolute;
  right: 20px;
  display: flex;
  z-index: 999;
  // border: 1px solid red;
}

@media screen and (max-width: 960px) {
  .nav-menu {
    height: calc(100vh - 80px);
    top: 80px;
    left: -100%;
    right: auto;
    // width: 300px;
    background: #25353d;
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
