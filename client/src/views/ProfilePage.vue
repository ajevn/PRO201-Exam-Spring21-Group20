<template>
  <div class="repair">
    <div>
      <nav-bar />
    </div>
    <div class="container">
      <form @submit.prevent="modalShow">
        <div class="wrapper">
          <div class="input" id="username-wrapper">
            <label>User: </label>
            <p class="value-text">{{ user.username }}</p>
          </div>
          <div class="input" id="location-wrapper">
            <label>Location: </label>
            <p class="value-text">{{ user.campName }}</p>
          </div>
          <div class="input">
            <label>Old Password: </label>
            <input
              v-model="oldPassword"
              type="password"
              placeholder="Enter Old Password"
              required
            />
            <span>{{ oldPasswordError }} <br /></span>
          </div>
          <div class="input">
            <label>New Password: </label>
            <input
              v-model="password"
              type="password"
              placeholder="Enter Password"
              required
            />
            <span>{{ passwordError }} <br /></span>
          </div>
          <div class="input">
            <label>Confirm New Password: </label>
            <input
              v-model="confirmPassword"
              type="password"
              placeholder="Enter Password"
              required
            />
            <span>{{ CPError }}<br /></span>
          </div>
          <div>
            <button id="submit-btn" type="submit" :disabled="isSubmitting">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    <modal-change-password
      v-if="showModal === true"
      @close="modalHide"
      @commit="onSubmit"
    >
      <template v-slot:body>Confirm password change?</template>
    </modal-change-password>
  </div>
</template>

<script>
import NavBar from "@/components/nav/navbar/NavBar";
import { useField, useForm } from "vee-validate";
import ModalChangePassword from "@/components/modals/ModalChangePassword";
import { useStore } from "vuex";
import { getCurrentInstance, ref } from "vue";
import axios from "axios";

export default {
  name: "Repair",
  components: {
    ModalChangePassword,
    NavBar
  },
  setup() {
    const store = useStore();
    const { ctx: _this } = getCurrentInstance();
    const user = store.getters.getUserData;
    const showModal = ref(false);
    const schema = {
      password(value) {
        return value && value.length >= 6
          ? true
          : "Password needs to be 6 or longer";
      },
      confirmPassword(value) {
        return value === password.value ? true : "Password must match";
      }
    };
    const { handleSubmit, isSubmitting } = useForm({
      validationSchema: schema
    });
    const { errorMessage: oldPasswordError, value: oldPassword } = useField(
      "oldPassword"
    );
    const { errorMessage: passwordError, value: password } = useField(
      "password"
    );
    const { errorMessage: CPError, value: confirmPassword } = useField(
      "confirmPassword"
    );

    const modalShow = () => (showModal.value = true);
    const modalHide = () => (showModal.value = false);
    const showToast = () =>
      _this.$toast.success(`Password changed`, {
        position: "bottom"
      });
    const onSubmit = handleSubmit((values, { resetForm }) => {
      modalHide();
      axios.patch(
        `${process.env.VUE_APP_SERVER_URL}/api/edit`,
        { ...values, confirmPassword: undefined },
        { withCredentials: true }
      );
      resetForm();
      showToast();
    });

    return {
      modalShow,
      modalHide,
      showModal,
      user,
      oldPasswordError,
      oldPassword,
      password,
      passwordError,
      confirmPassword,
      CPError,
      isSubmitting,
      onSubmit
    };
  }
};
</script>
<style lang="scss" scoped>
#repair-gradient {
  background: linear-gradient(160deg, #fbf6ed 0%, #cdcbcbff 100%);
}

#username-wrapper {
  // padding-bottom: 40px;
}

.container {
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 100%;
  height: 100%;

  .wrapper {
    background: #2c2a29;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
      0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
      0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
      0 100px 80px rgba(0, 0, 0, 0.07), -2px -3px #899599;

    .value-text {
      color: white;
      font-size: 1.5em;
    }

    .input {
      margin-bottom: 1vh;
      width: 400px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: center;

      label {
        color: #a8d598;
        font-weight: bold;
        width: 200px;
      }

      input {
        width: 200px;
        padding: 0.4em;
        box-shadow: inset -2px -2px #899599;
        outline: none;
        color: #2c2a29;
        font-weight: bold;
        background: #cdcdcd;

        &::placeholder {
          color: #6d6d6d;
        }
      }

      span {
        width: 100%;
        font-size: 14px;
        font-weight: bold;
        color: #cdcdcd;
        margin: 5px 0;
      }
    }

    .admin-check {
      margin-top: 10px;

      label {
        color: #a8d598;
        font-weight: bold;
        width: 200px;
      }

      input {
        margin-left: 10px;
      }
    }

    #location-wrapper {
      margin-bottom: 30px;
    }

    #submit-btn {
      margin-top: 50px;
      background-color: #ececec;
      color: #2c2a29;
      width: 100%;
      padding: 0.5rem;
      border-radius: 5px;
      box-shadow: -1px -2px #899599;
      outline: none;
      transition: 150ms;
      font-weight: bold;

      &:hover {
        background-color: #4d5050;
        color: #ececec;
      }

      &:active {
        transform: scale(0.98);
        transition-duration: 10ms;
        box-shadow: inset 2px 2px 2px #899599;
        background-color: #6d6d6d;
      }
    }
  }
}

button {
  background: #2c2a29;
}
</style>
