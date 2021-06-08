<template>
  <div id="button-div">
    <home-select-button
      v-for="(val, index) in buttonValues"
      :key="index"
      :iconName="val.icon"
      :buttonTitle="val.title"
      :routerLinkDest="val.destination"
      :tabindex="tabindex + 1"
    />

    <home-select-button
      v-if="isAdmin"
      iconName="equalizer"
      buttonTitle="Admin"
      routerLinkDest="admin"
      :tabindex="tabindex + 1"
    />

    <modal-error-message v-if="showModal === true" @close="showModal = false">
      <template v-slot:body>E-learning is not implemented yet</template>
    </modal-error-message>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import ModalErrorMessage from "../../components/modals/ModalErrorMessage.vue";
import { ref } from "vue";
import HomeSelectButton from "./HomeSelectButton";

export default {
  name: "Home",
  components: {
    ModalErrorMessage,
    HomeSelectButton
  },
  props: {
    tabindex: {
      type: Number,
      required: false,
      default: 0
    }
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
  computed: {
    isAdmin() {
      return useStore().getters.getUserData.admin;
    }
  },
  data() {
    return {
      buttonValues: [
        {
          icon: "wrench",
          title: "Register repairs",
          destination: "repair"
        },
        {
          icon: "education",
          title: "E-Learning",
          destination: "notimplemented"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#button-div {
  width: 400px;
  padding-top: 30px;
  font-size: 0.9em;
  border-radius: 5px;
  background-color: #2c2a29;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07), -2px -3px #585858;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

@media only screen and (min-device-width: 400px) and (max-device-width: 760px) {
  #button-div {
    width: 80%;
  }

  .button {
    font-size: 1.2em;
  }
}
</style>
