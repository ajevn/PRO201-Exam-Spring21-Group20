<template>
  <div id="button-div">
    <router-link
      v-if="isAdmin === true"
      tag="button"
      to="/admin"
      type="button"
      class="font-standardText button home-learn-ico-src home-ico-style"
    >
      <h4>Admin</h4>
    </router-link>
    <router-link
      tag="button"
      to="/repair"
      type="button"
      class="font-standardText button home-repair-ico-src home-ico-style"
    >
      <h4>Register Repair</h4>
    </router-link>
    <!-- 
    <router-link
      tag="button"
      to="/#"
      type="button"
      class="font-standardText button home-learn-ico-src home-ico-style"
    >
      <h4>E-learning</h4>
    </router-link>
    -->
    <button
      class="font-standardText button home-learn-ico-src home-ico-style"
      @click="showModal = true"
    >
      <h4>E-learning</h4>
    </button>
    <modal-error-message v-if="showModal === true" @close="showModal = false">
      <template v-slot:body>E-learning is not implemented yet</template>
    </modal-error-message>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import ModalErrorMessage from "../../components/Modals/ModalErrorMessage.vue";
import { ref } from "vue";

export default {
  name: "Home",
  components: {
    ModalErrorMessage
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const showModal = ref(false);
    return {
      store,
      router,
      showModal
    };
  },
  methods: {
    retrieveIsAdmin() {
      const result = useStore().getters.getIsAdmin;
      if (result === false) {
        this.router.push({ name: "Home" });
      } else {
        return true;
      }
    }
  },
  data() {
    return {
      isAdmin: this.retrieveIsAdmin()
    };
  }
};
</script>

<style lang="scss" scoped>
#button-div {
  padding: 0 1vw;
  height: 30vh;
  width: 30vw;
  border-radius: 5px;
  background-color: #2c2a29;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07), -2px -3px #585858;
}

.button {
  background-color: #ececec;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  border-radius: 5px;
  color: #2c2a29;
  cursor: pointer;
  width: 90%;
  height: 6vh;
  margin: 5% 10% auto 5%;
  outline: none;
  transition: 150ms;

  &:hover {
    background-color: #959595;
    color: #ececec;
    transform: scale(1.01);
  }

  &:active {
    transform: scale(1);
    transition-duration: 10ms;
    box-shadow: inset 2px 2px 1px #4d5050;
    background-color: #6d6d6d;
  }

  h4 {
    margin-top: 2%;
  }
}

.isAdminClass {
  height: 30vh;
}

.home-repair-ico-src {
  background-image: url("../../assets/Images/Icons/landing_repair.png");
}

.home-learn-ico-src {
  background-image: url("../../assets/Images/Icons/landing_elearn.png");
}

.home-ico-style {
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 10%;
}

@media only screen and (min-device-width: 600px) and (max-device-width: 1280px) and (orientation: landscape) {
  #button-div {
    height: 26vh;
  }

  .button {
    font-size: 1em;
  }
}
</style>
