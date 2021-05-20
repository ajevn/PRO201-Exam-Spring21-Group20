<template>
  <!-- main page to login -->
  <div id="login-container" class="bg-logoBar">
    <!-- from to post -->
    <form @submit.prevent="post">
      <div>
        <!-- username input -->
        <label for="username">Username</label>
        <input
          class="login-input"
          v-model="username"
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        />
      </div>
      <div>
        <!-- password input -->
        <label for="password">Password</label>
        <input
          class="login-input"
          v-model="password"
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        />
      </div>

      <div>
        <!-- submit button -->
        <input id="login-submit" type="submit" />
      </div>
    </form>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  //composition API
  setup() {
    const store = useStore();
    const router = useRouter();
    const username = ref("");
    const password = ref("");

    //computed property from store
    const user = computed(() => {
      return store.getters.getUserId;
    });
    //is called on form submit
    function post() {
      login(username.value);
      router.push({ name: "Home" });
    }
    // validate and send data to backend
    function login(userId) {
      //TODO submit to database and validate data
      store.commit("login", userId);
    }

    return {
      username,
      password,
      post,
      user
    };
  }
};
</script>

<style lang="scss" scoped>
#login-container {
  position: relative;
  top: 200px;
  width: 100%;
  max-width: 20rem;
  margin: auto;
  padding: 1.25rem;
  border-radius: 5px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07), -2px -3px #899599;

  form {
    label {
      font-weight: bold;
      color: #a8d598;
      display: block;
      margin-bottom: 0.5rem;
    }

    input {
      width: 100%;
      padding: 0.5rem;
      margin-bottom: 1.5rem;
      color: #423048;
      border-color: #433149;
      font-weight: bold;
      outline: none;
    }

    .login-input {
      box-shadow: inset -2px -2px #899599;
      background: #e7e7e7;
    }
  }

  #login-submit {
    background-color: #9fd18d;
    color: #423048;
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    box-shadow: -1px -2px #899599;

    &:hover {
      background-color: #c0f6ae;
    }

    &:active {
      transform: scale(0.98);
      transition-duration: 10ms;
      box-shadow: inset 2px 2px 2px #899599;

      background-color: #d6ffcb;
    }
  }
}

@media only screen and (min-device-width: 600px) and (max-device-width: 1280px) and (orientation: landscape) {
  #login-container {
    top: 50px;
  }
}
</style>
